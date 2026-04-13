-- ─────────────────────────────────────────────────────────────────────────────
-- ArmVet Admin – Default Configuration Seed
-- Apply with: wrangler d1 execute armvet-db --file=migrations/0002_seed.sql
-- Local:      wrangler d1 execute armvet-db --local --file=migrations/0002_seed.sql
-- ─────────────────────────────────────────────────────────────────────────────

INSERT OR IGNORE INTO app_config (key, value) VALUES
  ('company_name',     'Your Company'),
  ('company_tagline',  ''),
  ('company_logo',     ''),
  ('support_email',    'support@example.com'),
  ('company_website',  ''),
  ('company_phone',    ''),
  ('site_domain',      ''),
  ('services', '[
    "Leadership Development",
    "Executive Coaching",
    "Small Group Workshops",
    "Individual Development",
    "Organizational Culture Training",
    "Federal HR Consulting",
    "Workforce Planning",
    "HR Modernization",
    "Speaking Engagements"
  ]'),
  ('categories', '["Military","Federal","Corporate"]'),
  ('allowed_origins', '["http://localhost:3000","http://localhost:5173"]'),
  ('pipeline_stages', '[
    {"id":"new","name":"New","color":"#6B7280"},
    {"id":"qualified","name":"Qualified","color":"#3B82F6"},
    {"id":"proposal","name":"Proposal Sent","color":"#F59E0B"},
    {"id":"negotiation","name":"Negotiation","color":"#8B5CF6"},
    {"id":"won","name":"Won","color":"#10B981"},
    {"id":"lost","name":"Lost","color":"#EF4444"}
  ]'),
  ('custom_fields_bookings', '[]'),
  ('custom_fields_contacts', '[]'),
  ('lead_scoring_rules', '{"rules":[],"thresholds":{"hot":70,"warm":40}}'),
  ('email_notifications_config', '{"smtp_host":"","smtp_port":587,"smtp_user":"","smtp_pass":"","from_address":"","notify_new_booking":false,"notify_new_contact":false,"notify_task_due":false}'),
  ('contact_form_config', '{
    "accentColor":"#C8A84E",
    "fontFamily":"inherit",
    "contact":{
      "showPhone":true,"showSubject":true,"showCategory":false,
      "buttonText":"Send Message",
      "successMessage":"Thank you! We''ll be in touch soon."
    },
    "booking":{
      "showPhone":true,"showService":true,"showCategory":true,
      "buttonText":"Request Consultation",
      "successMessage":"Your request has been submitted! We''ll be in touch soon."
    }
  }');
