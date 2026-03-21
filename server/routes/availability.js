const express = require('express');
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

// GET /api/availability — all slots, admin view
router.get('/', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT s.id, s.date, s.start_time, s.duration_minutes, s.label,
             s.is_booked, s.booking_id, s.created_at,
             b.name AS booked_by
      FROM availability_slots s
      LEFT JOIN bookings b ON b.id = s.booking_id
      ORDER BY s.date ASC, s.start_time ASC
    `);
    const slots = rows.map((r) => ({
      id: r.id,
      date: r.date.toISOString().split('T')[0],
      startTime: r.start_time,
      durationMinutes: r.duration_minutes,
      label: r.label || '',
      isBooked: r.is_booked,
      bookingId: r.booking_id,
      bookedBy: r.booked_by || null,
    }));
    res.json(slots);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// POST /api/availability/batch — create multiple slots from a time range
router.post('/batch', requireAuth, async (req, res) => {
  const { date, fromTime, toTime, durationMinutes = 60, label = '' } = req.body;

  if (!date || !fromTime || !toTime) {
    return res.status(400).json({ error: 'date, fromTime, and toTime are required' });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ error: 'date must be YYYY-MM-DD' });
  }
  if (!/^\d{2}:\d{2}$/.test(fromTime) || !/^\d{2}:\d{2}$/.test(toTime)) {
    return res.status(400).json({ error: 'fromTime and toTime must be HH:MM (24h)' });
  }
  if (![30, 60, 90].includes(Number(durationMinutes))) {
    return res.status(400).json({ error: 'durationMinutes must be 30, 60, or 90' });
  }

  const [fromH, fromM] = fromTime.split(':').map(Number);
  const [toH, toM] = toTime.split(':').map(Number);
  const fromMins = fromH * 60 + fromM;
  const toMins = toH * 60 + toM;

  if (toMins <= fromMins) {
    return res.status(400).json({ error: 'toTime must be after fromTime' });
  }

  // Generate all start times within the range
  const slots = [];
  for (let m = fromMins; m + Number(durationMinutes) <= toMins; m += Number(durationMinutes)) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    slots.push(`${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`);
  }

  if (slots.length === 0) {
    return res.status(400).json({ error: 'The time range is too short for even one session' });
  }

  try {
    let created = 0;
    for (const startTime of slots) {
      const result = await pool.query(
        `INSERT INTO availability_slots (date, start_time, duration_minutes, label)
         VALUES ($1, $2, $3, $4)
         ON CONFLICT (date, start_time) DO NOTHING`,
        [date, startTime, Number(durationMinutes), label.trim().slice(0, 100)]
      );
      if (result.rowCount > 0) created++;
    }
    res.status(201).json({ success: true, count: created, total: slots.length });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// POST /api/availability — create a single slot
router.post('/', requireAuth, async (req, res) => {
  const { date, startTime, durationMinutes = 60, label = '' } = req.body;

  if (!date || !startTime) {
    return res.status(400).json({ error: 'date and startTime are required' });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ error: 'date must be YYYY-MM-DD' });
  }
  if (!/^\d{2}:\d{2}$/.test(startTime)) {
    return res.status(400).json({ error: 'startTime must be HH:MM (24h)' });
  }
  if (![30, 60, 90].includes(Number(durationMinutes))) {
    return res.status(400).json({ error: 'durationMinutes must be 30, 60, or 90' });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO availability_slots (date, start_time, duration_minutes, label)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (date, start_time) DO NOTHING
       RETURNING id`,
      [date, startTime, Number(durationMinutes), label.trim().slice(0, 100)]
    );
    if (rows.length === 0) {
      return res.status(409).json({ error: 'A slot already exists at that date and time' });
    }
    res.status(201).json({ success: true, id: rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// DELETE /api/availability/:id — delete an un-booked slot
router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(
      'SELECT is_booked FROM availability_slots WHERE id = $1',
      [id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Slot not found' });
    if (rows[0].is_booked) return res.status(409).json({ error: 'Cannot delete a booked slot' });

    await pool.query('DELETE FROM availability_slots WHERE id = $1', [id]);
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
