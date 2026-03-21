const express = require('express');
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

const VALID_STATUSES = ['new', 'replied', 'archived'];

// GET /api/contacts
router.get('/', requireAuth, async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM contacts ORDER BY submitted_at DESC'
    );
    const contacts = rows.map((r) => ({
      id: r.id,
      name: r.name,
      email: r.email,
      phone: r.phone,
      category: r.category,
      subject: r.subject,
      message: r.message,
      status: r.status,
      submittedAt: r.submitted_at ? r.submitted_at.toISOString().split('T')[0] : null,
    }));
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// PUT /api/contacts/:id/status
router.put('/:id/status', requireAuth, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!VALID_STATUSES.includes(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    const { rows } = await pool.query(
      'UPDATE contacts SET status = $1 WHERE id = $2 RETURNING id, status',
      [status, id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// DELETE /api/contacts/:id
router.delete('/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('DELETE FROM contacts WHERE id = $1 RETURNING id', [id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
