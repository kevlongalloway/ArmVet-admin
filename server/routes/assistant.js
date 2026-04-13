const express = require('express');
const router = express.Router();
const { pool } = require('../db');
const { requireAuth } = require('../middleware/auth');
const Groq = require('groq-sdk');

router.use(requireAuth);

function getGroqClient() {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error('GROQ_API_KEY is not configured');
  return new Groq({ apiKey });
}

// ─── Build CRM context snapshot ───────────────────────────────────────────────
async function buildCrmContext() {
  const [
    bookingsRes,
    contactsRes,
    tasksRes,
    dealsRes,
    companyRes,
  ] = await Promise.all([
    pool.query(`
      SELECT id, name, email, org, service, category, date, time, status, score, submitted_at
      FROM bookings
      ORDER BY submitted_at DESC
      LIMIT 50
    `),
    pool.query(`
      SELECT id, name, email, category, subject, status, score, submitted_at
      FROM contacts
      ORDER BY submitted_at DESC
      LIMIT 50
    `),
    pool.query(`
      SELECT id, title, entity_type, entity_id, due_date, completed, created_at
      FROM tasks
      ORDER BY completed ASC, due_date ASC NULLS LAST
    `),
    pool.query(`
      SELECT id, title, stage_id, value, probability, status, close_date, created_at
      FROM deals
      WHERE status = 'open'
      ORDER BY value DESC
    `),
    pool.query(`
      SELECT key, value FROM app_config
      WHERE key IN ('company_name', 'pipeline_stages', 'services', 'categories')
    `),
  ]);

  // Parse company config
  const config = {};
  for (const row of companyRes.rows) {
    try { config[row.key] = JSON.parse(row.value); }
    catch { config[row.key] = row.value; }
  }

  const today = new Date().toISOString().split('T')[0];

  // Summarise bookings by status
  const bookingsByStatus = {};
  for (const b of bookingsRes.rows) {
    bookingsByStatus[b.status] = (bookingsByStatus[b.status] || 0) + 1;
  }

  const recentBookings = bookingsRes.rows.slice(0, 10).map(b => ({
    id: b.id,
    name: b.name,
    org: b.org || 'N/A',
    service: b.service || 'N/A',
    category: b.category || 'N/A',
    date: b.date ? new Date(b.date).toISOString().split('T')[0] : 'N/A',
    status: b.status,
    score: b.score || 0,
    submittedAt: new Date(b.submitted_at).toISOString().split('T')[0],
  }));

  // Summarise contacts by status
  const contactsByStatus = {};
  for (const c of contactsRes.rows) {
    contactsByStatus[c.status] = (contactsByStatus[c.status] || 0) + 1;
  }

  const recentContacts = contactsRes.rows.slice(0, 10).map(c => ({
    id: c.id,
    name: c.name,
    category: c.category || 'N/A',
    subject: c.subject || 'N/A',
    status: c.status,
    score: c.score || 0,
    submittedAt: new Date(c.submitted_at).toISOString().split('T')[0],
  }));

  // Tasks breakdown
  const overdueTasks = tasksRes.rows.filter(t => !t.completed && t.due_date && new Date(t.due_date) < new Date(today));
  const dueTodayTasks = tasksRes.rows.filter(t => !t.completed && t.due_date && new Date(t.due_date).toISOString().split('T')[0] === today);
  const upcomingTasks = tasksRes.rows.filter(t => !t.completed && t.due_date && new Date(t.due_date) > new Date(today));
  const noDateTasks = tasksRes.rows.filter(t => !t.completed && !t.due_date);

  // Pipeline deals
  const pipelineStages = config.pipeline_stages || [];
  const dealsByStage = {};
  let totalPipelineValue = 0;
  for (const d of dealsRes.rows) {
    const stageName = pipelineStages.find(s => s.id === d.stage_id)?.name || d.stage_id;
    if (!dealsByStage[stageName]) dealsByStage[stageName] = { count: 0, value: 0 };
    dealsByStage[stageName].count++;
    dealsByStage[stageName].value += parseFloat(d.value) || 0;
    totalPipelineValue += parseFloat(d.value) || 0;
  }

  return {
    today,
    companyName: config.company_name || 'Your Company',
    bookings: {
      total: bookingsRes.rows.length,
      byStatus: bookingsByStatus,
      recent: recentBookings,
    },
    contacts: {
      total: contactsRes.rows.length,
      byStatus: contactsByStatus,
      recent: recentContacts,
    },
    tasks: {
      overdue: overdueTasks.map(t => ({ id: t.id, title: t.title, dueDate: new Date(t.due_date).toISOString().split('T')[0], entityType: t.entity_type })),
      dueToday: dueTodayTasks.map(t => ({ id: t.id, title: t.title, entityType: t.entity_type })),
      upcoming: upcomingTasks.slice(0, 10).map(t => ({ id: t.id, title: t.title, dueDate: new Date(t.due_date).toISOString().split('T')[0] })),
      noDate: noDateTasks.slice(0, 5).map(t => ({ id: t.id, title: t.title })),
    },
    pipeline: {
      openDeals: dealsRes.rows.length,
      totalValue: totalPipelineValue,
      byStage: dealsByStage,
      topDeals: dealsRes.rows.slice(0, 5).map(d => ({
        id: d.id,
        title: d.title,
        stage: pipelineStages.find(s => s.id === d.stage_id)?.name || d.stage_id,
        value: parseFloat(d.value) || 0,
        probability: d.probability,
        closeDate: d.close_date ? new Date(d.close_date).toISOString().split('T')[0] : null,
      })),
    },
  };
}

