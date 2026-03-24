const express = require('express');
const router = express.Router();
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');

router.use(requireAuth);

// GET /api/activity?entity_type=X&entity_id=Y
router.get('/', async (req, res) => {
  const { entity_type, entity_id } = req.query;
  if (!entity_type || !entity_id) return res.status(400).json({ error: 'entity_type and entity_id required' });
  try {
    const { rows } = await pool.query(
      `SELECT * FROM activity_log WHERE entity_type = $1 AND entity_id = $2 ORDER BY created_at DESC`,
      [entity_type, entity_id]
    );
    res.json(rows.map(r => ({ id: r.id, entityType: r.entity_type, entityId: r.entity_id, type: r.type, content: r.content, createdAt: r.created_at })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch activity' });
  }
});

// POST /api/activity
router.post('/', async (req, res) => {
  const { entity_type, entity_id, type = 'note', content } = req.body;
  if (!entity_type || !entity_id || !content) return res.status(400).json({ error: 'entity_type, entity_id, content required' });
  const VALID_TYPES = ['note', 'call', 'email', 'meeting', 'status_change'];
  if (!VALID_TYPES.includes(type)) return res.status(400).json({ error: 'Invalid type' });
  try {
    const { rows } = await pool.query(
      `INSERT INTO activity_log (entity_type, entity_id, type, content) VALUES ($1, $2, $3, $4) RETURNING *`,
      [entity_type, entity_id, type, content]
    );
    const r = rows[0];
    res.status(201).json({ id: r.id, entityType: r.entity_type, entityId: r.entity_id, type: r.type, content: r.content, createdAt: r.created_at });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add activity' });
  }
});

// DELETE /api/activity/:id
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM activity_log WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete activity' });
  }
});

module.exports = router;
