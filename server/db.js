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

module.exports = { pool, initDb, getOrCreateJwtSecret };
