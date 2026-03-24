const express = require('express');
const { getConfig, setConfig, deleteConfig, getAllConfig } = require('../db');
const { requireAuth } = require('../middleware/auth');
const router = express.Router();

// GET /api/admin/docs — generate API documentation (auth required)
router.get('/docs', requireAuth, async (req, res) => {
  try {
    const [servicesRaw, categoriesRaw, companyName] = await Promise.all([
      getConfig('services'),
      getConfig('categories'),
      getConfig('company_name'),
    ]);
    const services = JSON.parse(servicesRaw || '[]');
    const categories = JSON.parse(categoriesRaw || '[]');
    const company = companyName || 'Your Company';

    const serviceOptions = services.map(s => `<option value="${s}">${s}</option>`).join('\n          ');
    const categoryOptions = categories.map(c => `<option value="${c}">${c}</option>`).join('\n          ');

    const docs = {
      generatedAt: new Date().toISOString(),
      version: '1.0',
      company,
      baseUrl: '/api/public',
      authentication: {
        csrfFlow: 'GET /api/public/csrf-token → returns { token }. Include as X-CSRF-Token header on POST requests.',
        note: 'Public endpoints (bookings, contacts) require CSRF token. Admin endpoints require Bearer JWT.',
      },
      endpoints: [
        {
          method: 'GET',
          path: '/api/public/csrf-token',
          auth: 'none',
          description: 'Get a CSRF token required for form submissions',
          response: { token: 'string' },
        },
        {
          method: 'GET',
          path: '/api/public/config',
          auth: 'none',
          description: 'Get public company configuration for embedding in frontend forms',
          response: {
            company_name: 'string',
            company_tagline: 'string',
            company_logo: 'string (base64 data URI or empty)',
            services: 'string[]',
            categories: 'string[]',
          },
        },
        {
          method: 'GET',
          path: '/api/public/availability',
          auth: 'none',
          description: 'Get upcoming open booking slots',
          response: '[{ id, date (YYYY-MM-DD), startTime (HH:MM), durationMinutes, label }]',
        },
        {
          method: 'POST',
          path: '/api/public/bookings',
          auth: 'CSRF token required (X-CSRF-Token header)',
          description: 'Submit a booking request',
          request: {
            name: 'string (required)',
            email: 'string (required, must contain @)',
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
          method: 'POST',
          path: '/api/public/contacts',
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
      examples: {
        jsSnippet: `// 1. Fetch CSRF token, then 2. Submit contact form
async function submitContact(data) {
  const { token } = await fetch('/api/public/csrf-token').then(r => r.json());
  const res = await fetch('/api/public/contacts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': token },
    body: JSON.stringify(data),
  });
  return res.json();
}`,
        contactFormHTML: `<!DOCTYPE html>
<html>
<body>
  <form id="contact-form">
    <input name="name" placeholder="Your Name" required>
    <input name="email" type="email" placeholder="Email" required>
    <select name="category">
      <option value="">Select Category</option>
          ${categoryOptions}
    </select>
    <input name="subject" placeholder="Subject">
    <textarea name="message" placeholder="Message" required></textarea>
    <button type="submit">Send</button>
  </form>
  <script>
    document.getElementById('contact-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const { token } = await fetch('/api/public/csrf-token').then(r => r.json());
      await fetch('/api/public/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': token },
        body: JSON.stringify(Object.fromEntries(fd)),
      });
      alert('Message sent!');
    });
  </script>
</body>
</html>`,
        bookingFormHTML: `<!DOCTYPE html>
<html>
<body>
  <form id="booking-form">
    <input name="name" placeholder="Your Name" required>
    <input name="email" type="email" placeholder="Email" required>
    <select name="service">
      <option value="">Select Service</option>
          ${serviceOptions}
    </select>
    <select name="category">
      <option value="">Select Category</option>
          ${categoryOptions}
    </select>
    <input name="date" type="date">
    <input name="time" type="time">
    <textarea name="message" placeholder="Additional notes"></textarea>
    <button type="submit">Request Booking</button>
  </form>
  <script>
    document.getElementById('booking-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      const { token } = await fetch('/api/public/csrf-token').then(r => r.json());
      const res = await fetch('/api/public/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': token },
        body: JSON.stringify(Object.fromEntries(fd)),
      });
      const data = await res.json();
      alert(data.success ? 'Booking submitted!' : data.error);
    });
  </script>
</body>
</html>`,
      },
    };

    res.json(docs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate docs' });
  }
});

// GET /api/admin/config — full config (auth required)
router.get('/config', requireAuth, async (req, res) => {
  try {
    const all = await getAllConfig();
    res.json({
      setup_complete: all.setup_complete || null,
      company_name: all.company_name || 'Your Company',
      company_tagline: all.company_tagline || '',
      company_logo: all.company_logo || '',
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
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load config' });
  }
});

// PUT /api/admin/config — update one or more config keys (auth required)
router.put('/config', requireAuth, async (req, res) => {
  const allowed = [
    'setup_complete', 'company_name', 'company_tagline', 'company_logo',
    'support_email', 'company_website', 'company_phone',
    'services', 'categories', 'allowed_origins',
    'pipeline_stages', 'custom_fields_bookings', 'custom_fields_contacts',
    'lead_scoring_rules', 'email_notifications_config',
  ];
  try {
    for (const [key, value] of Object.entries(req.body)) {
      if (!allowed.includes(key)) continue;
      const stored = Array.isArray(value) || (value !== null && typeof value === 'object')
        ? JSON.stringify(value)
        : String(value ?? '');

      if (key === 'company_logo' && stored.length > 3 * 1024 * 1024) {
        return res.status(400).json({ error: 'Logo must be under 2MB' });
      }
      await setConfig(key, stored);
    }
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update config' });
  }
});

// DELETE /api/admin/config/setup_complete — reset setup wizard (auth required)
router.delete('/config/setup_complete', requireAuth, async (req, res) => {
  try {
    await deleteConfig('setup_complete');
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to reset setup' });
  }
});

module.exports = router;
