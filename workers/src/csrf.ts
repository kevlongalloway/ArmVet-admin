import { createMiddleware } from 'hono/factory';
import type { Env, Variables } from './types';
import { getOrCreateJwtSecret } from './db';

const TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour

// ─── Helpers ──────────────────────────────────────────────────────────────────

async function hmacHex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign(
    'HMAC',
    key,
    new TextEncoder().encode(message),
  );
  return Array.from(new Uint8Array(sig))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function constantTimeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/** Generate a time-limited CSRF token: `{timestamp}.{hmac}` */
export async function generateCsrfToken(secret: string): Promise<string> {
  const timestamp = Date.now().toString();
  const hmac = await hmacHex(secret, `csrf:${timestamp}`);
  return `${timestamp}.${hmac}`;
}

/** Validate a CSRF token. Returns true if valid and not expired. */
export async function validateCsrfToken(
  token: string,
  secret: string,
): Promise<boolean> {
  if (!token || typeof token !== 'string') return false;
  const [timestamp, hmac] = token.split('.');
  if (!timestamp || !hmac) return false;
  if (Date.now() - parseInt(timestamp, 10) > TOKEN_TTL_MS) return false;
  const expected = await hmacHex(secret, `csrf:${timestamp}`);
  return constantTimeEqual(hmac, expected);
}

// ─── Hono requireCsrf middleware ──────────────────────────────────────────────

export const requireCsrf = createMiddleware<{
  Bindings: Env;
  Variables: Variables;
}>(async (c, next) => {
  const token = c.req.header('X-CSRF-Token') ?? '';
  const secret = await getOrCreateJwtSecret(c.env);
  const valid = await validateCsrfToken(token, secret);
  if (!valid) {
    return c.json({ error: 'Invalid or missing CSRF token' }, 403);
  }
  await next();
});
