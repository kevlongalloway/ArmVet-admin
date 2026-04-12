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

export async function getOrCreateJwtSecret(env: Env): Promise<string> {
  // Fast path: KV cache
  const cached = await env.KV.get('jwt_secret');
  if (cached) return cached;

  // Medium path: D1
  const stored = await getConfig(env.DB, 'jwt_secret');
  if (stored) {
    await env.KV.put('jwt_secret', stored); // warm cache
    return stored;
  }

  // Slow path: generate and persist
  const bytes = new Uint8Array(64);
  crypto.getRandomValues(bytes);
  const secret = Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  await setConfig(env.DB, 'jwt_secret', secret);
  await env.KV.put('jwt_secret', secret);
  return secret;
}

// ─── Rate limiter (KV-backed sliding window) ──────────────────────────────────

export async function checkRateLimit(
  kv: KVNamespace,
  identifier: string,
  maxRequests: number,
  windowMs: number,
): Promise<boolean> {
  const windowSlot = Math.floor(Date.now() / windowMs);
  const key = `rl:${identifier}:${windowSlot}`;
  const raw = await kv.get(key);
  const count = raw ? parseInt(raw, 10) : 0;
  if (count >= maxRequests) return false;
  const ttlSeconds = Math.ceil(windowMs / 1000) + 5; // a little buffer
  await kv.put(key, String(count + 1), { expirationTtl: ttlSeconds });
  return true;
}
