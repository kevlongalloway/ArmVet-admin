import { Hono } from 'hono';
import type { Env, Variables, DealRow } from '../types';
import { requireAuth } from '../auth';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
app.use('*', requireAuth);

function fmtDeal(r: DealRow) {
  return {
    id: r.id,
    title: r.title,
    contactId: r.contact_id,
    contactName: r.contact_name || null,
    contactEmail: r.contact_email || null,
    bookingId: r.booking_id,
    bookingName: r.booking_name || null,
    stageId: r.stage_id,
    value: typeof r.value === 'number' ? r.value : parseFloat(String(r.value)) || 0,
    probability: r.probability,
    closeDate: r.close_date || null,
    status: r.status,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
  };
}

// GET /api/deals
app.get('/', async (c) => {
  const { results } = await c.env.DB
    .prepare(
      `SELECT d.*,
         c.name  AS contact_name,  c.email AS contact_email,
         b.name  AS booking_name
       FROM deals d
       LEFT JOIN contacts c ON c.id = d.contact_id
       LEFT JOIN bookings b ON b.id = d.booking_id
       ORDER BY d.created_at DESC`,
    )
    .all<DealRow>();
  return c.json(results.map(fmtDeal));
});

// POST /api/deals
app.post('/', async (c) => {
  const body = await c.req.json<{
    title: string;
    contact_id?: number | null;
    booking_id?: number | null;
    stage_id?: string;
    value?: number;
    probability?: number;
    close_date?: string | null;
  }>();
  const { title, contact_id, booking_id, stage_id = 'new', value = 0, probability = 0, close_date } = body;
  if (!title) return c.json({ error: 'title is required' }, 400);

  const result = await c.env.DB
    .prepare(
      `INSERT INTO deals (title, contact_id, booking_id, stage_id, value, probability, close_date)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(title, contact_id || null, booking_id || null, stage_id, value, probability, close_date || null)
    .run();

  const row = await c.env.DB
    .prepare('SELECT * FROM deals WHERE id = ?')
    .bind(result.meta.last_row_id)
    .first<DealRow>();

  return c.json(fmtDeal(row!), 201);
});

// PUT /api/deals/:id
app.put('/:id', async (c) => {
  const id = c.req.param('id');
  const body = await c.req.json<Record<string, unknown>>();
  const allowed = ['title', 'contact_id', 'booking_id', 'stage_id', 'value', 'probability', 'close_date', 'status'];

  const setParts: string[] = [];
  const values: unknown[] = [];

  for (const field of allowed) {
    if (field in body) {
      setParts.push(`${field} = ?`);
      values.push(body[field] === '' ? null : body[field]);
    }
  }

  if (setParts.length === 0) return c.json({ error: 'No fields to update' }, 400);

  setParts.push(`updated_at = datetime('now')`);
  values.push(id);

  const result = await c.env.DB
    .prepare(`UPDATE deals SET ${setParts.join(', ')} WHERE id = ?`)
    .bind(...values)
    .run();

  if (result.meta.changes === 0) return c.json({ error: 'Deal not found' }, 404);

  const row = await c.env.DB
    .prepare('SELECT * FROM deals WHERE id = ?')
    .bind(id)
    .first<DealRow>();

  return c.json(fmtDeal(row!));
});

// DELETE /api/deals/:id
app.delete('/:id', async (c) => {
  await c.env.DB.prepare('DELETE FROM deals WHERE id = ?').bind(c.req.param('id')).run();
  return c.json({ ok: true });
});

export default app;
