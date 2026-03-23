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

app.use(cors({
  origin: async (origin, callback) => {
    if (!origin) return callback(null, true); // server-to-server / curl
    try {
      const stored = await getConfig('allowed_origins');
      const dbOrigins = stored ? JSON.parse(stored) : [];
      const allAllowed = [...new Set([...DEV_ORIGINS, ...dbOrigins])];
      if (allAllowed.includes(origin)) return callback(null, true);
      callback(new Error(`CORS: origin ${origin} not allowed`));
    } catch {
      callback(new Error('CORS configuration error'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-Token'],
  credentials: false,
}));

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
