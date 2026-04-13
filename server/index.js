require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { initDb, getOrCreateJwtSecret, getConfig } = require('./db');

const app = express();

// ─── Security Headers ───
app.use(helmet({
  contentSecurityPolicy: false, // Managed separately for the SPA
}));

// ─── CORS ───
// Dev origins always allowed; production origins managed via admin config
const DEV_ORIGINS = ['http://localhost:3000', 'http://localhost:5173'];

// Custom CORS middleware: same-origin requests are always allowed (Vite adds
// `crossorigin` to module scripts which causes the browser to send an Origin
// header even for same-host fetches — the `cors` package never sees `req` so
// we need our own middleware wrapper to handle this case).
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const host = req.headers.host; // e.g. "armvet.onrender.com" or "localhost:3000"

  // No Origin header — server-to-server or curl, always allow
  if (!origin) return next();

  // Same-origin — allow unconditionally (covers production domain automatically)
  if (origin === `https://${host}` || origin === `http://${host}`) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-CSRF-Token');
    if (req.method === 'OPTIONS') return res.sendStatus(204);
    return next();
  }

  // Cross-origin — check DEV_ORIGINS + DB allowed list
  cors({
    origin: async (o, cb) => {
      if (DEV_ORIGINS.includes(o)) return cb(null, true);
      try {
        const stored = await getConfig('allowed_origins');
        const dbOrigins = stored ? JSON.parse(stored) : [];
        if (dbOrigins.includes(o)) return cb(null, true);
        cb(new Error(`CORS: origin ${o} not allowed`));
      } catch {
        cb(new Error('CORS configuration error'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
    credentials: false,
  })(req, res, next);
});

app.use(express.json({ limit: '16kb' }));

// ─── Rate Limiters ───
const publicLimiter = rateLimit({
  windowMs: 60 * 1000,       // 1 minute
  max: 10,                    // 10 submissions/min per IP
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests, please try again later.' },
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 20,                    // 20 login attempts per 15 min
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many login attempts, please try again later.' },
});

async function start() {
  await initDb();
  global.__JWT_SECRET__ = await getOrCreateJwtSecret();

  // ─── Routes ───
  app.use('/api/auth',         authLimiter,   require('./routes/auth'));
  app.use('/api/public',       publicLimiter, require('./routes/public'));
  app.use('/api/bookings',                    require('./routes/bookings'));
  app.use('/api/contacts',                    require('./routes/contacts'));
  app.use('/api/availability',                require('./routes/availability'));
  // CRM routes
  const { tagsRouter, entityTagsRouter } = require('./routes/tags');
  app.use('/api/deals',       express.json(), require('./routes/deals'));
  app.use('/api/activity',    express.json(), require('./routes/activity'));
  app.use('/api/tasks',       express.json(), require('./routes/tasks'));
  app.use('/api/tags',        express.json(), tagsRouter);
  app.use('/api/entity-tags', express.json(), entityTagsRouter);
  app.use('/api/analytics',                   require('./routes/analytics'));
  app.use('/api/assistant',    express.json(), require('./routes/assistant'));
  // Admin config routes (larger body limit for logo uploads)
  app.use('/api/admin',        express.json({ limit: '3mb' }), require('./routes/config'));

  // ─── Serve React SPA ───
  const clientDist = path.join(__dirname, '../client/dist');
  // Cache JS/CSS assets long-term (they have content hashes in filenames)
  app.use(express.static(clientDist, {
    setHeaders(res, filePath) {
      if (filePath.endsWith('.html')) {
        // Never cache HTML so the browser always gets the latest index.html
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    },
  }));
  app.get('*', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.sendFile(path.join(clientDist, 'index.html'));
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

start().catch((err) => {
  console.error('Startup error:', err);
  process.exit(1);
});
