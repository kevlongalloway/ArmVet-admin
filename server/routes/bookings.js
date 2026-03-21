const express = require('express');
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

const VALID_STATUSES = ['pending', 'approved', 'declined', 'on-calendar', 'archived'];

// GET /api/bookings
router.get('/', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM bookings ORDER BY submitted_at DESC'
    );
    // Normalize column names to camelCase for the frontend
    const bookings = rows.map((r) => ({
      id: r.id,
      name: r.name,
      email: r.email,
      phone: r.phone,
      org: r.org,
      service: r.service,
      category: r.category,
      date: r.date ? r.date.toISOString().split('T')[0] : null,
      time: r.time,
      status: r.status,
      message: r.message,
      submittedAt: r.submitted_at ? r.submitted_at.toISOString().split('T')[0] : null,
    }));
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// PUT /api/bookings/:id/status
router.put('/:id/status', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!VALID_STATUSES.includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    const { rows } = await pool.query(
      'UPDATE bookings SET status = $1 WHERE id = $2 RETURNING id, status',
      [status, id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// DELETE /api/bookings/:id
router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('DELETE FROM bookings WHERE id = $1 RETURNING id', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
