// ─── Cloudflare Worker Bindings ───────────────────────────────────────────────
export interface Env {
  /** D1 SQLite database */
  DB: D1Database;
  /** R2 bucket for logo / media storage */
  R2: R2Bucket;
  /** Admin username (plaintext env var or secret) */
  ADMIN_USERNAME: string;
  /** Admin password (plaintext env var or secret) */
  ADMIN_PASSWORD: string;
  ENVIRONMENT?: string;
}

// ─── Hono context type extensions ────────────────────────────────────────────
export interface Variables {
  /** Set by requireAuth middleware */
  user: JWTPayload;
  /** Cached JWT secret for the current request */
  jwtSecret: string;
}

// ─── JWT ─────────────────────────────────────────────────────────────────────
export interface JWTPayload {
  username: string;
  iat: number;
  exp: number;
}

// ─── Database row shapes ──────────────────────────────────────────────────────
export interface BookingRow {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  org: string | null;
  service: string | null;
  category: string | null;
  date: string | null;
  time: string | null;
  status: string;
  message: string | null;
  score: number;
  submitted_at: string;
}

export interface ContactRow {
  id: number;
  name: string;
  email: string | null;
  phone: string | null;
  category: string | null;
  subject: string | null;
  message: string | null;
  status: string;
  score: number;
  submitted_at: string;
}

export interface SlotRow {
  id: number;
  date: string;
  start_time: string;
  duration_minutes: number;
  label: string | null;
  is_booked: number;  // 0 | 1
  booking_id: number | null;
  created_at: string;
}

export interface DealRow {
  id: number;
  title: string;
  contact_id: number | null;
  booking_id: number | null;
  stage_id: string;
  value: number;
  probability: number;
  close_date: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  // JOINed fields
  contact_name?: string | null;
  contact_email?: string | null;
  booking_name?: string | null;
}

export interface ActivityRow {
  id: number;
  entity_type: string;
  entity_id: number;
  type: string;
  content: string | null;
  created_at: string;
}

export interface TaskRow {
  id: number;
  title: string;
  entity_type: string | null;
  entity_id: number | null;
  due_date: string | null;
  completed: number;  // 0 | 1
  created_at: string;
}

export interface TagRow {
  id: number;
  name: string;
  color: string;
}

export interface ConfigRow {
  key: string;
  value: string;
}
