import { Hono } from 'hono';
import type { Env, Variables } from '../types';
import { requireAuth } from '../auth';
import { getConfig, setConfig, deleteConfig, getAllConfig } from '../db';

const ALLOWED_CONFIG_KEYS = [
  'setup_complete', 'company_name', 'company_tagline', 'company_logo',
  'support_email', 'company_website', 'company_phone',
  'services', 'categories', 'allowed_origins',
  'pipeline_stages', 'custom_fields_bookings', 'custom_fields_contacts',
  'lead_scoring_rules', 'email_notifications_config', 'contact_form_config', 'site_domain',
];

const LOGO_MAX_D1_BYTES = 900_000; // ~900KB base64; anything larger goes to R2

const app = new Hono<{ Bindings: Env; Variables: Variables }>();
app.use('*', requireAuth);

// ─── GET /api/admin/config ────────────────────────────────────────────────────
app.get('/config', async (c) => {
  const all = await getAllConfig(c.env.DB);

  let logo = all.company_logo || '';
  if (logo.startsWith('r2:')) logo = '/api/public/logo';

  return c.json({
    setup_complete: all.setup_complete || null,
    company_name: all.company_name || 'Your Company',
    company_tagline: all.company_tagline || '',
    company_logo: logo,
    support_email: all.support_email || '',
    company_website: all.company_website || '',
    company_phone: all.company_phone || '',
    services: JSON.parse(all.services || '[]'),
    categories: JSON.parse(all.categories || '[]'),
    allowed_origins: JSON.parse(all.allowed_origins || '[]'),
    pipeline_stages: JSON.parse(all.pipeline_stages || '[]'),
    custom_fields_bookings: JSON.parse(all.custom_fields_bookings || '[]'),
    custom_fields_contacts: JSON.parse(all.custom_fields_contacts || '[]'),
    lead_scoring_rules: JSON.parse(all.lead_scoring_rules || '{"rules":[],"thresholds":{"hot":70,"warm":40}}'),
    email_notifications_config: JSON.parse(all.email_notifications_config || '{}'),
    site_domain: all.site_domain || '',
    contact_form_config: JSON.parse(all.contact_form_config || '{}'),
  });
});

// ─── PUT /api/admin/config ────────────────────────────────────────────────────
app.put('/config', async (c) => {
  const body = await c.req.json<Record<string, unknown>>();

  for (const [key, value] of Object.entries(body)) {
    if (!ALLOWED_CONFIG_KEYS.includes(key)) continue;

    // ── Logo: optionally off-load to R2 ──────────────────────────────────────
    if (key === 'company_logo' && typeof value === 'string' && value.startsWith('data:')) {
      // Approximate byte size of the raw binary from base64
      const base64Part = value.split(',')[1] ?? '';
      const rawBytes = Math.ceil(base64Part.length * 3 / 4);

      if (rawBytes > LOGO_MAX_D1_BYTES) {
        // Store in R2 instead
        const mimeMatch = value.match(/^data:([^;]+);base64,/);
        const mimeType = mimeMatch ? mimeMatch[1] : 'image/png';
        const binary = Uint8Array.from(atob(base64Part), (ch) => ch.charCodeAt(0));
        await c.env.R2.put('logos/company-logo', binary, {
          httpMetadata: { contentType: mimeType },
        });
        await setConfig(c.env.DB, 'company_logo', 'r2:logos/company-logo');
        continue;
      }

      // Size is fine — store as-is in D1
      await setConfig(c.env.DB, 'company_logo', value as string);
      continue;
    }

    // Serialize arrays / objects; everything else is a string
    const stored =
      Array.isArray(value) || (value !== null && typeof value === 'object')
        ? JSON.stringify(value)
        : String(value ?? '');

    await setConfig(c.env.DB, key, stored);
  }

  return c.json({ success: true });
});

// ─── DELETE /api/admin/config/setup_complete ──────────────────────────────────
app.delete('/config/setup_complete', async (c) => {
  await deleteConfig(c.env.DB, 'setup_complete');
  return c.json({ success: true });
});

// ─── GET /api/admin/docs ──────────────────────────────────────────────────────
app.get('/docs', async (c) => {
  const [servicesRaw, categoriesRaw, companyName] = await Promise.all([
    getConfig(c.env.DB, 'services'),
    getConfig(c.env.DB, 'categories'),
    getConfig(c.env.DB, 'company_name'),
  ]);

  const services = JSON.parse(servicesRaw || '[]') as string[];
  const categories = JSON.parse(categoriesRaw || '[]') as string[];
  const company = companyName || 'Your Company';

  return c.json({
    generatedAt: new Date().toISOString(),
    version: '2.0',
    company,
    baseUrl: '/api',
    authentication: {
      csrfFlow:
        'GET /api/public/csrf-token → returns { token }. Include as X-CSRF-Token header on POST requests.',
      adminFlow:
        'POST /api/auth/login → returns { token }. Include as Authorization: Bearer {token} on all admin endpoints.',
    },
    endpoints: [
      {
        method: 'GET', path: '/api/public/csrf-token', auth: 'none',
        description: 'Get a CSRF token required for form submissions',
        response: { token: 'string' },
      },
      {
        method: 'GET', path: '/api/public/config', auth: 'none',
        description: 'Get public company config for embedding in frontend forms',
        response: {
          company_name: 'string', company_tagline: 'string', company_logo: 'string',
          services: 'string[]', categories: 'string[]',
        },
      },
      {
        method: 'GET', path: '/api/public/availability', auth: 'none',
        description: 'Get upcoming open booking slots',
        response: '[{ id, date (YYYY-MM-DD), startTime (HH:MM), durationMinutes, label }]',
      },
      {
        method: 'POST', path: '/api/public/bookings',
        auth: 'CSRF token required (X-CSRF-Token header)',
        description: 'Submit a booking request',
        request: {
          name: 'string (required)',
          email: 'string (required)',
          phone: 'string (optional)',
          org: 'string (optional)',
          service: `string (optional, one of: ${services.join(', ')})`,
          category: `string (optional, one of: ${categories.join(', ')})`,
          date: 'string (YYYY-MM-DD, optional if slotId provided)',
          time: 'string (HH:MM, optional if slotId provided)',
          slotId: 'number (optional, reserves a specific availability slot)',
          message: 'string (optional, max 5000 chars)',
        },
        response: { success: true, id: 'number' },
      },
      {
        method: 'POST', path: '/api/public/contacts',
        auth: 'CSRF token required (X-CSRF-Token header)',
        description: 'Submit a contact/inquiry form',
        request: {
          name: 'string (required)',
          email: 'string (required)',
          phone: 'string (optional)',
          category: `string (optional, one of: ${categories.join(', ')})`,
          subject: 'string (optional)',
          message: 'string (required)',
        },
        response: { success: true, id: 'number' },
      },
    ],
    serviceOptions: services,
    categoryOptions: categories,
    examples: {
      jsSnippet: `// 1. Fetch CSRF token, then 2. Submit contact form
async function submitContact(data) {
  const { token } = await fetch('/api/public/csrf-token').then(r => r.json());
  return fetch('/api/public/contacts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': token },
    body: JSON.stringify(data),
  }).then(r => r.json());
}`,
    },
  });
});

export default app;
