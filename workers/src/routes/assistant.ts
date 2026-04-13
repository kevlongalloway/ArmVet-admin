import { Hono } from 'hono';
import type { Env, Variables } from '../types';
import { requireAuth } from '../auth';
import { getConfig } from '../db';

const GROQ_MODEL = 'llama-3.3-70b-versatile';
const GROQ_API_BASE = 'https://api.groq.com/openai/v1';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
app.use('*', requireAuth);

// ─── Groq fetch helper ────────────────────────────────────────────────────────
async function groqChat(
  apiKey: string,
  messages: { role: string; content: string }[],
  maxTokens = 800,
): Promise<string> {
  const res = await fetch(`${GROQ_API_BASE}/chat/completions`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages,
      max_tokens: maxTokens,
      temperature: 0.5,
    }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`Groq API error ${res.status}: ${text}`);
  }

  const data = await res.json() as { choices: { message: { content: string } }[] };
  return data.choices?.[0]?.message?.content ?? 'No response from AI.';
}

// ─── Build CRM context from D1 ────────────────────────────────────────────────
async function buildCrmContext(db: D1Database) {
  const today = new Date().toISOString().split('T')[0];

  const [bookingsRes, contactsRes, tasksRes, dealsRes, configCompany, configStages] = await Promise.all([
    db.prepare(
      `SELECT id, name, org, service, category, date, status, score,
              strftime('%Y-%m-%d', submitted_at) AS submitted_at
       FROM bookings ORDER BY submitted_at DESC LIMIT 50`,
    ).all<{ id: number; name: string; org: string | null; service: string | null; category: string | null; date: string | null; status: string; score: number; submitted_at: string }>(),

    db.prepare(
      `SELECT id, name, category, subject, status, score,
              strftime('%Y-%m-%d', submitted_at) AS submitted_at
       FROM contacts ORDER BY submitted_at DESC LIMIT 50`,
    ).all<{ id: number; name: string; category: string | null; subject: string | null; status: string; score: number; submitted_at: string }>(),

    db.prepare(
      `SELECT id, title, entity_type, due_date, completed
       FROM tasks ORDER BY completed ASC, due_date ASC`,
    ).all<{ id: number; title: string; entity_type: string | null; due_date: string | null; completed: number }>(),

    db.prepare(
      `SELECT id, title, stage_id, value, probability, close_date
       FROM deals WHERE status = 'open' ORDER BY value DESC`,
    ).all<{ id: number; title: string; stage_id: string; value: number; probability: number; close_date: string | null }>(),

    getConfig(db, 'company_name'),
    getConfig(db, 'pipeline_stages'),
  ]);

  const companyName = configCompany ?? 'Your Company';
  const pipelineStages: { id: string; name: string }[] = configStages
    ? (JSON.parse(configStages) as { id: string; name: string }[])
    : [];

  // Bookings by status
  const bookingsByStatus: Record<string, number> = {};
  for (const b of bookingsRes.results) {
    bookingsByStatus[b.status] = (bookingsByStatus[b.status] ?? 0) + 1;
  }

  // Contacts by status
  const contactsByStatus: Record<string, number> = {};
  for (const c of contactsRes.results) {
    contactsByStatus[c.status] = (contactsByStatus[c.status] ?? 0) + 1;
  }

  // Tasks breakdown
  const overdueTasks = tasksRes.results.filter(
    (t) => !t.completed && t.due_date && t.due_date < today,
  );
  const dueTodayTasks = tasksRes.results.filter(
    (t) => !t.completed && t.due_date === today,
  );
  const upcomingTasks = tasksRes.results.filter(
    (t) => !t.completed && t.due_date && t.due_date > today,
  );
  const noDateTasks = tasksRes.results.filter((t) => !t.completed && !t.due_date);

  // Pipeline
  const dealsByStage: Record<string, { count: number; value: number }> = {};
  let totalPipelineValue = 0;
  for (const d of dealsRes.results) {
    const stageName = pipelineStages.find((s) => s.id === d.stage_id)?.name ?? d.stage_id;
    if (!dealsByStage[stageName]) dealsByStage[stageName] = { count: 0, value: 0 };
    dealsByStage[stageName].count++;
    dealsByStage[stageName].value += d.value ?? 0;
    totalPipelineValue += d.value ?? 0;
  }

  return {
    today,
    companyName,
    bookings: {
      total: bookingsRes.results.length,
      byStatus: bookingsByStatus,
      recent: bookingsRes.results.slice(0, 10).map((b) => ({
        id: b.id,
        name: b.name,
        org: b.org ?? 'N/A',
        service: b.service ?? 'N/A',
        category: b.category ?? 'N/A',
        date: b.date ?? 'N/A',
        status: b.status,
        score: b.score ?? 0,
        submittedAt: b.submitted_at,
      })),
    },
    contacts: {
      total: contactsRes.results.length,
      byStatus: contactsByStatus,
      recent: contactsRes.results.slice(0, 10).map((c) => ({
        id: c.id,
        name: c.name,
        category: c.category ?? 'N/A',
        subject: c.subject ?? 'N/A',
        status: c.status,
        score: c.score ?? 0,
        submittedAt: c.submitted_at,
      })),
    },
    tasks: {
      overdue: overdueTasks.map((t) => ({ id: t.id, title: t.title, dueDate: t.due_date })),
      dueToday: dueTodayTasks.map((t) => ({ id: t.id, title: t.title })),
      upcoming: upcomingTasks.slice(0, 10).map((t) => ({ id: t.id, title: t.title, dueDate: t.due_date })),
      noDate: noDateTasks.slice(0, 5).map((t) => ({ id: t.id, title: t.title })),
    },
    pipeline: {
      openDeals: dealsRes.results.length,
      totalValue: totalPipelineValue,
      byStage: dealsByStage,
      topDeals: dealsRes.results.slice(0, 5).map((d) => ({
        id: d.id,
        title: d.title,
        stage: pipelineStages.find((s) => s.id === d.stage_id)?.name ?? d.stage_id,
        value: d.value ?? 0,
        probability: d.probability,
        closeDate: d.close_date,
      })),
    },
  };
}

