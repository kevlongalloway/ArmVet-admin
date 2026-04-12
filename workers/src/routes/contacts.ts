import { Hono } from 'hono';
import type { Env, Variables, ContactRow } from '../types';
import { requireAuth } from '../auth';

const VALID_STATUSES = ['new', 'replied', 'archived'];

function fmtContact(r: ContactRow) {
  return {
    id: r.id,
    name: r.name,
    email: r.email,
    phone: r.phone,
    category: r.category,
    subject: r.subject,
    message: r.message,
    status: r.status,
    score: r.score,
    submittedAt: r.submitted_at ? r.submitted_at.split('T')[0] : null,
  };
}

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
app.use('*', requireAuth);

// GET /api/contacts
app.get('/', async (c) => {
  const { results } = await c.env.DB
    .prepare('SELECT * FROM contacts ORDER BY submitted_at DESC')
    .all<ContactRow>();
  return c.json(results.map(fmtContact));
});

// PUT /api/contacts/:id/status
app.put('/:id/status', async (c) => {
  const id = c.req.param('id');
  const { status } = await c.req.json<{ status: string }>();

  if (!VALID_STATUSES.includes(status)) {
    return c.json({ error: 'Invalid status' }, 400);
  }

  const result = await c.env.DB
    .prepare('UPDATE contacts SET status = ? WHERE id = ?')
    .bind(status, id)
    .run();

  if (result.meta.changes === 0) return c.json({ error: 'Not found' }, 404);
  return c.json({ id: Number(id), status });
});

// DELETE /api/contacts/:id
app.delete('/:id', async (c) => {
  const id = c.req.param('id');
  const result = await c.env.DB
    .prepare('DELETE FROM contacts WHERE id = ?')
    .bind(id)
    .run();
  if (result.meta.changes === 0) return c.json({ error: 'Not found' }, 404);
  return c.json({ success: true });
});

export default app;
