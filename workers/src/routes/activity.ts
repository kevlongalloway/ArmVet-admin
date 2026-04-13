import { Hono } from 'hono';
import type { Env, Variables, ActivityRow } from '../types';
import { requireAuth } from '../auth';

const VALID_TYPES = ['note', 'call', 'email', 'meeting', 'status_change'];

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
app.use('*', requireAuth);

function fmtActivity(r: ActivityRow) {
  return {
    id: r.id,
    entityType: r.entity_type,
    entityId: r.entity_id,
    type: r.type,
    content: r.content,
    createdAt: r.created_at,
  };
}

// GET /api/activity?entity_type=X&entity_id=Y
app.get('/', async (c) => {
  const entity_type = c.req.query('entity_type');
  const entity_id = c.req.query('entity_id');
  if (!entity_type || !entity_id) {
    return c.json({ error: 'entity_type and entity_id required' }, 400);
  }

  const { results } = await c.env.DB
    .prepare(
      `SELECT * FROM activity_log
       WHERE entity_type = ? AND entity_id = ?
       ORDER BY created_at DESC`,
    )
    .bind(entity_type, entity_id)
    .all<ActivityRow>();

  return c.json(results.map(fmtActivity));
});

// POST /api/activity
app.post('/', async (c) => {
  const body = await c.req.json<{
    entity_type: string;
    entity_id: number;
    type?: string;
    content: string;
  }>();
  const { entity_type, entity_id, type = 'note', content } = body;

  if (!entity_type || !entity_id || !content) {
    return c.json({ error: 'entity_type, entity_id, content required' }, 400);
  }
  if (!VALID_TYPES.includes(type)) {
    return c.json({ error: 'Invalid type' }, 400);
  }

  const result = await c.env.DB
    .prepare(
      `INSERT INTO activity_log (entity_type, entity_id, type, content)
       VALUES (?, ?, ?, ?)`,
    )
    .bind(entity_type, entity_id, type, content)
    .run();

  const row = await c.env.DB
    .prepare('SELECT * FROM activity_log WHERE id = ?')
    .bind(result.meta.last_row_id)
    .first<ActivityRow>();

  return c.json(fmtActivity(row!), 201);
});

// DELETE /api/activity/:id
app.delete('/:id', async (c) => {
  await c.env.DB
    .prepare('DELETE FROM activity_log WHERE id = ?')
    .bind(c.req.param('id'))
    .run();
  return c.json({ ok: true });
});

export default app;
