const express = require('express');
const jwt = require('jsonwebtoken');
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const adminUsername = process.env.ADMIN_USERNAME;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminUsername || !adminPassword) {
    return res.status(500).json({ error: 'Admin credentials not configured' });
  }

  if (username !== adminUsername || password !== adminPassword) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, global.__JWT_SECRET__, { expiresIn: '12h' });

  // Check if the tutorial has been completed
  const { rows } = await pool.query(
    "SELECT value FROM app_config WHERE key = 'tutorial_complete'"
  );
  const tutorialComplete = rows.length > 0 && rows[0].value === '1';

  res.json({ token, tutorialComplete });
});

// PUT /api/auth/tutorial-complete — mark tutorial as done (persisted in DB)
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

// DELETE /api/auth/tutorial-complete — reset tutorial so it shows again
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
