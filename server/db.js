const { Pool } = require('pg');
const crypto = require('crypto');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS app_config (
      key   VARCHAR(255) PRIMARY KEY,
      value TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS bookings (
      id           SERIAL PRIMARY KEY,
      name         VARCHAR(255) NOT NULL,
      email        VARCHAR(255),
      phone        VARCHAR(50),
      org          VARCHAR(255),
      service      VARCHAR(255),
      category     VARCHAR(50),
      date         DATE,
      time         VARCHAR(50),
      status       VARCHAR(50) DEFAULT 'pending',
      message      TEXT,
      submitted_at TIMESTAMP DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS contacts (
      id           SERIAL PRIMARY KEY,
      name         VARCHAR(255) NOT NULL,
      email        VARCHAR(255),
      phone        VARCHAR(50),
      category     VARCHAR(50),
      subject      VARCHAR(255),
      message      TEXT,
      status       VARCHAR(50) DEFAULT 'new',
      submitted_at TIMESTAMP DEFAULT NOW()
    );

    CREATE TABLE IF NOT EXISTS availability_slots (
      id               SERIAL PRIMARY KEY,
      date             DATE NOT NULL,
      start_time       VARCHAR(10) NOT NULL,
      duration_minutes INT NOT NULL DEFAULT 60,
      label            VARCHAR(100),
      is_booked        BOOLEAN DEFAULT FALSE,
      booking_id       INT REFERENCES bookings(id) ON DELETE SET NULL,
      created_at       TIMESTAMP DEFAULT NOW()
    );
  `);

  // Unique index prevents double-booking the same slot; safe to run on existing DBs
  await pool.query(`
    CREATE UNIQUE INDEX IF NOT EXISTS avail_slots_date_time_unique
    ON availability_slots (date, start_time)
  `);

  await seedDefaultConfig();
}

async function getOrCreateJwtSecret() {
  const { rows } = await pool.query(
    "SELECT value FROM app_config WHERE key = 'jwt_secret'"
  );
  if (rows.length > 0) return rows[0].value;

  const secret = crypto.randomBytes(64).toString('hex');
  await pool.query(
    "INSERT INTO app_config (key, value) VALUES ('jwt_secret', $1)",
    [secret]
  );
  return secret;
}

async function seedDefaultConfig() {
  const defaults = [
    ['company_name', 'Your Company'],
    ['company_tagline', ''],
    ['company_logo', ''],
    ['support_email', 'support@example.com'],
    ['company_website', ''],
    ['company_phone', ''],
    ['services', JSON.stringify([
      'Leadership Development',
      'Executive Coaching',
      'Small Group Workshops',
      'Individual Development',
      'Organizational Culture Training',
      'Federal HR Consulting',
      'Workforce Planning',
      'HR Modernization',
      'Speaking Engagements',
    ])],
    ['categories', JSON.stringify(['Military', 'Federal', 'Corporate'])],
    ['allowed_origins', JSON.stringify(['http://localhost:3000', 'http://localhost:5173'])],
  ];
  for (const [key, value] of defaults) {
    await pool.query(
      `INSERT INTO app_config (key, value) VALUES ($1, $2) ON CONFLICT (key) DO NOTHING`,
      [key, value]
    );
  }
}

async function getConfig(key) {
  const { rows } = await pool.query(
    'SELECT value FROM app_config WHERE key = $1',
    [key]
  );
  return rows.length > 0 ? rows[0].value : null;
}

async function setConfig(key, value) {
  await pool.query(
    `INSERT INTO app_config (key, value) VALUES ($1, $2)
     ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value`,
    [key, value]
  );
}

async function deleteConfig(key) {
  await pool.query('DELETE FROM app_config WHERE key = $1', [key]);
}

async function getAllConfig() {
  const { rows } = await pool.query('SELECT key, value FROM app_config');
  const result = {};
  for (const row of rows) result[row.key] = row.value;
  return result;
}

module.exports = { pool, initDb, getOrCreateJwtSecret, seedDefaultConfig, getConfig, setConfig, deleteConfig, getAllConfig };
