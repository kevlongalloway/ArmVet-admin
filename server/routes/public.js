const express = require('express');
const { pool } = require('../db');
const { generateCsrfToken, requireCsrf } = require('../middleware/csrf');
const router = express.Router();

const VALID_CATEGORIES = ['Military', 'Federal', 'Corporate'];
const VALID_SERVICES = [
  'Leadership Development',
  'Executive Coaching',
  'Small Group Workshops',
  'Individual Development',
  'Organizational Culture Training',
  'Federal HR Consulting',
  'Workforce Planning',
  'HR Modernization',
  'Speaking Engagements',
];

// GET /api/public/csrf-token
// Fetch a short-lived CSRF token before submitting a form
router.get('/csrf-token', (req, res) => {
  res.json({ token: generateCsrfToken() });
});

// POST /api/public/bookings
// Submit a consultation booking request from the main site
router.post('/bookings', requireCsrf, async (req, res) => {
  const { name, email, phone, org, service, category, date, time, message } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'name is required' });
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email is required' });
  }
  if (category && !VALID_CATEGORIES.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }
  if (service && !VALID_SERVICES.includes(service)) {
    return res.status(400).json({ error: 'Invalid service' });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO bookings (name, email, phone, org, service, category, date, time, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING id`,
      [
        name.trim().slice(0, 255),
        email.trim().slice(0, 255),
        (phone || '').trim().slice(0, 50),
        (org || '').trim().slice(0, 255),
        (service || '').trim().slice(0, 255),
        (category || '').trim().slice(0, 50),
        date || null,
        (time || '').trim().slice(0, 50),
        (message || '').trim().slice(0, 5000),
      ]
    );
    res.status(201).json({ success: true, id: rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save booking' });
  }
});

// POST /api/public/contacts
// Submit a contact/inquiry message from the main site
router.post('/contacts', requireCsrf, async (req, res) => {
  const { name, email, phone, category, subject, message } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'name is required' });
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email is required' });
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'message is required' });
  }
  if (category && !VALID_CATEGORIES.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO contacts (name, email, phone, category, subject, message)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id`,
      [
        name.trim().slice(0, 255),
        email.trim().slice(0, 255),
        (phone || '').trim().slice(0, 50),
        (category || '').trim().slice(0, 50),
        (subject || '').trim().slice(0, 255),
        message.trim().slice(0, 5000),
      ]
    );
    res.status(201).json({ success: true, id: rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

module.exports = router;
