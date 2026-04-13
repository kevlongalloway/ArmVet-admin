const express = require('express');
const router = express.Router();
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');

router.use(requireAuth);

// GET /api/tasks
router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM tasks ORDER BY completed ASC, due_date ASC NULLS LAST, created_at ASC`
    );
    res.json(rows.map(r => ({
      id: r.id, title: r.title, entityType: r.entity_type, entityId: r.entity_id,
      dueDate: r.due_date, completed: r.completed, createdAt: r.created_at,
    })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

// POST /api/tasks
router.post('/', async (req, res) => {
  const { title, entity_type, entity_id, due_date } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  try {
    const { rows } = await pool.query(
      `INSERT INTO tasks (title, entity_type, entity_id, due_date) VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, entity_type || null, entity_id || null, due_date || null]
    );
    const r = rows[0];
    res.status(201).json({ id: r.id, title: r.title, entityType: r.entity_type, entityId: r.entity_id, dueDate: r.due_date, completed: r.completed, createdAt: r.created_at });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

// PUT /api/tasks/:id
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const allowed = ['title', 'entity_type', 'entity_id', 'due_date', 'completed'];
  const updates = [], values = [];
  let i = 1;
  for (const f of allowed) {
    if (req.body[f] !== undefined) {
      updates.push(`${f} = $${i++}`);
      values.push(req.body[f] === '' ? null : req.body[f]);
    }
  }
  if (!updates.length) return res.status(400).json({ error: 'No fields to update' });
  values.push(id);
  try {
    const { rows } = await pool.query(
      `UPDATE tasks SET ${updates.join(', ')} WHERE id = $${i} RETURNING *`,
      values
    );
    if (!rows.length) return res.status(404).json({ error: 'Task not found' });
    const r = rows[0];
    res.json({ id: r.id, title: r.title, entityType: r.entity_type, entityId: r.entity_id, dueDate: r.due_date, completed: r.completed });
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

// DELETE /api/tasks/:id
router.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM tasks WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

module.exports = router;
