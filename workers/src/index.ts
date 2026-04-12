import { Hono } from 'hono';
import { cors } from 'hono/cors';
import type { Env, Variables } from './types';
import { checkRateLimit, getConfig } from './db';

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
      if (DEV_ORIGINS.includes(origin)) return origin;
      try {
        const stored = await getConfig(c.env.DB, 'allowed_origins');
        const list = stored ? (JSON.parse(stored) as string[]) : [];
        if (list.includes(origin)) return origin;
      } catch {
        // Config read failure — be permissive in dev, restrictive in prod
        if (c.env.ENVIRONMENT !== 'production') return origin;
      }
      return null; // reject unknown origins
    },
    allowHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: false,
    maxAge: 600,
  }),
);

// ─── Rate limiters ────────────────────────────────────────────────────────────

/** 10 requests / 60 s per IP — applied to public form-submission endpoints */
app.use('/api/public/*', async (c, next) => {
  const ip =
    c.req.header('CF-Connecting-IP') ??
    c.req.header('X-Forwarded-For') ??
    'unknown';
  const ok = await checkRateLimit(c.env.KV, `pub:${ip}`, 10, 60_000);
  if (!ok) return c.json({ error: 'Too many requests, please try again later.' }, 429);
  await next();
});

/** 20 requests / 15 min per IP — applied to the login endpoint */
app.use('/api/auth/login', async (c, next) => {
  const ip =
    c.req.header('CF-Connecting-IP') ??
    c.req.header('X-Forwarded-For') ??
    'unknown';
  const ok = await checkRateLimit(c.env.KV, `auth:${ip}`, 20, 15 * 60_000);
  if (!ok) return c.json({ error: 'Too many login attempts, please try again later.' }, 429);
  await next();
});

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
