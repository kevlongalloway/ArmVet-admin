import type { Env } from './types';

// ─── Config helpers ───────────────────────────────────────────────────────────

export async function getConfig(db: D1Database, key: string): Promise<string | null> {
  const row = await db
    .prepare('SELECT value FROM app_config WHERE key = ?')
    .bind(key)
    .first<{ value: string }>();
  return row ? row.value : null;
}

export async function setConfig(db: D1Database, key: string, value: string): Promise<void> {
  await db
    .prepare('INSERT INTO app_config (key, value) VALUES (?, ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value')
    .bind(key, value)
    .run();
}

export async function deleteConfig(db: D1Database, key: string): Promise<void> {
  await db.prepare('DELETE FROM app_config WHERE key = ?').bind(key).run();
}

export async function getAllConfig(db: D1Database): Promise<Record<string, string>> {
  const { results } = await db
    .prepare('SELECT key, value FROM app_config')
    .all<{ key: string; value: string }>();
  const out: Record<string, string> = {};
  for (const row of results) out[row.key] = row.value;
  return out;
}

// ─── JWT secret management ────────────────────────────────────────────────────
// Module-level cache: persists across requests within the same Worker isolate
// (warm requests). Cold starts read from D1 once then cache in memory.

let _jwtSecretCache: string | null = null;

export async function getOrCreateJwtSecret(env: Env): Promise<string> {
  if (_jwtSecretCache) return _jwtSecretCache;

  const stored = await getConfig(env.DB, 'jwt_secret');
  if (stored) {
    _jwtSecretCache = stored;
    return stored;
  }

  // First-run: generate a secret and persist it
  const bytes = new Uint8Array(64);
  crypto.getRandomValues(bytes);
  const secret = Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  await setConfig(env.DB, 'jwt_secret', secret);
  _jwtSecretCache = secret;
  return secret;
}
