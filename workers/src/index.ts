import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { Env, Variables } from './types';
import { getConfig } from './db';

import authRoutes from './routes/auth';
import publicRoutes from './routes/public';
import bookingsRoutes from './routes/bookings';
import contactsRoutes from './routes/contacts';
import availabilityRoutes from './routes/availability';
import dealsRoutes from './routes/deals';
import activityRoutes from './routes/activity';
import tasksRoutes from './routes/tasks';
import analyticsRoutes from './routes/analytics';
import configRoutes from './routes/config';
import { tagsApp, entityTagsApp } from './routes/tags';

const DEV_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:5173',
  'http://localhost:8787',
];

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

// ─── CORS ─────────────────────────────────────────────────────────────────────
app.use(
  '*',
  cors({
    origin: async (origin, c) => {
      if (!origin) return origin; // server-to-server — allow

      // Always allow the /debug endpoint regardless of origin config,
      // so it's reachable even before allowed_origins is configured.
      if (c.req.path === '/debug') return origin;

      if (DEV_ORIGINS.includes(origin)) return origin;
      try {
        const stored = await getConfig(c.env.DB, 'allowed_origins');
        const list = stored ? (JSON.parse(stored) as string[]) : [];
        // '*' in the list means allow all origins (open mode for initial setup)
        if (list.includes('*') || list.includes(origin)) return origin;
      } catch {
        if (c.env.ENVIRONMENT !== 'production') return origin;
      }
      return null;
    },
    allowHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: false,
    maxAge: 600,
  }),
);

// ─── Routes ───────────────────────────────────────────────────────────────────
app.route('/api/auth',         authRoutes);
app.route('/api/public',       publicRoutes);
app.route('/api/bookings',     bookingsRoutes);
app.route('/api/contacts',     contactsRoutes);
app.route('/api/availability', availabilityRoutes);
app.route('/api/deals',        dealsRoutes);
app.route('/api/activity',     activityRoutes);
app.route('/api/tasks',        tasksRoutes);
app.route('/api/tags',         tagsApp);
app.route('/api/entity-tags',  entityTagsApp);
app.route('/api/analytics',    analyticsRoutes);
app.route('/api/admin',        configRoutes);

// ─── Debug endpoint ───────────────────────────────────────────────────────────
// Safe diagnostics — never exposes secret values, only presence.
// Visit https://<worker>.workers.dev/debug to check deployment state.
app.get('/debug', async (c) => {
  let allowedOrigins: unknown = 'db-error';
  let dbStatus = 'error';
  try {
    const stored = await getConfig(c.env.DB, 'allowed_origins');
    allowedOrigins = stored ? JSON.parse(stored) : [];
    dbStatus = 'ok';
  } catch (e) {
    allowedOrigins = String(e);
  }
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    environment: c.env.ENVIRONMENT ?? 'not set',
    db: dbStatus,
    adminUsernameConfigured: !!c.env.ADMIN_USERNAME,
    adminPasswordConfigured: !!c.env.ADMIN_PASSWORD,
    allowedOrigins,
    requestOrigin: c.req.header('origin') ?? 'none (direct request)',
    requestHost: c.req.header('host') ?? 'unknown',
  });
});

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }));

// ─── 404 fallback ─────────────────────────────────────────────────────────────
app.notFound((c) => c.json({ error: 'Not found' }, 404));

// ─── Global error handler ─────────────────────────────────────────────────────
app.onError((err, c) => {
  console.error('[Worker Error]', err);
  return c.json({ error: 'Internal server error' }, 500);
});

export default app;
