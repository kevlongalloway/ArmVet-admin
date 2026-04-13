import { Hono } from 'hono';
import type { Env, Variables, SlotRow } from '../types';
import { getOrCreateJwtSecret, getConfig } from '../db';
import { generateCsrfToken, requireCsrf } from '../csrf';

const app = new Hono<{ Bindings: Env; Variables: Variables }>();

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function validCategories(db: D1Database): Promise<string[]> {
  const v = await getConfig(db, 'categories');
  return v ? (JSON.parse(v) as string[]) : ['Military', 'Federal', 'Corporate'];
}

async function validServices(db: D1Database): Promise<string[]> {
  const v = await getConfig(db, 'services');
  return v ? (JSON.parse(v) as string[]) : [];
}

// ─── Routes ───────────────────────────────────────────────────────────────────

// GET /api/public/csrf-token
app.get('/csrf-token', async (c) => {
  const secret = await getOrCreateJwtSecret(c.env);
  const token = await generateCsrfToken(secret);
  return c.json({ token });
});

// GET /api/public/config
app.get('/config', async (c) => {
  const [name, tagline, logo, services, categories] = await Promise.all([
    getConfig(c.env.DB, 'company_name'),
    getConfig(c.env.DB, 'company_tagline'),
    getConfig(c.env.DB, 'company_logo'),
    getConfig(c.env.DB, 'services'),
    getConfig(c.env.DB, 'categories'),
  ]);

  // If logo is an R2 reference, return a serving URL
  let logoValue = logo || '';
  if (logoValue.startsWith('r2:')) {
    logoValue = '/api/public/logo';
  }

  return c.json({
    company_name: name || 'Your Company',
    company_tagline: tagline || '',
    company_logo: logoValue,
    services: JSON.parse(services || '[]') as string[],
    categories: JSON.parse(categories || '[]') as string[],
  });
});

// GET /api/public/logo  (serves logo from R2)
app.get('/logo', async (c) => {
  const obj = await c.env.R2.get('logos/company-logo');
  if (!obj) return c.notFound();
  const contentType = obj.httpMetadata?.contentType || 'image/png';
  return new Response(obj.body, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=3600',
    },
  });
});

// GET /api/public/availability
app.get('/availability', async (c) => {
  const today = new Date().toISOString().split('T')[0];
  const { results } = await c.env.DB
    .prepare(
      `SELECT id, date, start_time, duration_minutes, label
       FROM availability_slots
       WHERE is_booked = 0 AND date >= ?
       ORDER BY date ASC, start_time ASC`,
    )
    .bind(today)
    .all<Pick<SlotRow, 'id' | 'date' | 'start_time' | 'duration_minutes' | 'label'>>();

  return c.json(
    results.map((r) => ({
      id: r.id,
      date: r.date,
      startTime: r.start_time,
      durationMinutes: r.duration_minutes,
      label: r.label || '',
    })),
  );
});

// GET /api/public/widget-config
app.get('/widget-config', async (c) => {
  const raw = await getConfig(c.env.DB, 'contact_form_config');
  const cfg = raw ? (JSON.parse(raw) as Record<string, unknown>) : {};
  const contact = (cfg.contact as Record<string, unknown>) || {};
  const booking = (cfg.booking as Record<string, unknown>) || {};

  return c.json({
    accentColor: (cfg.accentColor as string) || '#C8A84E',
    fontFamily: (cfg.fontFamily as string) || 'inherit',
    contact: {
      showPhone: contact.showPhone !== false,
      showSubject: contact.showSubject !== false,
      showCategory: !!contact.showCategory,
      buttonText: (contact.buttonText as string) || 'Send Message',
      successMessage:
        (contact.successMessage as string) || "Thank you! We'll be in touch soon.",
    },
    booking: {
      showPhone: booking.showPhone !== false,
      showService: booking.showService !== false,
      showCategory: booking.showCategory !== false,
      buttonText: (booking.buttonText as string) || 'Request Consultation',
      successMessage:
        (booking.successMessage as string) || 'Your request has been submitted!',
    },
  });
});

