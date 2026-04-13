# ArmVet Admin — API Reference

**Base URL (production):** `https://armvet-api.<your-account>.workers.dev`  
**Base URL (local dev):** `http://localhost:8787`  
**Version:** 2.0 (Cloudflare Workers / D1 / R2)

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Authentication](#authentication)
3. [CSRF Protection](#csrf-protection)
4. [Rate Limiting](#rate-limiting)
5. [Public Endpoints](#public-endpoints)
6. [Admin — Auth](#admin--auth)
7. [Admin — Bookings](#admin--bookings)
8. [Admin — Contacts](#admin--contacts)
9. [Admin — Availability](#admin--availability)
10. [Admin — Deals (CRM)](#admin--deals-crm)
11. [Admin — Activity Log (CRM)](#admin--activity-log-crm)
12. [Admin — Tasks (CRM)](#admin--tasks-crm)
13. [Admin — Tags (CRM)](#admin--tags-crm)
14. [Admin — Analytics](#admin--analytics)
15. [Admin — Configuration](#admin--configuration)
16. [Embeddable Widgets](#embeddable-widgets)
17. [Frontend Integration Guide](#frontend-integration-guide)
18. [Error Responses](#error-responses)

---

## Architecture Overview

```
┌─────────────────────────────────┐    ┌──────────────────────────────────────┐
│  React SPA (Render Static Site) │    │  Cloudflare Workers API              │
│  client/                        │───▶│  workers/src/index.ts                │
│  VITE_API_URL = Worker URL      │    │                                      │
└─────────────────────────────────┘    │  ┌───────────────────────────────┐   │
                                       │  │  Cloudflare D1 (SQLite)       │   │
┌─────────────────────────────────┐    │  │  Structured data: bookings,   │   │
│  External Website / Widget      │───▶│  │  contacts, deals, tasks, etc. │   │
│  <script src="…/booking-       │    │  └───────────────────────────────┘   │
│   widget.js" data-target="…">  │    │  ┌───────────────────────────────┐   │
└─────────────────────────────────┘    │  │  Cloudflare R2 (Object Store) │   │
                                       │  │  Large logo / media uploads   │   │
                                       │  └───────────────────────────────┘   │
                                       │  ┌───────────────────────────────┐   │
                                       │  │  Cloudflare KV                │   │
                                       │  │  JWT secret cache, rate-limit │   │
                                       │  └───────────────────────────────┘   │
                                       └──────────────────────────────────────┘
```

---

## Authentication

Admin endpoints require a **Bearer JWT** in the `Authorization` header.

### Flow

```
POST /api/auth/login
  → { token, tutorialComplete, setupComplete }

All protected requests:
  Authorization: Bearer <token>
```

Tokens expire after **12 hours**. On 401, the frontend should redirect to login.

---

## CSRF Protection

Public form-submission endpoints (`POST /api/public/bookings` and `POST /api/public/contacts`) require a CSRF token.

### Flow

```
1. GET  /api/public/csrf-token      → { token: "1234567890.abc123..." }
2. POST /api/public/bookings
   Headers:
     Content-Type: application/json
     X-CSRF-Token: <token from step 1>
```

Tokens are valid for **1 hour**. Fetch a fresh token before each form submission.

---

## Rate Limiting

| Scope | Limit | Window |
|-------|-------|--------|
| `/api/public/*` | 10 requests | 60 seconds / IP |
| `/api/auth/login` | 20 requests | 15 minutes / IP |

Exceeded limits return `429 Too Many Requests`.

---

## Public Endpoints

These endpoints require no authentication. They are intended for use in your public-facing website.

---

### `GET /api/public/csrf-token`

Returns a CSRF token for form submissions.

**Response `200`:**
```json
{ "token": "1714000000000.a1b2c3d4..." }
```

---

### `GET /api/public/config`

Returns public company information for embedding in frontend forms.

**Response `200`:**
```json
{
  "company_name": "ArmVet Consulting",
  "company_tagline": "Excellence Through Service",
  "company_logo": "data:image/png;base64,...",
  "services": ["Leadership Development", "Executive Coaching", "..."],
  "categories": ["Military", "Federal", "Corporate"]
}
```

> `company_logo` may be a base64 data URI or `/api/public/logo` (when stored in R2).

---

### `GET /api/public/logo`

Serves the company logo from R2 storage (only present when the logo exceeds ~900 KB).

**Response:** Binary image with appropriate `Content-Type`.

---

### `GET /api/public/availability`

Returns upcoming open time slots for the booking widget.

**Response `200`:**
```json
[
  {
    "id": 42,
    "date": "2026-04-20",
    "startTime": "09:00",
    "durationMinutes": 60,
    "label": "Morning slot"
  }
]
```

---

### `GET /api/public/widget-config`

Returns widget styling and field-visibility configuration.

**Response `200`:**
```json
{
  "accentColor": "#C8A84E",
  "fontFamily": "inherit",
  "contact": {
    "showPhone": true,
    "showSubject": true,
    "showCategory": false,
    "buttonText": "Send Message",
    "successMessage": "Thank you! We'll be in touch soon."
  },
  "booking": {
    "showPhone": true,
    "showService": true,
    "showCategory": true,
    "buttonText": "Request Consultation",
    "successMessage": "Your request has been submitted!"
  }
}
```

---

### `POST /api/public/bookings`

Submit a booking request. **Requires CSRF token.**

**Request body:**
```json
{
  "name":    "Jane Smith",           // required
  "email":   "jane@example.com",     // required (must contain @)
  "phone":   "+1 555-000-0000",      // optional
  "org":     "Example Corp",         // optional
  "service": "Executive Coaching",   // optional — must be a configured service
  "category":"Federal",              // optional — must be a configured category
  "slotId":  42,                     // optional — reserves an availability slot
  "date":    "2026-04-20",           // optional if slotId provided (YYYY-MM-DD)
  "time":    "09:00",                // optional if slotId provided (HH:MM)
  "message": "Looking forward to..." // optional, max 5000 chars
}
```

**Response `201`:**
```json
{ "success": true, "id": 123 }
```

**Errors:**
| Code | Reason |
|------|--------|
| `400` | Validation failure (name/email missing, invalid category/service) |
| `403` | Missing or invalid CSRF token |
| `404` | `slotId` not found |
| `409` | Slot already booked by another request |
| `429` | Rate limit exceeded |

---

### `POST /api/public/contacts`

Submit a contact/inquiry form. **Requires CSRF token.**

**Request body:**
```json
{
  "name":     "John Doe",           // required
  "email":    "john@example.com",   // required
  "phone":    "+1 555-111-2222",    // optional
  "category": "Military",           // optional
  "subject":  "Partnership inquiry",// optional
  "message":  "Hello, I would..."   // required, max 5000 chars
}
```

**Response `201`:**
```json
{ "success": true, "id": 456 }
```

---

## Admin — Auth

### `POST /api/auth/login`

**Request body:**
```json
{ "username": "admin", "password": "secret" }
```

**Response `200`:**
```json
{
  "token": "eyJ...",
  "tutorialComplete": true,
  "setupComplete": true
}
```

---

### `POST /api/auth/change-password`

**Auth required.**

**Request body:**
```json
{ "currentPassword": "old", "newPassword": "newpass123" }
```

**Response `200`:** `{ "success": true }`

---

### `PUT /api/auth/tutorial-complete`

**Auth required.** Marks the onboarding tutorial as completed.

**Response `200`:** `{ "success": true }`

---

### `DELETE /api/auth/tutorial-complete`

**Auth required.** Resets the tutorial flag (re-shows the tutorial on next login).

**Response `200`:** `{ "success": true }`

---

## Admin — Bookings

All endpoints require `Authorization: Bearer <token>`.

### `GET /api/bookings`

Returns all bookings, newest first.

**Response `200`:**
```json
[
  {
    "id": 1,
    "name": "Jane Smith",
    "email": "jane@example.com",
    "phone": "+1 555-000-0000",
    "org": "Example Corp",
    "service": "Executive Coaching",
    "category": "Federal",
    "date": "2026-04-20",
    "time": "09:00",
    "status": "pending",
    "message": "Looking forward...",
    "score": 0,
    "submittedAt": "2026-04-12"
  }
]
```

**Booking statuses:** `pending` | `approved` | `declined` | `on-calendar` | `archived`

---

### `POST /api/bookings`

Manually create a booking (admin only).

**Request body:** Same fields as public booking, plus optional `status`.

**Response `201`:** Full booking object (same shape as GET item).

---

### `PUT /api/bookings/:id/status`

Update booking status.

**Request body:**
```json
{ "status": "approved" }
```

**Response `200`:** `{ "id": 1, "status": "approved" }`

---

### `DELETE /api/bookings/:id`

Delete a booking.

**Response `200`:** `{ "success": true }`

---

## Admin — Contacts

### `GET /api/contacts`

Returns all contact submissions, newest first.

**Response `200`:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "phone": null,
    "category": "Military",
    "subject": "Question",
    "message": "Hello...",
    "status": "new",
    "score": 0,
    "submittedAt": "2026-04-12"
  }
]
```

**Contact statuses:** `new` | `replied` | `archived`

---

### `PUT /api/contacts/:id/status`

**Request body:** `{ "status": "replied" }`  
**Response `200`:** `{ "id": 1, "status": "replied" }`

---

### `DELETE /api/contacts/:id`

**Response `200`:** `{ "success": true }`

---

## Admin — Availability

### `GET /api/availability`

Returns all slots (admin view — includes booked slots).

**Response `200`:**
```json
[
  {
    "id": 1,
    "date": "2026-04-20",
    "startTime": "09:00",
    "durationMinutes": 60,
    "label": "Morning",
    "isBooked": false,
    "bookingId": null,
    "bookedBy": null
  }
]
```

---

### `POST /api/availability`

Create a single time slot.

**Request body:**
```json
{
  "date": "2026-04-20",       // YYYY-MM-DD (required)
  "startTime": "09:00",       // HH:MM 24h (required)
  "durationMinutes": 60,      // 30 | 60 | 90 (default 60)
  "label": "Morning slot"     // optional
}
```

**Response `201`:** `{ "success": true, "id": 1 }`

**Error `409`:** Slot already exists at that date/time.

---

### `POST /api/availability/batch`

Bulk-create slots from a time range.

**Request body:**
```json
{
  "date": "2026-04-20",
  "fromTime": "09:00",
  "toTime": "17:00",
  "durationMinutes": 60,
  "label": ""
}
```

**Response `201`:**
```json
{ "success": true, "count": 8, "total": 8 }
```

`count` = slots actually created (skips existing duplicates).

---

### `DELETE /api/availability/:id`

Delete an unbooked slot. Returns `409` if the slot is already booked.

**Response `200`:** `{ "success": true }`

---

## Admin — Deals (CRM)

### `GET /api/deals`

Returns all deals with linked contact and booking names.

**Response `200`:**
```json
[
  {
    "id": 1,
    "title": "Executive Coaching Package",
    "contactId": 5,
    "contactName": "John Doe",
    "contactEmail": "john@example.com",
    "bookingId": null,
    "bookingName": null,
    "stageId": "qualified",
    "value": 5000.00,
    "probability": 70,
    "closeDate": "2026-05-01",
    "status": "open",
    "createdAt": "2026-04-12T10:00:00Z",
    "updatedAt": "2026-04-12T10:00:00Z"
  }
]
```

**Deal statuses:** `open` | `won` | `lost`

---

### `POST /api/deals`

**Request body:**
```json
{
  "title": "New Deal",          // required
  "contact_id": 5,              // optional
  "booking_id": null,           // optional
  "stage_id": "new",            // default "new"
  "value": 5000,                // default 0
  "probability": 70,            // default 0 (0–100)
  "close_date": "2026-05-01"    // optional YYYY-MM-DD
}
```

**Response `201`:** Full deal object.

---

### `PUT /api/deals/:id`

Update any subset of deal fields. Accepted fields: `title`, `contact_id`, `booking_id`, `stage_id`, `value`, `probability`, `close_date`, `status`.

**Response `200`:** Updated deal object.

---

### `DELETE /api/deals/:id`

**Response `200`:** `{ "ok": true }`

---

## Admin — Activity Log (CRM)

### `GET /api/activity?entity_type=X&entity_id=Y`

Returns activity for a specific entity, newest first.

**Query params:** `entity_type` (`deal` | `contact` | `booking`), `entity_id` (number)

**Response `200`:**
```json
[
  {
    "id": 1,
    "entityType": "deal",
    "entityId": 1,
    "type": "note",
    "content": "Called client — very interested.",
    "createdAt": "2026-04-12T10:00:00Z"
  }
]
```

---

### `POST /api/activity`

**Request body:**
```json
{
  "entity_type": "deal",      // required: deal | contact | booking
  "entity_id": 1,             // required
  "type": "call",             // note | call | email | meeting | status_change
  "content": "..."            // required
}
```

**Response `201`:** Full activity object.

---

### `DELETE /api/activity/:id`

**Response `200`:** `{ "ok": true }`

---

## Admin — Tasks (CRM)

### `GET /api/tasks`

Returns all tasks sorted by: incomplete first, then by due date ascending.

**Response `200`:**
```json
[
  {
    "id": 1,
    "title": "Follow up with client",
    "entityType": "deal",
    "entityId": 1,
    "dueDate": "2026-04-15",
    "completed": false,
    "createdAt": "2026-04-12T10:00:00Z"
  }
]
```

---

### `POST /api/tasks`

**Request body:**
```json
{
  "title": "Follow up",      // required
  "entity_type": "deal",     // optional
  "entity_id": 1,            // optional
  "due_date": "2026-04-15"   // optional YYYY-MM-DD
}
```

**Response `201`:** Full task object.

---

### `PUT /api/tasks/:id`

Accepted fields: `title`, `entity_type`, `entity_id`, `due_date`, `completed` (boolean).

**Response `200`:** Updated task object.

---

### `DELETE /api/tasks/:id`

**Response `200`:** `{ "ok": true }`

---

## Admin — Tags (CRM)

### `GET /api/tags`

Returns all tags.

**Response `200`:**
```json
[{ "id": 1, "name": "Hot Lead", "color": "#EF4444" }]
```

---

### `POST /api/tags`

**Request body:**
```json
{ "name": "VIP", "color": "#F59E0B" }
```

**Response `201`:** `{ "id": 2, "name": "VIP", "color": "#F59E0B" }`

> If a tag with the same name exists, its colour is updated and the existing record is returned.

---

### `DELETE /api/tags/:id`

Deletes the tag and all entity associations.

**Response `200`:** `{ "ok": true }`

---

### `GET /api/entity-tags?entity_type=X&entity_id=Y`

Returns tags applied to an entity.

**Response `200`:**
```json
[{ "id": 1, "name": "Hot Lead", "color": "#EF4444" }]
```

---

### `POST /api/entity-tags`

Apply a tag to an entity (idempotent).

**Request body:**
```json
{ "entity_type": "deal", "entity_id": 1, "tag_id": 1 }
```

**Response `201`:** `{ "ok": true }`

---

### `POST /api/entity-tags/remove`

Remove a tag from an entity.

**Request body:**
```json
{ "entity_type": "deal", "entity_id": 1, "tag_id": 1 }
```

**Response `200`:** `{ "ok": true }`

---

## Admin — Analytics

### `GET /api/analytics`

Returns all KPI data for the dashboard.

**Response `200`:**
```json
{
  "bookings_by_status": {
    "pending": 12, "approved": 8, "declined": 2,
    "on-calendar": 5, "archived": 20
  },
  "bookings_by_month": [
    { "month": "2025-11", "count": 4 },
    { "month": "2025-12", "count": 7 }
  ],
  "contacts_by_month": [
    { "month": "2025-11", "count": 3 }
  ],
  "deals_by_stage": [
    { "stageId": "new", "status": "open", "count": 5, "totalValue": 25000 }
  ],
  "revenue_by_month": [
    { "month": "2025-12", "won_value": 12500 }
  ],
  "top_services": [
    { "service": "Executive Coaching", "count": 15 }
  ],
  "top_categories": [
    { "category": "Federal", "count": 22 }
  ],
  "conversion_rate": 61,
  "open_deals_value": 87500,
  "won_revenue": 42000,
  "tasks_summary": {
    "overdue": 2,
    "due_today": 1,
    "upcoming": 8
  }
}
```

---

## Admin — Configuration

### `GET /api/admin/config`

Returns the full admin configuration object.

**Response `200`:**
```json
{
  "setup_complete": "1",
  "company_name": "ArmVet Consulting",
  "company_tagline": "Excellence Through Service",
  "company_logo": "data:image/png;base64,...",
  "support_email": "support@armvet.com",
  "company_website": "https://armvet.com",
  "company_phone": "+1 800-000-0000",
  "services": ["Leadership Development", "..."],
  "categories": ["Military", "Federal", "Corporate"],
  "allowed_origins": ["https://armvet.com"],
  "pipeline_stages": [
    { "id": "new", "name": "New", "color": "#6B7280" }
  ],
  "custom_fields_bookings": [],
  "custom_fields_contacts": [],
  "lead_scoring_rules": {
    "rules": [],
    "thresholds": { "hot": 70, "warm": 40 }
  },
  "email_notifications_config": {
    "smtp_host": "", "smtp_port": 587,
    "smtp_user": "", "smtp_pass": "",
    "from_address": "",
    "notify_new_booking": false,
    "notify_new_contact": false,
    "notify_task_due": false
  },
  "site_domain": "https://armvet.com",
  "contact_form_config": { "accentColor": "#C8A84E", "..." }
}
```

---

### `PUT /api/admin/config`

Update one or more configuration keys. Send only the keys you want to change.

**Accepted keys:** `setup_complete`, `company_name`, `company_tagline`, `company_logo`, `support_email`, `company_website`, `company_phone`, `services`, `categories`, `allowed_origins`, `pipeline_stages`, `custom_fields_bookings`, `custom_fields_contacts`, `lead_scoring_rules`, `email_notifications_config`, `contact_form_config`, `site_domain`

**Request body (example — update branding):**
```json
{
  "company_name": "ArmVet Consulting LLC",
  "company_tagline": "Serving Those Who Served",
  "services": ["Leadership Development", "Executive Coaching"]
}
```

**Logo upload** — send `company_logo` as a base64 data URI:
```json
{ "company_logo": "data:image/png;base64,iVBORw0KGgo..." }
```
Logos > ~900 KB are automatically offloaded to R2; the response returns a URL instead of base64.

**Response `200`:** `{ "success": true }`

---

### `DELETE /api/admin/config/setup_complete`

Resets the setup wizard so it displays again on next login.

**Response `200`:** `{ "success": true }`

---

### `GET /api/admin/docs`

Returns live API documentation as JSON (populated with current services and categories).

---

## Embeddable Widgets

Both widgets are JavaScript files that can be included on any page. They fetch config dynamically and require no manual setup.

### Contact Form Widget

```html
<!-- Add a container element -->
<div id="armvet-contact"></div>

<!-- Load the widget (replace BASE_URL with your Worker URL) -->
<script src="https://BASE_URL/api/public/contact-widget.js"
        data-target="armvet-contact">
</script>
```

### Booking Form Widget

```html
<div id="armvet-booking"></div>

<script src="https://BASE_URL/api/public/booking-widget.js"
        data-target="armvet-booking">
</script>
```

**Both widgets:**
- Auto-fetch CSRF token, widget config, public config, and available slots
- Dynamically apply brand colours and field visibility from admin settings
- Show available time slots when they exist; fall back to date/time pickers

---

## Frontend Integration Guide

### Quick-start (React / Vite)

```bash
# 1. Set env var (in .env or Render dashboard)
VITE_API_URL=https://armvet-api.<account>.workers.dev

# 2. Use the pre-built api.js helper
import { api } from './api';

# 3. Login
const { token, setupComplete } = await api.login('admin', 'password');

# 4. Fetch data
const bookings = await api.getBookings();
const deals    = await api.getDeals();
const analytics= await api.getAnalytics();
```

### CSRF for custom public forms

```javascript
async function submitContactForm(formData) {
  // Step 1: Get fresh CSRF token
  const { token } = await fetch(
    `${WORKER_URL}/api/public/csrf-token`
  ).then(r => r.json());

  // Step 2: Submit form
  const res = await fetch(`${WORKER_URL}/api/public/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-Token': token,
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const { error } = await res.json();
    throw new Error(error);
  }
  return res.json(); // { success: true, id: 123 }
}
```

### CORS

The Worker allows:
- `http://localhost:3000`, `http://localhost:5173`, `http://localhost:8787` (dev)
- Origins listed in `allowed_origins` config (admin-configurable)

To allow your production frontend domain, add it in **Admin → Advanced → Allowed Origins**.

---

## Error Responses

All errors return JSON:

```json
{ "error": "Human-readable error message" }
```

| Status | Meaning |
|--------|---------|
| `400` | Bad request (missing/invalid input) |
| `401` | Unauthorized (missing/expired JWT) |
| `403` | Forbidden (invalid CSRF token) |
| `404` | Resource not found |
| `409` | Conflict (e.g., slot already booked, duplicate key) |
| `429` | Rate limit exceeded |
| `500` | Internal server error |

---

## Deployment Checklist

### Cloudflare Workers (API)

```bash
cd workers
npm install

# 1. Create D1 database
wrangler d1 create armvet-db
# → Copy the database_id into wrangler.toml

# 2. Create R2 bucket
wrangler r2 bucket create armvet-media

# 3. Create KV namespace
wrangler kv namespace create armvet-kv
# → Copy the id into wrangler.toml

# 4. Run migrations
npm run db:migrate
npm run db:seed

# 5. Set secrets
wrangler secret put ADMIN_USERNAME
wrangler secret put ADMIN_PASSWORD

# 6. Deploy
npm run deploy
```

### Render Static Site (Frontend)

1. Connect the `kevlongalloway/armvet-admin` repo to Render
2. Render detects `render.yaml` and creates the static service
3. In the Render dashboard, set the env var:
   ```
   VITE_API_URL = https://armvet-api.<account>.workers.dev
   ```
4. Trigger a deploy

### Local Development

```bash
# Terminal 1 — start the Worker locally
cd workers && npm install && npm run dev

# Terminal 2 — start the React dev server (proxies /api → localhost:8787)
cd client && npm install && npm run dev
```
