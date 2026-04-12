import { Hono } from 'hono';
import type { Env, Variables } from '../types';
import { requireAuth } from '../auth';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
app.use('*', requireAuth);

// GET /api/analytics
app.get('/', async (c) => {
  const db = c.env.DB;

  const [
    statusRes,
    bookMonthRes,
    contactMonthRes,
    dealStageRes,
    revenueRes,
    servicesRes,
    catsRes,
    convRes,
    tasksRes,
  ] = await Promise.all([
    // Bookings by status
    db.prepare('SELECT status, COUNT(*) AS count FROM bookings GROUP BY status')
      .all<{ status: string; count: number }>(),

    // Bookings per month — last 6 months
    db.prepare(
      `SELECT strftime('%Y-%m', submitted_at) AS month, COUNT(*) AS count
       FROM bookings
       WHERE submitted_at >= datetime('now', '-6 months')
       GROUP BY month ORDER BY month`,
    ).all<{ month: string; count: number }>(),

    // Contacts per month — last 6 months
    db.prepare(
      `SELECT strftime('%Y-%m', submitted_at) AS month, COUNT(*) AS count
       FROM contacts
       WHERE submitted_at >= datetime('now', '-6 months')
       GROUP BY month ORDER BY month`,
    ).all<{ month: string; count: number }>(),

    // Deals by stage
    db.prepare(
      `SELECT stage_id, status, COUNT(*) AS count,
              COALESCE(SUM(value), 0) AS total_value
       FROM deals GROUP BY stage_id, status`,
    ).all<{ stage_id: string; status: string; count: number; total_value: number }>(),

    // Revenue won by month — last 6 months
    db.prepare(
      `SELECT strftime('%Y-%m', updated_at) AS month,
              COALESCE(SUM(value), 0) AS won_value
       FROM deals
       WHERE status = 'won' AND updated_at >= datetime('now', '-6 months')
       GROUP BY month ORDER BY month`,
    ).all<{ month: string; won_value: number }>(),

    // Top services
    db.prepare(
      `SELECT service, COUNT(*) AS count
       FROM bookings WHERE service IS NOT NULL AND service != ''
       GROUP BY service ORDER BY count DESC LIMIT 8`,
    ).all<{ service: string; count: number }>(),

    // Top categories (bookings + contacts combined)
    db.prepare(
      `SELECT category, COUNT(*) AS count FROM (
         SELECT category FROM bookings WHERE category IS NOT NULL AND category != ''
         UNION ALL
         SELECT category FROM contacts WHERE category IS NOT NULL AND category != ''
       ) t
       GROUP BY category ORDER BY count DESC LIMIT 8`,
    ).all<{ category: string; count: number }>(),

    // Conversion rate
    db.prepare(
      `SELECT
         COUNT(*) AS total,
         SUM(CASE WHEN status IN ('approved','on-calendar','archived') THEN 1 ELSE 0 END) AS converted
       FROM bookings`,
    ).first<{ total: number; converted: number }>(),

    // Tasks summary
    db.prepare(
      `SELECT
         SUM(CASE WHEN completed = 0 AND due_date < date('now')    THEN 1 ELSE 0 END) AS overdue,
         SUM(CASE WHEN completed = 0 AND due_date = date('now')    THEN 1 ELSE 0 END) AS due_today,
         SUM(CASE WHEN completed = 0 AND due_date > date('now')    THEN 1 ELSE 0 END) AS upcoming
       FROM tasks`,
    ).first<{ overdue: number; due_today: number; upcoming: number }>(),
  ]);

  // Build status map
  const bookings_by_status: Record<string, number> = {};
  for (const r of statusRes.results) bookings_by_status[r.status] = r.count;

  const total = convRes?.total || 0;
  const converted = convRes?.converted || 0;
  const conversion_rate = total > 0 ? Math.round((converted / total) * 100) : 0;

  const open_deals_value = dealStageRes.results
    .filter((r) => r.status === 'open')
    .reduce((s, r) => s + (r.total_value || 0), 0);

  const won_revenue = revenueRes.results.reduce((s, r) => s + (r.won_value || 0), 0);

  return c.json({
    bookings_by_status,
    bookings_by_month: bookMonthRes.results,
    contacts_by_month: contactMonthRes.results,
    deals_by_stage: dealStageRes.results.map((r) => ({
      stageId: r.stage_id,
      status: r.status,
      count: r.count,
      totalValue: r.total_value || 0,
    })),
    revenue_by_month: revenueRes.results,
    top_services: servicesRes.results,
    top_categories: catsRes.results,
    conversion_rate,
    open_deals_value,
    won_revenue,
    tasks_summary: tasksRes || { overdue: 0, due_today: 0, upcoming: 0 },
  });
});

export default app;
