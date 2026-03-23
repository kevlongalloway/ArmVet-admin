const express = require('express');
const { pool, getConfig } = require('../db');
const { generateCsrfToken, requireCsrf } = require('../middleware/csrf');
const router = express.Router();

async function getValidCategories() {
  const stored = await getConfig('categories');
  return stored ? JSON.parse(stored) : ['Military', 'Federal', 'Corporate'];
}

async function getValidServices() {
  const stored = await getConfig('services');
  return stored ? JSON.parse(stored) : [];
}

// GET /api/public/csrf-token
router.get('/csrf-token', (req, res) => {
  res.json({ token: generateCsrfToken() });
});

// GET /api/public/availability
// Returns upcoming un-booked slots for the main site booking UI
router.get('/availability', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT id, date, start_time, duration_minutes, label
      FROM availability_slots
      WHERE is_booked = FALSE AND date >= CURRENT_DATE
      ORDER BY date ASC, start_time ASC
    `);
    const slots = rows.map((r) => ({
      id: r.id,
      date: r.date.toISOString().split('T')[0],
      startTime: r.start_time,
      durationMinutes: r.duration_minutes,
      label: r.label || '',
    }));
    res.json(slots);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// POST /api/public/bookings
router.post('/bookings', requireCsrf, async (req, res) => {
  const { name, email, phone, org, service, category, date, time, message, slotId } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'name is required' });
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email is required' });
  }
  const [validCategories, validServices] = await Promise.all([getValidCategories(), getValidServices()]);
  if (category && validCategories.length > 0 && !validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }
  if (service && validServices.length > 0 && !validServices.includes(service)) {
    return res.status(400).json({ error: 'Invalid service' });
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    let bookingDate = date || null;
    let bookingTime = (time || '').trim().slice(0, 50);

    if (slotId) {
      // Lock the slot row to prevent double-booking
      const { rows: slotRows } = await client.query(
        'SELECT id, date, start_time, is_booked FROM availability_slots WHERE id = $1 FOR UPDATE',
        [slotId]
      );
      if (slotRows.length === 0) {
        await client.query('ROLLBACK');
        return res.status(404).json({ error: 'Slot not found' });
      }
      if (slotRows[0].is_booked) {
        await client.query('ROLLBACK');
        return res.status(409).json({ error: 'Slot already booked' });
      }
      // Use the slot's date/time for the booking
      bookingDate = slotRows[0].date.toISOString().split('T')[0];
      bookingTime = slotRows[0].start_time;
    }

    const { rows } = await client.query(
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
        bookingDate,
        bookingTime,
        (message || '').trim().slice(0, 5000),
      ]
    );
    const bookingId = rows[0].id;

    if (slotId) {
      await client.query(
        'UPDATE availability_slots SET is_booked = TRUE, booking_id = $1 WHERE id = $2',
        [bookingId, slotId]
      );
    }

    await client.query('COMMIT');
    res.status(201).json({ success: true, id: bookingId });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'Failed to save booking' });
  } finally {
    client.release();
  }
});

// POST /api/public/contacts
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
  const validCategories = await getValidCategories();
  if (category && validCategories.length > 0 && !validCategories.includes(category)) {
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

// GET /api/public/config — public company info, services, categories
router.get('/config', async (req, res) => {
  try {
    const [name, tagline, logo, services, categories] = await Promise.all([
      getConfig('company_name'),
      getConfig('company_tagline'),
      getConfig('company_logo'),
      getConfig('services'),
      getConfig('categories'),
    ]);
    res.json({
      company_name: name || 'Your Company',
      company_tagline: tagline || '',
      company_logo: logo || '',
      services: JSON.parse(services || '[]'),
      categories: JSON.parse(categories || '[]'),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load config' });
  }
});

module.exports = router;
