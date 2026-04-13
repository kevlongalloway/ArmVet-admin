import { Hono } from 'hono';
import type { Env, Variables, TaskRow } from '../types';
import { requireAuth } from '../auth';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
app.use('*', requireAuth);

function fmtTask(r: TaskRow) {
  return {
    id: r.id,
    title: r.title,
    entityType: r.entity_type,
    entityId: r.entity_id,
    dueDate: r.due_date || null,
    completed: r.completed === 1,
    createdAt: r.created_at,
  };
}

// GET /api/tasks
app.get('/', async (c) => {
  const { results } = await c.env.DB
    .prepare(
      `SELECT * FROM tasks
       ORDER BY completed ASC, due_date ASC NULLS LAST, created_at ASC`,
    )
    .all<TaskRow>();
  return c.json(results.map(fmtTask));
});

// POST /api/tasks
app.post('/', async (c) => {
  const body = await c.req.json<{
    title: string;
    entity_type?: string | null;
    entity_id?: number | null;
    due_date?: string | null;
  }>();
  const { title, entity_type, entity_id, due_date } = body;
  if (!title) return c.json({ error: 'title is required' }, 400);

  const result = await c.env.DB
    .prepare(
      `INSERT INTO tasks (title, entity_type, entity_id, due_date)
       VALUES (?, ?, ?, ?)`,
    )
    .bind(title, entity_type || null, entity_id || null, due_date || null)
    .run();

  const row = await c.env.DB
    .prepare('SELECT * FROM tasks WHERE id = ?')
    .bind(result.meta.last_row_id)
    .first<TaskRow>();

  return c.json(fmtTask(row!), 201);
});

// PUT /api/tasks/:id
app.put('/:id', async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json<Record<string, unknown>>();
  const allowed = ['title', 'entity_type', 'entity_id', 'due_date', 'completed'];

  const setParts: string[] = [];
  const values: unknown[] = [];

  for (const field of allowed) {
    if (field in body) {
      setParts.push(`${field} = ?`);
      values.push(body[field] === '' ? null : body[field]);
    }
  }

  if (setParts.length === 0) return c.json({ error: 'No fields to update' }, 400);
  values.push(id);

  const result = await c.env.DB
    .prepare(`UPDATE tasks SET ${setParts.join(', ')} WHERE id = ?`)
    .bind(...values)
    .run();

  if (result.meta.changes === 0) return c.json({ error: 'Task not found' }, 404);

  const row = await c.env.DB
    .prepare('SELECT * FROM tasks WHERE id = ?')
    .bind(id)
    .first<TaskRow>();

  return c.json(fmtTask(row!));
});

// DELETE /api/tasks/:id
app.delete('/:id', async (c) => {
  await c.env.DB.prepare('DELETE FROM tasks WHERE id = ?').bind(c.req.param('id')).run();
  return c.json({ ok: true });
});

export default app;
