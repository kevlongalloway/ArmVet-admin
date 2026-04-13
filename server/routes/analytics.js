const express = require('express');
const router = express.Router();
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');

router.use(requireAuth);

// GET /api/analytics
router.get('/', async (req, res) => {
  try {
    const [
      statusRes, bookMonthRes, contactMonthRes, dealStageRes,
      revenueRes, servicesRes, catsRes, convRes, tasksRes,
    ] = await Promise.all([
      // Bookings by status
      pool.query(`SELECT status, COUNT(*)::int AS count FROM bookings GROUP BY status`),

      // Bookings per month — last 6 months
      pool.query(`
        SELECT TO_CHAR(DATE_TRUNC('month', submitted_at), 'YYYY-MM') AS month,
               COUNT(*)::int AS count
        FROM bookings
        WHERE submitted_at >= NOW() - INTERVAL '6 months'
        GROUP BY 1 ORDER BY 1
      `),

      // Contacts per month — last 6 months
      pool.query(`
        SELECT TO_CHAR(DATE_TRUNC('month', submitted_at), 'YYYY-MM') AS month,
               COUNT(*)::int AS count
        FROM contacts
        WHERE submitted_at >= NOW() - INTERVAL '6 months'
        GROUP BY 1 ORDER BY 1
      `),

      // Deals by stage
      pool.query(`
        SELECT stage_id, status, COUNT(*)::int AS count,
               COALESCE(SUM(value),0)::float AS total_value
        FROM deals GROUP BY stage_id, status
      `),

      // Revenue won by month — last 6 months
      pool.query(`
        SELECT TO_CHAR(DATE_TRUNC('month', updated_at), 'YYYY-MM') AS month,
               COALESCE(SUM(value),0)::float AS won_value
        FROM deals
        WHERE status = 'won' AND updated_at >= NOW() - INTERVAL '6 months'
        GROUP BY 1 ORDER BY 1
      `),

      // Top services
      pool.query(`
        SELECT service, COUNT(*)::int AS count
        FROM bookings WHERE service IS NOT NULL AND service <> ''
        GROUP BY service ORDER BY count DESC LIMIT 8
      `),

      // Top categories (bookings + contacts combined)
      pool.query(`
        SELECT category, COUNT(*)::int AS count
        FROM (
          SELECT category FROM bookings WHERE category IS NOT NULL AND category <> ''
          UNION ALL
          SELECT category FROM contacts WHERE category IS NOT NULL AND category <> ''
        ) t
        GROUP BY category ORDER BY count DESC LIMIT 8
      `),

      // Conversion rate (approved or on-calendar / total)
      pool.query(`
        SELECT
          COUNT(*)::float AS total,
          COUNT(*) FILTER (WHERE status IN ('approved','on-calendar','archived'))::float AS converted
        FROM bookings
      `),

      // Tasks summary
      pool.query(`
        SELECT
          COUNT(*) FILTER (WHERE NOT completed AND due_date < CURRENT_DATE)::int AS overdue,
          COUNT(*) FILTER (WHERE NOT completed AND due_date = CURRENT_DATE)::int AS due_today,
          COUNT(*) FILTER (WHERE NOT completed AND due_date > CURRENT_DATE)::int AS upcoming
        FROM tasks
      `),
    ]);

    // Build bookings_by_status map
    const bookings_by_status = {};
    for (const r of statusRes.rows) bookings_by_status[r.status] = r.count;

    const total = convRes.rows[0].total || 0;
    const converted = convRes.rows[0].converted || 0;
    const conversion_rate = total > 0 ? Math.round((converted / total) * 100) : 0;

    // Total open deals value
    const open_deals_value = dealStageRes.rows
      .filter(r => r.status === 'open')
      .reduce((s, r) => s + r.total_value, 0);

    const won_revenue = revenueRes.rows.reduce((s, r) => s + r.won_value, 0);

    res.json({
      bookings_by_status,
      bookings_by_month: bookMonthRes.rows,
      contacts_by_month: contactMonthRes.rows,
      deals_by_stage: dealStageRes.rows.map(r => ({
        stageId: r.stage_id, status: r.status, count: r.count, totalValue: r.total_value,
      })),
      revenue_by_month: revenueRes.rows,
      top_services: servicesRes.rows,
      top_categories: catsRes.rows,
      conversion_rate,
      open_deals_value,
      won_revenue,
      tasks_summary: tasksRes.rows[0] || { overdue: 0, due_today: 0, upcoming: 0 },
    });
  } catch (err) {
    console.error('GET /analytics', err);
    res.status(500).json({ error: 'Failed to load analytics' });
  }
});

module.exports = router;
