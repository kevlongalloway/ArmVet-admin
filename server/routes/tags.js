const express = require('express');
const tagsRouter = express.Router();
const entityTagsRouter = express.Router();
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');

tagsRouter.use(requireAuth);
entityTagsRouter.use(requireAuth);

// ─── Tags CRUD ───────────────────────────────────────────────────────────────

// GET /api/tags
tagsRouter.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM tags ORDER BY name ASC');
    res.json(rows.map(r => ({ id: r.id, name: r.name, color: r.color })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tags' });
  }
});

// POST /api/tags
tagsRouter.post('/', async (req, res) => {
  const { name, color = '#6B7280' } = req.body;
  if (!name) return res.status(400).json({ error: 'name is required' });
  try {
    const { rows } = await pool.query(
      `INSERT INTO tags (name, color) VALUES ($1, $2)
       ON CONFLICT (name) DO UPDATE SET color = EXCLUDED.color RETURNING *`,
      [name.trim(), color]
    );
    res.status(201).json({ id: rows[0].id, name: rows[0].name, color: rows[0].color });
  } catch (err) {
    res.status(500).json({ error: 'Failed to create tag' });
  }
});

// DELETE /api/tags/:id
tagsRouter.delete('/:id', async (req, res) => {
  try {
    await pool.query('DELETE FROM tags WHERE id = $1', [req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete tag' });
  }
});

// ─── Entity Tags ─────────────────────────────────────────────────────────────

// GET /api/entity-tags?entity_type=X&entity_id=Y
entityTagsRouter.get('/', async (req, res) => {
  const { entity_type, entity_id } = req.query;
  if (!entity_type || !entity_id) return res.status(400).json({ error: 'entity_type and entity_id required' });
  try {
    const { rows } = await pool.query(
      `SELECT t.id, t.name, t.color FROM entity_tags et
       JOIN tags t ON t.id = et.tag_id
       WHERE et.entity_type = $1 AND et.entity_id = $2`,
      [entity_type, entity_id]
    );
    res.json(rows.map(r => ({ id: r.id, name: r.name, color: r.color })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch entity tags' });
  }
});

// POST /api/entity-tags
entityTagsRouter.post('/', async (req, res) => {
  const { entity_type, entity_id, tag_id } = req.body;
  if (!entity_type || !entity_id || !tag_id) return res.status(400).json({ error: 'entity_type, entity_id, tag_id required' });
  try {
    await pool.query(
      `INSERT INTO entity_tags (entity_type, entity_id, tag_id) VALUES ($1, $2, $3) ON CONFLICT DO NOTHING`,
      [entity_type, entity_id, tag_id]
    );
    res.status(201).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to assign tag' });
  }
});

// POST /api/entity-tags/remove
entityTagsRouter.post('/remove', async (req, res) => {
  const { entity_type, entity_id, tag_id } = req.body;
  if (!entity_type || !entity_id || !tag_id) return res.status(400).json({ error: 'entity_type, entity_id, tag_id required' });
  try {
    await pool.query(
      `DELETE FROM entity_tags WHERE entity_type = $1 AND entity_id = $2 AND tag_id = $3`,
      [entity_type, entity_id, tag_id]
    );
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to remove tag' });
  }
});

module.exports = { tagsRouter, entityTagsRouter };
