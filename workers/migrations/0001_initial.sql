-- ─────────────────────────────────────────────────────────────────────────────
-- ArmVet Admin – Initial D1 (SQLite) Schema
-- Apply with: wrangler d1 migrations apply armvet-db
-- Local:      wrangler d1 migrations apply armvet-db --local
-- ─────────────────────────────────────────────────────────────────────────────

-- Key-value store for all system configuration
CREATE TABLE IF NOT EXISTS app_config (
  key   TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

-- Booking / consultation requests submitted by clients
CREATE TABLE IF NOT EXISTS bookings (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  name         TEXT    NOT NULL,
  email        TEXT,
  phone        TEXT,
  org          TEXT,
  service      TEXT,
  category     TEXT,
  date         TEXT,     -- YYYY-MM-DD
  time         TEXT,     -- HH:MM (24h)
  status       TEXT    NOT NULL DEFAULT 'pending',
  message      TEXT,
  score        INTEGER NOT NULL DEFAULT 0,
  submitted_at TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- General contact / inquiry form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  name         TEXT    NOT NULL,
  email        TEXT,
  phone        TEXT,
  category     TEXT,
  subject      TEXT,
  message      TEXT,
  status       TEXT    NOT NULL DEFAULT 'new',
  score        INTEGER NOT NULL DEFAULT 0,
  submitted_at TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- Admin-managed open time slots for the booking widget
CREATE TABLE IF NOT EXISTS availability_slots (
  id               INTEGER PRIMARY KEY AUTOINCREMENT,
  date             TEXT    NOT NULL,   -- YYYY-MM-DD
  start_time       TEXT    NOT NULL,   -- HH:MM (24h)
  duration_minutes INTEGER NOT NULL DEFAULT 60,
  label            TEXT,
  is_booked        INTEGER NOT NULL DEFAULT 0,  -- 0=false, 1=true
  booking_id       INTEGER REFERENCES bookings(id) ON DELETE SET NULL,
  created_at       TEXT    NOT NULL DEFAULT (datetime('now')),
  UNIQUE(date, start_time)
);

-- CRM: Sales pipeline deals
CREATE TABLE IF NOT EXISTS deals (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  title       TEXT    NOT NULL,
  contact_id  INTEGER REFERENCES contacts(id) ON DELETE SET NULL,
  booking_id  INTEGER REFERENCES bookings(id) ON DELETE SET NULL,
  stage_id    TEXT    NOT NULL DEFAULT 'new',
  value       REAL    NOT NULL DEFAULT 0,
  probability INTEGER NOT NULL DEFAULT 0,
  close_date  TEXT,   -- YYYY-MM-DD
  status      TEXT    NOT NULL DEFAULT 'open',
  created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at  TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- CRM: Activity / interaction log
CREATE TABLE IF NOT EXISTS activity_log (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  entity_type TEXT    NOT NULL,   -- 'deal' | 'contact' | 'booking'
  entity_id   INTEGER NOT NULL,
  type        TEXT    NOT NULL DEFAULT 'note',  -- note|call|email|meeting|status_change
  content     TEXT,
  created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- CRM: Tasks linked to any entity
CREATE TABLE IF NOT EXISTS tasks (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  title       TEXT    NOT NULL,
  entity_type TEXT,   -- 'deal' | 'contact' | 'booking' | NULL for standalone
  entity_id   INTEGER,
  due_date    TEXT,   -- YYYY-MM-DD
  completed   INTEGER NOT NULL DEFAULT 0,  -- 0=false, 1=true
  created_at  TEXT    NOT NULL DEFAULT (datetime('now'))
);

-- CRM: Tag catalogue
CREATE TABLE IF NOT EXISTS tags (
  id    INTEGER PRIMARY KEY AUTOINCREMENT,
  name  TEXT NOT NULL UNIQUE,
  color TEXT NOT NULL DEFAULT '#6B7280'
);

-- CRM: Many-to-many entity <-> tag mapping
CREATE TABLE IF NOT EXISTS entity_tags (
  entity_type TEXT    NOT NULL,
  entity_id   INTEGER NOT NULL,
  tag_id      INTEGER NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (entity_type, entity_id, tag_id)
);