// ─── System prompt ────────────────────────────────────────────────────────────
function buildSystemPrompt(ctx: Awaited<ReturnType<typeof buildCrmContext>>): string {
  const taskAlerts: string[] = [];
  if (ctx.tasks.overdue.length > 0) {
    taskAlerts.push(
      `OVERDUE (${ctx.tasks.overdue.length}): ${ctx.tasks.overdue.map((t) => `"${t.title}" (was due ${t.dueDate})`).join(', ')}`,
    );
  }
  if (ctx.tasks.dueToday.length > 0) {
    taskAlerts.push(
      `DUE TODAY (${ctx.tasks.dueToday.length}): ${ctx.tasks.dueToday.map((t) => `"${t.title}"`).join(', ')}`,
    );
  }

  const pipelineSummary = Object.entries(ctx.pipeline.byStage)
    .map(([stage, data]) => `${stage}: ${data.count} deal(s) worth $${data.value.toLocaleString()}`)
    .join('; ');

  const bookingStatusSummary = Object.entries(ctx.bookings.byStatus)
    .map(([s, c]) => `${s}: ${c}`)
    .join(', ');

  const contactStatusSummary = Object.entries(ctx.contacts.byStatus)
    .map(([s, c]) => `${s}: ${c}`)
    .join(', ');

  return `You are an AI assistant for ${ctx.companyName}, a CRM admin dashboard. You help the admin understand their business, get reminders, and ask questions about their data.

Today's date: ${ctx.today}

=== CRM SNAPSHOT ===

BOOKINGS (last 50 loaded):
${bookingStatusSummary || 'None'}
Recent:
${ctx.bookings.recent.map((b) => `- [#${b.id}] ${b.name} (${b.org}) | Service: ${b.service} | Category: ${b.category} | Date: ${b.date} | Status: ${b.status} | Score: ${b.score} | Submitted: ${b.submittedAt}`).join('\n') || 'None'}

CONTACTS/INQUIRIES (last 50 loaded):
${contactStatusSummary || 'None'}
Recent:
${ctx.contacts.recent.map((c) => `- [#${c.id}] ${c.name} | Category: ${c.category} | Subject: ${c.subject} | Status: ${c.status} | Score: ${c.score} | Submitted: ${c.submittedAt}`).join('\n') || 'None'}

TASKS:
${taskAlerts.length > 0 ? taskAlerts.join('\n') : 'No overdue or due-today tasks'}
Upcoming: ${ctx.tasks.upcoming.length > 0 ? ctx.tasks.upcoming.map((t) => `"${t.title}" (due ${t.dueDate})`).join(', ') : 'None'}
No date: ${ctx.tasks.noDate.length > 0 ? ctx.tasks.noDate.map((t) => `"${t.title}"`).join(', ') : 'None'}

PIPELINE (open deals):
Total: ${ctx.pipeline.openDeals} deals · $${ctx.pipeline.totalValue.toLocaleString()}
By stage: ${pipelineSummary || 'No open deals'}
Top deals:
${ctx.pipeline.topDeals.map((d) => `- [#${d.id}] "${d.title}" | Stage: ${d.stage} | Value: $${d.value.toLocaleString()} | Probability: ${d.probability}% | Close: ${d.closeDate ?? 'not set'}`).join('\n') || 'None'}

=== INSTRUCTIONS ===
- Be concise but thorough. Use bullet points and structure when helpful.
- Proactively flag anything that needs attention (overdue tasks, pending bookings, stale deals).
- When asked for a summary/briefing, cover: pending bookings, new contacts, overdue tasks, pipeline highlights.
- Reference records by name and ID when relevant.
- Never invent data not present in the snapshot above.
- Professional, direct tone suited for an admin dashboard.`;
}

// ─── GET /api/assistant/debug ─────────────────────────────────────────────────
app.get('/debug', async (c) => {
  const apiKey = c.env.GROQ_API_KEY;
  const keyConfigured = !!(apiKey && apiKey.trim().length > 0);

  const result: {
    groqKeyConfigured: boolean;
    groqKeyPreview: string | null;
    model: string;
    groqReachable: boolean;
    groqError: string | null;
    checkedAt: string;
  } = {
    groqKeyConfigured: keyConfigured,
    groqKeyPreview: keyConfigured
      ? `${apiKey!.slice(0, 8)}${'*'.repeat(Math.max(0, apiKey!.length - 12))}${apiKey!.slice(-4)}`
      : null,
    model: GROQ_MODEL,
    groqReachable: false,
    groqError: null,
    checkedAt: new Date().toISOString(),
  };

  if (keyConfigured) {
    try {
      const res = await fetch(`${GROQ_API_BASE}/models`, {
        headers: { 'Authorization': `Bearer ${apiKey}` },
      });
      if (res.ok) {
        result.groqReachable = true;
      } else {
        const text = await res.text().catch(() => '');
        result.groqError = `HTTP ${res.status}: ${text.slice(0, 200)}`;
      }
    } catch (err) {
      result.groqError = err instanceof Error ? err.message : String(err);
    }
  }

  return c.json(result);
});

// ─── GET /api/assistant/summary ───────────────────────────────────────────────
app.get('/summary', async (c) => {
  const apiKey = c.env.GROQ_API_KEY;
  if (!apiKey) {
    return c.json({ error: 'AI assistant is not configured. Set the GROQ_API_KEY secret in the Cloudflare dashboard.' }, 503);
  }

  try {
    const ctx = await buildCrmContext(c.env.DB);
    const systemPrompt = buildSystemPrompt(ctx);

    const reply = await groqChat(
      apiKey,
      [
        { role: 'system', content: systemPrompt },
        {
          role: 'user',
          content:
            'Give me a concise daily briefing for today. Cover: pending/new bookings that need attention, unread or new contact inquiries, any overdue or due-today tasks, and top pipeline highlights. Use bullet points with short headers. Keep it scannable.',
        },
      ],
      600,
    );

    return c.json({ summary: reply, context: { today: ctx.today, companyName: ctx.companyName } });
  } catch (err) {
    console.error('[assistant/summary]', err);
    return c.json({ error: 'Failed to generate summary' }, 500);
  }
});

// ─── POST /api/assistant/chat ─────────────────────────────────────────────────
app.post('/chat', async (c) => {
  const apiKey = c.env.GROQ_API_KEY;
  if (!apiKey) {
    return c.json({ error: 'AI assistant is not configured. Set the GROQ_API_KEY secret in the Cloudflare dashboard.' }, 503);
  }

  let body: { messages?: { role: string; content: string }[] };
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: 'Invalid JSON body' }, 400);
  }

  const { messages } = body;
  if (!Array.isArray(messages) || messages.length === 0) {
    return c.json({ error: 'messages array is required' }, 400);
  }

  for (const m of messages) {
    if (!m.role || !m.content || !['user', 'assistant'].includes(m.role)) {
      return c.json({ error: 'Each message must have role (user|assistant) and content' }, 400);
    }
  }

  // Cap history to last 20 messages
  const recentMessages = messages.slice(-20);

  try {
    const ctx = await buildCrmContext(c.env.DB);
    const systemPrompt = buildSystemPrompt(ctx);

    const reply = await groqChat(
      apiKey,
      [{ role: 'system', content: systemPrompt }, ...recentMessages],
      800,
    );

    return c.json({ reply });
  } catch (err) {
    console.error('[assistant/chat]', err);
    return c.json({ error: 'Failed to get response from AI' }, 500);
  }
});

export default app;
