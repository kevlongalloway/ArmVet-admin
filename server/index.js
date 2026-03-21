require('dotenv').config();
const express = require('express');
const path = require('path');
const { initDb, getOrCreateJwtSecret } = require('./db');

const app = express();
app.use(express.json());

// Set JWT secret on startup (before routes are called)
let jwtSecret;

async function start() {
  await initDb();
  jwtSecret = await getOrCreateJwtSecret();
  global.__JWT_SECRET__ = jwtSecret;

  // Routes
  app.use('/api/auth', require('./routes/auth'));
  app.use('/api/bookings', require('./routes/bookings'));
  app.use('/api/contacts', require('./routes/contacts'));

  // Serve React build in production
  const clientDist = path.join(__dirname, '../client/dist');
  app.use(express.static(clientDist));
  app.get('*', (req, res) => {
    res.sendFile(path.join(clientDist, 'index.html'));
  });

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

start().catch((err) => {
  console.error('Startup error:', err);
  process.exit(1);
});
