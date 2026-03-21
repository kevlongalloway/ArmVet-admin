const express = require('express');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

// ─── Password hashing (PBKDF2, no extra deps) ───
function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString('hex');
  const hash = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha256').toString('hex');
  return `${salt}:${hash}`;
}

function verifyHash(password, stored) {
  const [salt, hash] = stored.split(':');
  if (!salt || !hash) return false;
  try {
    const candidate = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha256').toString('hex');
    return crypto.timingSafeEqual(Buffer.from(candidate, 'hex'), Buffer.from(hash, 'hex'));
  } catch {
    return false;
  }
}

// POST /api/auth/login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    return res.status(500).json({ error: 'Admin credentials not configured' });
  }

  if (username !== adminUsername) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Check for a custom hashed password stored in DB; fall back to env var
  const pwRow = await pool.query("SELECT value FROM app_config WHERE key = 'admin_password_hash'");
  const passwordValid = pwRow.rows.length > 0
    ? verifyHash(password, pwRow.rows[0].value)
    : password === adminPassword;

  if (!passwordValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, global.__JWT_SECRET__, { expiresIn: '12h' });

  const tutRow = await pool.query("SELECT value FROM app_config WHERE key = 'tutorial_complete'");
  const tutorialComplete = tutRow.rows.length > 0 && tutRow.rows[0].value === '1';

  res.json({ token, tutorialComplete });
});

// POST /api/auth/change-password
router.post('/change-password', requireAuth, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ error: 'Current and new password required' });
  }
  if (newPassword.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }

  // Verify current password
  const pwRow = await pool.query("SELECT value FROM app_config WHERE key = 'admin_password_hash'");
  const valid = pwRow.rows.length > 0
    ? verifyHash(currentPassword, pwRow.rows[0].value)
    : currentPassword === process.env.ADMIN_PASSWORD;

  if (!valid) {
    return res.status(401).json({ error: 'Current password is incorrect' });
  }

  const newHash = hashPassword(newPassword);
  await pool.query(
    `INSERT INTO app_config (key, value) VALUES ('admin_password_hash', $1)
     ON CONFLICT (key) DO UPDATE SET value = $1`,
    [newHash]
  );

  res.json({ success: true });
});

// PUT /api/auth/tutorial-complete
router.put('/tutorial-complete', requireAuth, async (req, res) => {
  try {
    await pool.query(
      `INSERT INTO app_config (key, value) VALUES ('tutorial_complete', '1')
       ON CONFLICT (key) DO UPDATE SET value = '1'`
    );
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// DELETE /api/auth/tutorial-complete
router.delete('/tutorial-complete', requireAuth, async (req, res) => {
  try {
    await pool.query("DELETE FROM app_config WHERE key = 'tutorial_complete'");
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
