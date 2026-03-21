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
  `);

  // Seed bookings if empty
  const { rows: bRows } = await pool.query('SELECT COUNT(*) FROM bookings');
  if (parseInt(bRows[0].count) === 0) {
    await pool.query(`
      INSERT INTO bookings (name, email, phone, org, service, category, date, time, status, message, submitted_at) VALUES
      ('Col. James Richardson','j.richardson@army.mil','703-555-0142','Army National Guard','Leadership Development','Military','2026-03-20','10:00 AM','pending','Interested in a 2-day leadership workshop for our battalion leadership team (approx 18 people). Looking at Q2 timeframe.','2026-03-15'),
      ('Dr. Patricia Owens','p.owens@nasa.gov','202-555-0198','NASA Goddard','Executive Coaching','Federal','2026-03-22','2:00 PM','approved','Need executive coaching for 3 newly promoted GS-15 division chiefs. Want to discuss scope and timeline.','2026-03-12'),
      ('Mark Thompson','mthompson@vertexcorp.com','571-555-0267','Vertex Corporation','Organizational Culture Training','Corporate','2026-03-25','11:00 AM','pending','Our engineering division (120 people) has had significant turnover. Looking for culture assessment and training program.','2026-03-16'),
      ('SGM Angela Davis','angela.davis@tradoc.army.mil','757-555-0311','TRADOC','Speaking Engagements','Military','2026-03-18','9:00 AM','approved','Requesting Mr. Smith as keynote speaker for our annual Senior Leader Development Course. 200+ attendees expected.','2026-03-10'),
      ('Robert Chen','rchen@dhsconsulting.com','301-555-0455','DHS Consulting Group','Federal HR Consulting','Federal','2026-04-01','3:00 PM','pending','Need help with workforce planning for a new DHS sub-agency. Looking for a comprehensive HR modernization roadmap.','2026-03-17'),
      ('Lisa Morales','lmorales@techforward.io','404-555-0523','TechForward Inc.','Small Group Workshops','Corporate','2026-03-28','1:00 PM','declined','Half-day workshop for our leadership team of 12. Focus on psychological safety and accountability.','2026-03-08')
    `);
  }

  // Seed contacts if empty
  const { rows: cRows } = await pool.query('SELECT COUNT(*) FROM contacts');
  if (parseInt(cRows[0].count) === 0) {
    await pool.query(`
      INSERT INTO contacts (name, email, phone, category, subject, message, status, submitted_at) VALUES
      ('SSG Kevin Brooks','kbrooks@guard.mil','540-555-0678','Military','Unit Leadership Training Inquiry','I''m an NCO looking into leadership training options for our company-level leaders. Can you send info on available programs?','new','2026-03-17'),
      ('Jennifer Walsh','jwalsh@fedscope.gov','202-555-0891','Federal','Workforce Planning RFI','Our agency is issuing an RFI for workforce planning services. Would Armvet be interested in responding? Deadline is April 15.','new','2026-03-16'),
      ('David Park','dpark@innovatehr.com','703-555-0134','Corporate','Partnership Opportunity','We''re an HR tech company and would love to explore a partnership with Armvet for our federal clients. Open to a call?','replied','2026-03-14'),
      ('CW3 Maria Santos','msantos@usar.army.mil','910-555-0456','Military','DEOMI Follow-up','Attended Mr. Smith''s keynote at DEOMI last year. Our brigade commander wants to discuss bringing him in for a leadership offsite.','new','2026-03-15')
    `);
  }
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
