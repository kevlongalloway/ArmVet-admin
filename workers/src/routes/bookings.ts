import { Hono } from 'hono';
import type { Env, Variables, BookingRow } from '../types';
import { requireAuth } from '../auth';

const VALID_STATUSES = ['pending', 'approved', 'declined', 'on-calendar', 'archived'];

function fmtBooking(r: BookingRow) {
  return {
    id: r.id,
    name: r.name,
    email: r.email,
    phone: r.phone,
    org: r.org,
    service: r.service,
    category: r.category,
    date: r.date || null,
    time: r.time,
    status: r.status,
    message: r.message,
    score: r.score,
    submittedAt: r.submitted_at ? r.submitted_at.split('T')[0] : null,
  };
}

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
app.use('*', requireAuth);

// GET /api/bookings
app.get('/', async (c) => {
  const { results } = await c.env.DB
    .prepare('SELECT * FROM bookings ORDER BY submitted_at DESC')
    .all<BookingRow>();
  return c.json(results.map(fmtBooking));
});

// POST /api/bookings
app.post('/', async (c) => {
  const body = await c.req.json<Partial<BookingRow> & { status?: string }>();
  const { name, email, phone, org, service, category, date, time, status = 'pending', message } = body;
  if (!name) return c.json({ error: 'name is required' }, 400);

  const result = await c.env.DB
    .prepare(
      `INSERT INTO bookings (name, email, phone, org, service, category, date, time, status, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      name, email || null, phone || null, org || null, service || null,
      category || null, date || null, time || null, status, message || null,
    )
    .run();

  const row = await c.env.DB
    .prepare('SELECT * FROM bookings WHERE id = ?')
    .bind(result.meta.last_row_id)
    .first<BookingRow>();

  return c.json(fmtBooking(row!), 201);
});

// PUT /api/bookings/:id/status
app.put('/:id/status', async (c) => {
  const id = c.req.param('id');
  const { status } = await c.req.json<{ status: string }>();

  if (!VALID_STATUSES.includes(status)) {
    return c.json({ error: 'Invalid status' }, 400);
  }

  const result = await c.env.DB
    .prepare('UPDATE bookings SET status = ? WHERE id = ?')
    .bind(status, id)
    .run();

  if (result.meta.changes === 0) return c.json({ error: 'Not found' }, 404);
  return c.json({ id: Number(id), status });
});

// DELETE /api/bookings/:id
app.delete('/:id', async (c) => {
  const id = c.req.param('id');
  const result = await c.env.DB
    .prepare('DELETE FROM bookings WHERE id = ?')
    .bind(id)
    .run();
  if (result.meta.changes === 0) return c.json({ error: 'Not found' }, 404);
  return c.json({ success: true });
});

export default app;
