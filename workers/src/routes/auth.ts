import { Hono } from 'hono';
import type { Env, Variables } from '../types';
import { signJWT, hashPassword, verifyPassword, requireAuth } from '../auth';
import { getOrCreateJwtSecret, getConfig, setConfig, deleteConfig } from '../db';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

// POST /api/auth/login
app.post('/login', async (c) => {
  const { username, password } = await c.req.json<{ username: string; password: string }>();

  const adminUsername = c.env.ADMIN_USERNAME;
  const adminPassword = c.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    return c.json({ error: 'Admin credentials not configured' }, 500);
  }
  if (username !== adminUsername) {
    return c.json({ error: 'Invalid credentials' }, 401);
  }

  // Check for a custom hashed password stored in DB; fall back to env var
  const stored = await getConfig(c.env.DB, 'admin_password_hash');
  const passwordValid = stored
    ? await verifyPassword(password, stored)
    : password === adminPassword;

  if (!passwordValid) {
    return c.json({ error: 'Invalid credentials' }, 401);
  }

  const secret = await getOrCreateJwtSecret(c.env);
  const token = await signJWT({ username }, secret);

  const [tutRow, setupRow] = await Promise.all([
    getConfig(c.env.DB, 'tutorial_complete'),
    getConfig(c.env.DB, 'setup_complete'),
  ]);

  return c.json({
    token,
    tutorialComplete: tutRow === '1',
    setupComplete: setupRow === '1',
  });
});

// POST /api/auth/change-password  (auth required)
app.post('/change-password', requireAuth, async (c) => {
  const { currentPassword, newPassword } = await c.req.json<{
    currentPassword: string;
    newPassword: string;
  }>();

  if (!currentPassword || !newPassword) {
    return c.json({ error: 'Current and new password required' }, 400);
  }
  if (newPassword.length < 8) {
    return c.json({ error: 'Password must be at least 8 characters' }, 400);
  }

  const stored = await getConfig(c.env.DB, 'admin_password_hash');
  const valid = stored
    ? await verifyPassword(currentPassword, stored)
    : currentPassword === c.env.ADMIN_PASSWORD;

  if (!valid) {
    return c.json({ error: 'Current password is incorrect' }, 401);
  }

  const newHash = await hashPassword(newPassword);
  await setConfig(c.env.DB, 'admin_password_hash', newHash);
  return c.json({ success: true });
});

// PUT /api/auth/tutorial-complete  (auth required)
app.put('/tutorial-complete', requireAuth, async (c) => {
  await setConfig(c.env.DB, 'tutorial_complete', '1');
  return c.json({ success: true });
});

// DELETE /api/auth/tutorial-complete  (auth required)
app.delete('/tutorial-complete', requireAuth, async (c) => {
  await deleteConfig(c.env.DB, 'tutorial_complete');
  return c.json({ success: true });
});

export default app;
