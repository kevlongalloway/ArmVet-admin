const express = require('express');
const router = express.Router();
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');

router.use(requireAuth);

// GET /api/deals
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT d.*,
        c.name  AS contact_name,  c.email AS contact_email,
        b.name  AS booking_name
      FROM deals d
      LEFT JOIN contacts c ON c.id = d.contact_id
      LEFT JOIN bookings b ON b.id = d.booking_id
      ORDER BY d.created_at DESC
    `);
    res.json(rows.map(r => ({
      id: r.id, title: r.title,
      contactId: r.contact_id, contactName: r.contact_name, contactEmail: r.contact_email,
      bookingId: r.booking_id, bookingName: r.booking_name,
      stageId: r.stage_id, value: parseFloat(r.value) || 0,
      probability: r.probability, closeDate: r.close_date,
      status: r.status, createdAt: r.created_at, updatedAt: r.updated_at,
    })));
  } catch (err) {
    console.error('GET /deals', err);
    res.status(500).json({ error: 'Failed to fetch deals' });
  }
});

// POST /api/deals
router.post('/', async (req, res) => {
  const { title, contact_id, booking_id, stage_id = 'new', value = 0, probability = 0, close_date } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  try {
    const { rows } = await pool.query(
      `INSERT INTO deals (title, contact_id, booking_id, stage_id, value, probability, close_date)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [title, contact_id || null, booking_id || null, stage_id, value, probability, close_date || null]
    );
    const d = rows[0];
    res.status(201).json({ id: d.id, title: d.title, stageId: d.stage_id, value: parseFloat(d.value), probability: d.probability, closeDate: d.close_date, status: d.status, contactId: d.contact_id, bookingId: d.booking_id, createdAt: d.created_at });
  } catch (err) {
    console.error('POST /deals', err);
    res.status(500).json({ error: 'Failed to create deal' });
  }
});

// PUT /api/deals/:id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const fields = ['title', 'contact_id', 'booking_id', 'stage_id', 'value', 'probability', 'close_date', 'status'];
  const updates = [];
  const values = [];
  let i = 1;
  for (const f of fields) {
    if (req.body[f] !== undefined) {
      updates.push(`${f} = $${i++}`);
      values.push(req.body[f] === '' ? null : req.body[f]);
    }
  }
  if (!updates.length) return res.status(400).json({ error: 'No fields to update' });
  updates.push(`updated_at = NOW()`);
  values.push(id);
  try {
    const { rows } = await pool.query(
      `UPDATE deals SET ${updates.join(', ')} WHERE id = $${i} RETURNING *`,
      values
    );
    if (!rows.length) return res.status(404).json({ error: 'Deal not found' });
    const d = rows[0];
    res.json({ id: d.id, title: d.title, stageId: d.stage_id, value: parseFloat(d.value), probability: d.probability, closeDate: d.close_date, status: d.status, contactId: d.contact_id, bookingId: d.booking_id, updatedAt: d.updated_at });
  } catch (err) {
    console.error('PUT /deals/:id', err);
    res.status(500).json({ error: 'Failed to update deal' });
  }
});

// DELETE /api/deals/:id
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM deals WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete deal' });
  }
});

module.exports = router;