// ─── System prompt builder ─────────────────────────────────────────────────────
function buildSystemPrompt(ctx) {
  const taskAlerts = [];
  if (ctx.tasks.overdue.length > 0) {
    taskAlerts.push(`OVERDUE (${ctx.tasks.overdue.length}): ${ctx.tasks.overdue.map(t => `"${t.title}" (was due ${t.dueDate})`).join(', ')}`);
  }
  if (ctx.tasks.dueToday.length > 0) {
    taskAlerts.push(`DUE TODAY (${ctx.tasks.dueToday.length}): ${ctx.tasks.dueToday.map(t => `"${t.title}"`).join(', ')}`);
  }

  const pipelineSummary = Object.entries(ctx.pipeline.byStage)
    .map(([stage, data]) => `${stage}: ${data.count} deal(s) worth $${data.value.toLocaleString()}`)
    .join('; ');

  const bookingStatusSummary = Object.entries(ctx.bookings.byStatus)
    .map(([status, count]) => `${status}: ${count}`)
    .join(', ');

  const contactStatusSummary = Object.entries(ctx.contacts.byStatus)
    .map(([status, count]) => `${status}: ${count}`)
    .join(', ');

  return `You are an AI assistant for ${ctx.companyName}, a CRM admin dashboard. You help the admin understand their business at a glance, get reminders, and ask questions about their data.

Today's date: ${ctx.today}

=== CRM SNAPSHOT ===

BOOKINGS (last 50 loaded, shown by status):
${bookingStatusSummary || 'None'}
Recent bookings:
${ctx.bookings.recent.map(b => `- [#${b.id}] ${b.name} (${b.org}) | Service: ${b.service} | Category: ${b.category} | Date: ${b.date} | Status: ${b.status} | Score: ${b.score} | Submitted: ${b.submittedAt}`).join('\n') || 'None'}

CONTACTS/INQUIRIES (last 50 loaded, shown by status):
${contactStatusSummary || 'None'}
Recent contacts:
${ctx.contacts.recent.map(c => `- [#${c.id}] ${c.name} | Category: ${c.category} | Subject: ${c.subject} | Status: ${c.status} | Score: ${c.score} | Submitted: ${c.submittedAt}`).join('\n') || 'None'}

TASKS:
${taskAlerts.length > 0 ? taskAlerts.join('\n') : 'No overdue or due-today tasks'}
Upcoming tasks: ${ctx.tasks.upcoming.length > 0 ? ctx.tasks.upcoming.map(t => `"${t.title}" (due ${t.dueDate})`).join(', ') : 'None'}
Tasks without a date: ${ctx.tasks.noDate.length > 0 ? ctx.tasks.noDate.map(t => `"${t.title}"`).join(', ') : 'None'}

PIPELINE (open deals):
Total open deals: ${ctx.pipeline.openDeals}
Total pipeline value: $${ctx.pipeline.totalValue.toLocaleString()}
By stage: ${pipelineSummary || 'No open deals'}
Top deals:
${ctx.pipeline.topDeals.map(d => `- [#${d.id}] "${d.title}" | Stage: ${d.stage} | Value: $${d.value.toLocaleString()} | Probability: ${d.probability}% | Close: ${d.closeDate || 'not set'}`).join('\n') || 'None'}

=== INSTRUCTIONS ===
- Be concise but thorough. Use bullet points and structure when helpful.
- Proactively flag anything that needs attention (overdue tasks, pending bookings, stale deals).
- When asked for a summary or briefing, cover: pending bookings, unread contacts, overdue tasks, pipeline highlights.
- If asked about specific records, reference them by name and ID.
- Never make up data not in the snapshot above.
- Respond in a professional, direct tone suited for an admin dashboard.`;
}

// ─── GET /api/assistant/summary ───────────────────────────────────────────────
router.get('/summary', async (req, res) => {
  try {
    const groq = getGroqClient();
    const ctx = await buildCrmContext();
    const systemPrompt = buildSystemPrompt(ctx);

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content: 'Give me a concise daily briefing for today. Cover: pending/new bookings that need attention, unread or new contact inquiries, any overdue or due-today tasks, and the top pipeline highlights. Use bullet points with short headers. Keep it scannable.',
        },
      ],
      max_tokens: 600,
      temperature: 0.4,
    });

    const summary = completion.choices[0]?.message?.content || 'Unable to generate summary.';
    res.json({ summary, context: { today: ctx.today, companyName: ctx.companyName } });
  } catch (err) {
    console.error('GET /assistant/summary', err);
    if (err.message.includes('GROQ_API_KEY')) {
      return res.status(503).json({ error: 'AI assistant is not configured. Set the GROQ_API_KEY environment variable.' });
    }
    res.status(500).json({ error: 'Failed to generate summary' });
  }
});

// ─── GET /api/assistant/debug ─────────────────────────────────────────────────
router.get('/debug', async (req, res) => {
  const apiKey = process.env.GROQ_API_KEY;
  const keyConfigured = !!(apiKey && apiKey.trim().length > 0);

  const result = {
    groqKeyConfigured: keyConfigured,
    groqKeyPreview: keyConfigured
      ? `${apiKey.slice(0, 8)}${'*'.repeat(Math.max(0, apiKey.length - 12))}${apiKey.slice(-4)}`
      : null,
    model: 'llama-3.3-70b-versatile',
    groqReachable: false,
    groqError: null,
    nodeEnv: process.env.NODE_ENV || 'development',
    checkedAt: new Date().toISOString(),
  };

  if (keyConfigured) {
    try {
      const groq = getGroqClient();
      // Minimal call to verify the key is accepted
      await groq.models.list();
      result.groqReachable = true;
    } catch (err) {
      result.groqError = err.message || 'Unknown error';
    }
  }

  res.json(result);
});

// ─── POST /api/assistant/chat ──────────────────────────────────────────────────
// Body: { messages: [{ role: 'user'|'assistant', content: string }] }
router.post('/chat', async (req, res) => {
  const { messages } = req.body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  // Validate message structure
  for (const m of messages) {
    if (!m.role || !m.content || !['user', 'assistant'].includes(m.role)) {
      return res.status(400).json({ error: 'Each message must have role (user|assistant) and content' });
    }
  }

  // Cap conversation history to last 20 messages to control token usage
  const recentMessages = messages.slice(-20);

  try {
    const groq = getGroqClient();
    const ctx = await buildCrmContext();
    const systemPrompt = buildSystemPrompt(ctx);

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        ...recentMessages,
      ],
      max_tokens: 800,
      temperature: 0.5,
    });

    const reply = completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
    res.json({ reply });
  } catch (err) {
    console.error('POST /assistant/chat', err);
    if (err.message.includes('GROQ_API_KEY')) {
      return res.status(503).json({ error: 'AI assistant is not configured. Set the GROQ_API_KEY environment variable.' });
    }
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
});

module.exports = router;
