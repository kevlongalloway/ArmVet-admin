import { Hono } from 'hono';
import type { Env, Variables, TagRow } from '../types';
import { requireAuth } from '../auth';

// ─── Tags ─────────────────────────────────────────────────────────────────────

export const tagsApp = new Hono<{ Bindings: Env; Variables: Variables }>();
tagsApp.use('*', requireAuth);

// GET /api/tags
tagsApp.get('/', async (c) => {
  const { results } = await c.env.DB
    .prepare('SELECT * FROM tags ORDER BY name ASC')
    .all<TagRow>();
  return c.json(results.map((r) => ({ id: r.id, name: r.name, color: r.color })));
});

// POST /api/tags
tagsApp.post('/', async (c) => {
  const { name, color = '#6B7280' } = await c.req.json<{ name: string; color?: string }>();
  if (!name) return c.json({ error: 'name is required' }, 400);

  const result = await c.env.DB
    .prepare(
      `INSERT INTO tags (name, color) VALUES (?, ?)
       ON CONFLICT(name) DO UPDATE SET color = excluded.color`,
    )
    .bind(name.trim(), color)
    .run();

  const row = await c.env.DB
    .prepare('SELECT * FROM tags WHERE id = ?')
    .bind(result.meta.last_row_id)
    .first<TagRow>();

  return c.json({ id: row!.id, name: row!.name, color: row!.color }, 201);
});

// DELETE /api/tags/:id
tagsApp.delete('/:id', async (c) => {
  await c.env.DB.prepare('DELETE FROM tags WHERE id = ?').bind(c.req.param('id')).run();
  return c.json({ ok: true });
});

// ─── Entity Tags ──────────────────────────────────────────────────────────────

export const entityTagsApp = new Hono<{ Bindings: Env; Variables: Variables }>();
entityTagsApp.use('*', requireAuth);

// GET /api/entity-tags?entity_type=X&entity_id=Y
entityTagsApp.get('/', async (c) => {
  const entity_type = c.req.query('entity_type');
  const entity_id = c.req.query('entity_id');
  if (!entity_type || !entity_id) {
    return c.json({ error: 'entity_type and entity_id required' }, 400);
  }

  const { results } = await c.env.DB
    .prepare(
      `SELECT t.id, t.name, t.color FROM entity_tags et
       JOIN tags t ON t.id = et.tag_id
       WHERE et.entity_type = ? AND et.entity_id = ?`,
    )
    .bind(entity_type, entity_id)
    .all<TagRow>();

  return c.json(results.map((r) => ({ id: r.id, name: r.name, color: r.color })));
});

// POST /api/entity-tags
entityTagsApp.post('/', async (c) => {
  const { entity_type, entity_id, tag_id } = await c.req.json<{
    entity_type: string;
    entity_id: number;
    tag_id: number;
  }>();
  if (!entity_type || !entity_id || !tag_id) {
    return c.json({ error: 'entity_type, entity_id, tag_id required' }, 400);
  }

  await c.env.DB
    .prepare(
      `INSERT INTO entity_tags (entity_type, entity_id, tag_id)
       VALUES (?, ?, ?)
       ON CONFLICT DO NOTHING`,
    )
    .bind(entity_type, entity_id, tag_id)
    .run();

  return c.json({ ok: true }, 201);
});

// POST /api/entity-tags/remove
entityTagsApp.post('/remove', async (c) => {
  const { entity_type, entity_id, tag_id } = await c.req.json<{
    entity_type: string;
    entity_id: number;
    tag_id: number;
  }>();
  if (!entity_type || !entity_id || !tag_id) {
    return c.json({ error: 'entity_type, entity_id, tag_id required' }, 400);
  }

  await c.env.DB
    .prepare(
      'DELETE FROM entity_tags WHERE entity_type = ? AND entity_id = ? AND tag_id = ?',
    )
    .bind(entity_type, entity_id, tag_id)
    .run();

  return c.json({ ok: true });
});