// POST /api/public/bookings  (CSRF required)
app.post('/bookings', requireCsrf, async (c) => {
  const body = await c.req.json<{
    name?: string;
    email?: string;
    phone?: string;
    org?: string;
    service?: string;
    category?: string;
    date?: string;
    time?: string;
    message?: string;
    slotId?: number;
  }>();

  const { name, email, phone, org, service, category, date, time, message, slotId } = body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return c.json({ error: 'name is required' }, 400);
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return c.json({ error: 'A valid email is required' }, 400);
  }

  const [cats, svcs] = await Promise.all([
    validCategories(c.env.DB),
    validServices(c.env.DB),
  ]);
  if (category && cats.length && !cats.includes(category)) {
    return c.json({ error: 'Invalid category' }, 400);
  }
  if (service && svcs.length && !svcs.includes(service)) {
    return c.json({ error: 'Invalid service' }, 400);
  }

  let bookingDate = date || null;
  let bookingTime = (time || '').trim().slice(0, 50);

  // If a slot is referenced, verify it is still available
  if (slotId) {
    const slot = await c.env.DB
      .prepare('SELECT id, date, start_time, is_booked FROM availability_slots WHERE id = ?')
      .bind(slotId)
      .first<{ id: number; date: string; start_time: string; is_booked: number }>();

    if (!slot) return c.json({ error: 'Slot not found' }, 404);
    if (slot.is_booked) return c.json({ error: 'Slot already booked' }, 409);

    bookingDate = slot.date;
    bookingTime = slot.start_time;
  }

  // Insert booking
  const insertResult = await c.env.DB
    .prepare(
      `INSERT INTO bookings (name, email, phone, org, service, category, date, time, message)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      name.trim().slice(0, 255),
      email.trim().slice(0, 255),
      (phone || '').trim().slice(0, 50) || null,
      (org || '').trim().slice(0, 255) || null,
      (service || '').trim().slice(0, 255) || null,
      (category || '').trim().slice(0, 50) || null,
      bookingDate,
      bookingTime || null,
      (message || '').trim().slice(0, 5000) || null,
    )
    .run();

  const bookingId = insertResult.meta.last_row_id;

  // Mark slot as booked (D1 is single-writer, so this is safe)
  if (slotId) {
    const updated = await c.env.DB
      .prepare(
        'UPDATE availability_slots SET is_booked = 1, booking_id = ? WHERE id = ? AND is_booked = 0',
      )
      .bind(bookingId, slotId)
      .run();

    // If 0 rows changed, someone else booked it between our check and now
    if (updated.meta.changes === 0) {
      await c.env.DB.prepare('DELETE FROM bookings WHERE id = ?').bind(bookingId).run();
      return c.json({ error: 'Slot already booked' }, 409);
    }
  }

  return c.json({ success: true, id: bookingId }, 201);
});

// POST /api/public/contacts  (CSRF required)
app.post('/contacts', requireCsrf, async (c) => {
  const body = await c.req.json<{
    name?: string;
    email?: string;
    phone?: string;
    category?: string;
    subject?: string;
    message?: string;
  }>();

  const { name, email, phone, category, subject, message } = body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return c.json({ error: 'name is required' }, 400);
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return c.json({ error: 'A valid email is required' }, 400);
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return c.json({ error: 'message is required' }, 400);
  }

  const cats = await validCategories(c.env.DB);
  if (category && cats.length && !cats.includes(category)) {
    return c.json({ error: 'Invalid category' }, 400);
  }

  const result = await c.env.DB
    .prepare(
      `INSERT INTO contacts (name, email, phone, category, subject, message)
       VALUES (?, ?, ?, ?, ?, ?)`,
    )
    .bind(
      name.trim().slice(0, 255),
      email.trim().slice(0, 255),
      (phone || '').trim().slice(0, 50) || null,
      (category || '').trim().slice(0, 50) || null,
      (subject || '').trim().slice(0, 255) || null,
      message.trim().slice(0, 5000),
    )
    .run();

  return c.json({ success: true, id: result.meta.last_row_id }, 201);
});

// ─── Embeddable Widgets ───────────────────────────────────────────────────────

// GET /api/public/contact-widget.js
app.get('/contact-widget.js', async (c) => {
  const js = `(function () {
  var script = document.currentScript;
  var BASE = new URL(script.src).origin;
  var targetId = script.getAttribute('data-target') || 'armvet-contact';
  var el = document.getElementById(targetId);
  if (!el) { console.warn('[ArmVet] No element found with id="' + targetId + '"'); return; }

  Promise.all([
    fetch(BASE + '/api/public/widget-config').then(function(r){ return r.json(); }),
    fetch(BASE + '/api/public/config').then(function(r){ return r.json(); }),
    fetch(BASE + '/api/public/csrf-token').then(function(r){ return r.json(); }),
  ]).then(function(results) {
    render(el, results[0], results[1], results[2].token, BASE);
  }).catch(function(err) { console.error('[ArmVet]', err); });

  function render(el, wCfg, cfg, csrf, base) {
    var accent = wCfg.accentColor || '#C8A84E';
    var font   = wCfg.fontFamily  || 'inherit';
    var c      = wCfg.contact     || {};
    var btnText    = c.buttonText    || 'Send Message';
    var successMsg = c.successMessage || "Thank you! We'll be in touch soon.";
    var categories = cfg.categories  || [];
    var uid = 'avc' + Math.random().toString(36).slice(2, 8);
    var css = [
      '#'+uid+' *{box-sizing:border-box}',
      '#'+uid+'{font-family:'+font+'}',
      '#'+uid+' .ag{margin-bottom:14px}',
      '#'+uid+' .al{display:block;font-size:13px;font-weight:600;margin-bottom:5px}',
      '#'+uid+' .ai{width:100%;padding:10px 14px;border:1px solid #ccc;border-radius:8px;font-size:14px;font-family:inherit;outline:none;background:transparent;color:inherit;transition:border-color .2s,box-shadow .2s}',
      '#'+uid+' .ai:focus{border-color:'+accent+';box-shadow:0 0 0 3px '+accent+'33}',
      '#'+uid+' .ab{background:'+accent+';color:#fff;border:none;border-radius:8px;padding:12px 28px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;width:100%;margin-top:4px;transition:opacity .2s}',
      '#'+uid+' .ab:hover:not(:disabled){opacity:.88}',
      '#'+uid+' .ab:disabled{opacity:.5;cursor:not-allowed}',
      '#'+uid+' .ae{color:#e53e3e;font-size:13px;margin-top:10px}',
      '#'+uid+' .as{font-size:16px;font-weight:600;text-align:center;padding:28px 0;color:'+accent+'}',
    ].join('');
    var h = '<style>'+css+'</style><div id="'+uid+'">';
    h += '<div class="ag"><label class="al">Name *</label><input class="ai" data-f="name" placeholder="Your name"/></div>';
    h += '<div class="ag"><label class="al">Email *</label><input class="ai" data-f="email" type="email" placeholder="your@email.com"/></div>';
    if (c.showPhone !== false) h += '<div class="ag"><label class="al">Phone</label><input class="ai" data-f="phone" placeholder="+1 (555) 000-0000"/></div>';
    if (c.showSubject !== false) h += '<div class="ag"><label class="al">Subject</label><input class="ai" data-f="subject" placeholder="What\\'s this about?"/></div>';
    if (c.showCategory && categories.length) {
      h += '<div class="ag"><label class="al">Sector</label><select class="ai" data-f="category"><option value="">Select...</option>';
      categories.forEach(function(cat){ h += '<option value="'+cat+'">'+cat+'</option>'; });
      h += '</select></div>';
    }
    h += '<div class="ag"><label class="al">Message *</label><textarea class="ai" data-f="message" rows="4" placeholder="How can we help?" style="resize:vertical"></textarea></div>';
    h += '<button class="ab" id="'+uid+'-btn">'+btnText+'</button>';
    h += '<div class="ae" id="'+uid+'-err" style="display:none"></div>';
    h += '</div>';
    el.innerHTML = h;
    var wrap = document.getElementById(uid);
    var btn  = document.getElementById(uid+'-btn');
    var err  = document.getElementById(uid+'-err');
    var get  = function(f){ var i=wrap.querySelector('[data-f="'+f+'"]'); return i?i.value.trim():''; };
    btn.addEventListener('click', function() {
      var name=get('name'), email=get('email'), msg=get('message');
      if (!name||!email||!msg){ err.textContent='Please fill in Name, Email, and Message.'; err.style.display='block'; return; }
      err.style.display='none'; btn.disabled=true; btn.textContent='Sending\u2026';
      var payload={name:name,email:email,message:msg};
      if (c.showPhone!==false) payload.phone=get('phone');
      if (c.showSubject!==false) payload.subject=get('subject');
      if (c.showCategory) payload.category=get('category');
      fetch(base+'/api/public/contacts',{method:'POST',headers:{'Content-Type':'application/json','X-CSRF-Token':csrf},body:JSON.stringify(payload)})
        .then(function(r){ return r.json().then(function(d){ return {ok:r.ok,d:d}; }); })
        .then(function(res){
          if(res.ok){ wrap.innerHTML='<div class="as">'+successMsg+'</div>'; }
          else{ err.textContent=res.d.error||'Something went wrong.'; err.style.display='block'; btn.disabled=false; btn.textContent=btnText; }
        }).catch(function(){ err.textContent='Network error. Please try again.'; err.style.display='block'; btn.disabled=false; btn.textContent=btnText; });
    });
  }
})();`;
  return new Response(js, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=60',
    },
  });
});

// GET /api/public/booking-widget.js
app.get('/booking-widget.js', async (c) => {
  const js = `(function () {
  var script = document.currentScript;
  var BASE = new URL(script.src).origin;
  var targetId = script.getAttribute('data-target') || 'armvet-booking';
  var el = document.getElementById(targetId);
  if (!el) { console.warn('[ArmVet] No element found with id="' + targetId + '"'); return; }

  Promise.all([
    fetch(BASE + '/api/public/widget-config').then(function(r){ return r.json(); }),
    fetch(BASE + '/api/public/config').then(function(r){ return r.json(); }),
    fetch(BASE + '/api/public/availability').then(function(r){ return r.json(); }),
    fetch(BASE + '/api/public/csrf-token').then(function(r){ return r.json(); }),
  ]).then(function(results) {
    render(el, results[0], results[1], results[2], results[3].token, BASE);
  }).catch(function(err) { console.error('[ArmVet]', err); });

  function render(el, wCfg, cfg, slots, csrf, base) {
    var accent = wCfg.accentColor || '#C8A84E';
    var font   = wCfg.fontFamily  || 'inherit';
    var b      = wCfg.booking     || {};
    var btnText    = b.buttonText    || 'Request Consultation';
    var successMsg = b.successMessage || "Your request has been submitted!";
    var services   = cfg.services   || [];
    var categories = cfg.categories || [];
    var uid = 'avb' + Math.random().toString(36).slice(2, 8);
    var css = [
      '#'+uid+' *{box-sizing:border-box}',
      '#'+uid+'{font-family:'+font+'}',
      '#'+uid+' .ag{margin-bottom:14px}',
      '#'+uid+' .al{display:block;font-size:13px;font-weight:600;margin-bottom:5px}',
      '#'+uid+' .ai{width:100%;padding:10px 14px;border:1px solid #ccc;border-radius:8px;font-size:14px;font-family:inherit;outline:none;background:transparent;color:inherit;transition:border-color .2s,box-shadow .2s}',
      '#'+uid+' .ai:focus{border-color:'+accent+';box-shadow:0 0 0 3px '+accent+'33}',
      '#'+uid+' .ab{background:'+accent+';color:#fff;border:none;border-radius:8px;padding:12px 28px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit;width:100%;margin-top:4px;transition:opacity .2s}',
      '#'+uid+' .ab:hover:not(:disabled){opacity:.88}',
      '#'+uid+' .ab:disabled{opacity:.5;cursor:not-allowed}',
      '#'+uid+' .ae{color:#e53e3e;font-size:13px;margin-top:10px}',
      '#'+uid+' .as{font-size:16px;font-weight:600;text-align:center;padding:28px 0;color:'+accent+'}',
      '#'+uid+' .row2{display:grid;grid-template-columns:1fr 1fr;gap:12px}',
      '@media(max-width:480px){#'+uid+' .row2{grid-template-columns:1fr}}',
    ].join('');
    var h = '<style>'+css+'</style><div id="'+uid+'">';
    h += '<div class="row2">';
    h += '<div class="ag"><label class="al">Name *</label><input class="ai" data-f="name" placeholder="Your name"/></div>';
    h += '<div class="ag"><label class="al">Email *</label><input class="ai" data-f="email" type="email" placeholder="your@email.com"/></div>';
    h += '</div>';
    if (b.showPhone !== false) {
      h += '<div class="row2">';
      h += '<div class="ag"><label class="al">Phone</label><input class="ai" data-f="phone" placeholder="+1 (555) 000-0000"/></div>';
      h += '<div class="ag"><label class="al">Organization</label><input class="ai" data-f="org" placeholder="Company or agency"/></div>';
      h += '</div>';
    }
    if (b.showService !== false && services.length) {
      h += '<div class="ag"><label class="al">Service Requested</label><select class="ai" data-f="service"><option value="">Select a service...</option>';
      services.forEach(function(s){ h += '<option value="'+s+'">'+s+'</option>'; });
      h += '</select></div>';
    }
    if (b.showCategory !== false && categories.length) {
      h += '<div class="ag"><label class="al">Sector</label><select class="ai" data-f="category"><option value="">Select...</option>';
      categories.forEach(function(cat){ h += '<option value="'+cat+'">'+cat+'</option>'; });
      h += '</select></div>';
    }
    if (slots && slots.length) {
      h += '<div class="ag"><label class="al">Preferred Date & Time</label><select class="ai" data-f="slotId"><option value="">Select a time slot...</option>';
      var byDate = {};
      slots.forEach(function(s){
        if (!byDate[s.date]) byDate[s.date] = [];
        byDate[s.date].push(s);
      });
      Object.keys(byDate).sort().forEach(function(date){
        var label = new Date(date + 'T00:00:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric'});
        byDate[date].forEach(function(s){
          var t = s.startTime.slice(0,5);
          var hr = parseInt(t), ampm = hr>=12?'PM':'AM', h12 = ((hr%12)||12)+':'+t.slice(3)+' '+ampm;
          h += '<option value="'+s.id+'">'+label+' at '+h12+(s.label?' \u2014 '+s.label:'')+'</option>';
        });
      });
      h += '</select></div>';
    } else {
      h += '<div class="row2">';
      h += '<div class="ag"><label class="al">Preferred Date</label><input class="ai" data-f="date" type="date"/></div>';
      h += '<div class="ag"><label class="al">Preferred Time</label><input class="ai" data-f="time" type="time"/></div>';
      h += '</div>';
    }
    h += '<div class="ag"><label class="al">Message / Notes</label><textarea class="ai" data-f="message" rows="3" placeholder="Anything we should know?" style="resize:vertical"></textarea></div>';
    h += '<button class="ab" id="'+uid+'-btn">'+btnText+'</button>';
    h += '<div class="ae" id="'+uid+'-err" style="display:none"></div>';
    h += '</div>';
    el.innerHTML = h;
    var wrap = document.getElementById(uid);
    var btn  = document.getElementById(uid+'-btn');
    var err  = document.getElementById(uid+'-err');
    var get  = function(f){ var i=wrap.querySelector('[data-f="'+f+'"]'); return i?i.value.trim():''; };
    btn.addEventListener('click', function() {
      var name=get('name'), email=get('email');
      if (!name||!email){ err.textContent='Name and Email are required.'; err.style.display='block'; return; }
      err.style.display='none'; btn.disabled=true; btn.textContent='Submitting\u2026';
      var payload={name:name,email:email};
      if (b.showPhone!==false){ payload.phone=get('phone'); payload.org=get('org'); }
      if (b.showService!==false&&services.length) payload.service=get('service');
      if (b.showCategory!==false&&categories.length) payload.category=get('category');
      payload.message=get('message');
      var slotId=get('slotId');
      if (slotId) payload.slotId=parseInt(slotId);
      else { payload.date=get('date'); payload.time=get('time'); }
      fetch(base+'/api/public/bookings',{method:'POST',headers:{'Content-Type':'application/json','X-CSRF-Token':csrf},body:JSON.stringify(payload)})
        .then(function(r){ return r.json().then(function(d){ return {ok:r.ok,d:d}; }); })
        .then(function(res){
          if(res.ok){ wrap.innerHTML='<div class="as">'+successMsg+'</div>'; }
          else{ err.textContent=res.d.error||'Something went wrong.'; err.style.display='block'; btn.disabled=false; btn.textContent=btnText; }
        }).catch(function(){ err.textContent='Network error. Please try again.'; err.style.display='block'; btn.disabled=false; btn.textContent=btnText; });
    });
  }
})();`;
  return new Response(js, {
    headers: {
      'Content-Type': 'application/javascript; charset=utf-8',
      'Cache-Control': 'public, max-age=60',
    },
  });
});

export default app;
