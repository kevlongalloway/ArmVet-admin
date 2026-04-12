import { Hono } from 'hono';
import type { Env, Variables, SlotRow } from '../types';
import { requireAuth } from '../auth';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
app.use('*', requireAuth);

// GET /api/availability  (admin view: all slots with booking info)
app.get('/', async (c) => {
  const { results } = await c.env.DB
    .prepare(
      `SELECT s.id, s.date, s.start_time, s.duration_minutes, s.label,
              s.is_booked, s.booking_id, s.created_at,
              b.name AS booked_by
       FROM availability_slots s
       LEFT JOIN bookings b ON b.id = s.booking_id
       ORDER BY s.date ASC, s.start_time ASC`,
    )
    .all<SlotRow & { booked_by?: string | null }>();

  return c.json(
    results.map((r) => ({
      id: r.id,
      date: r.date,
      startTime: r.start_time,
      durationMinutes: r.duration_minutes,
      label: r.label || '',
      isBooked: r.is_booked === 1,
      bookingId: r.booking_id,
      bookedBy: r.booked_by || null,
    })),
  );
});

// POST /api/availability/batch  (bulk create slots from time range)
app.post('/batch', async (c) => {
  const body = await c.req.json<{
    date: string;
    fromTime: string;
    toTime: string;
    durationMinutes?: number;
    label?: string;
  }>();
  const { date, fromTime, toTime, durationMinutes = 60, label = '' } = body;

  if (!date || !fromTime || !toTime) {
    return c.json({ error: 'date, fromTime, and toTime are required' }, 400);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return c.json({ error: 'date must be YYYY-MM-DD' }, 400);
  }
  if (!/^\d{2}:\d{2}$/.test(fromTime) || !/^\d{2}:\d{2}$/.test(toTime)) {
    return c.json({ error: 'fromTime and toTime must be HH:MM (24h)' }, 400);
  }
  if (![30, 60, 90].includes(Number(durationMinutes))) {
    return c.json({ error: 'durationMinutes must be 30, 60, or 90' }, 400);
  }

  const [fromH, fromM] = fromTime.split(':').map(Number);
  const [toH, toM] = toTime.split(':').map(Number);
  const fromMins = fromH * 60 + fromM;
  const toMins = toH * 60 + toM;

  if (toMins <= fromMins) {
    return c.json({ error: 'toTime must be after fromTime' }, 400);
  }

  const dur = Number(durationMinutes);
  const startTimes: string[] = [];
  for (let m = fromMins; m + dur <= toMins; m += dur) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    startTimes.push(`${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`);
  }

  if (startTimes.length === 0) {
    return c.json({ error: 'The time range is too short for even one session' }, 400);
  }

  let created = 0;
  for (const startTime of startTimes) {
    const result = await c.env.DB
      .prepare(
        `INSERT INTO availability_slots (date, start_time, duration_minutes, label)
         VALUES (?, ?, ?, ?)
         ON CONFLICT(date, start_time) DO NOTHING`,
      )
      .bind(date, startTime, dur, label.trim().slice(0, 100))
      .run();
    if (result.meta.changes > 0) created++;
  }

  return c.json({ success: true, count: created, total: startTimes.length }, 201);
});

// POST /api/availability  (create a single slot)
app.post('/', async (c) => {
  const body = await c.req.json<{
    date: string;
    startTime: string;
    durationMinutes?: number;
    label?: string;
  }>();
  const { date, startTime, durationMinutes = 60, label = '' } = body;

  if (!date || !startTime) {
    return c.json({ error: 'date and startTime are required' }, 400);
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return c.json({ error: 'date must be YYYY-MM-DD' }, 400);
  }
  if (!/^\d{2}:\d{2}$/.test(startTime)) {
    return c.json({ error: 'startTime must be HH:MM (24h)' }, 400);
  }
  if (![30, 60, 90].includes(Number(durationMinutes))) {
    return c.json({ error: 'durationMinutes must be 30, 60, or 90' }, 400);
  }

  const result = await c.env.DB
    .prepare(
      `INSERT INTO availability_slots (date, start_time, duration_minutes, label)
       VALUES (?, ?, ?, ?)
       ON CONFLICT(date, start_time) DO NOTHING`,
    )
    .bind(date, startTime, Number(durationMinutes), label.trim().slice(0, 100))
    .run();

  if (result.meta.changes === 0) {
    return c.json({ error: 'A slot already exists at that date and time' }, 409);
  }

  return c.json({ success: true, id: result.meta.last_row_id }, 201);
});

// DELETE /api/availability/:id  (delete an un-booked slot)
app.delete('/:id', async (c) => {
  const id = c.req.param('id');
  const slot = await c.env.DB
    .prepare('SELECT is_booked FROM availability_slots WHERE id = ?')
    .bind(id)
    .first<{ is_booked: number }>();

  if (!slot) return c.json({ error: 'Slot not found' }, 404);
  if (slot.is_booked === 1) return c.json({ error: 'Cannot delete a booked slot' }, 409);

  await c.env.DB.prepare('DELETE FROM availability_slots WHERE id = ?').bind(id).run();
  return c.json({ success: true });
});

export default app;
