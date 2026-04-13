const express = require('express');
const { pool, getConfig } = require('../db');
const { generateCsrfToken, requireCsrf } = require('../middleware/csrf');
const router = express.Router();

async function getValidCategories() {
  const stored = await getConfig('categories');
  return stored ? JSON.parse(stored) : ['Military', 'Federal', 'Corporate'];
}

async function getValidServices() {
  const stored = await getConfig('services');
  return stored ? JSON.parse(stored) : [];
}

// GET /api/public/csrf-token
router.get('/csrf-token', (req, res) => {
  res.json({ token: generateCsrfToken() });
});

// GET /api/public/availability
// Returns upcoming un-booked slots for the main site booking UI
router.get('/availability', async (req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT id, date, start_time, duration_minutes, label
      FROM availability_slots
      WHERE is_booked = FALSE AND date >= CURRENT_DATE
      ORDER BY date ASC, start_time ASC
    `);
    const slots = rows.map((r) => ({
      id: r.id,
      date: r.date.toISOString().split('T')[0],
      startTime: r.start_time,
      durationMinutes: r.duration_minutes,
      label: r.label || '',
    }));
    res.json(slots);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// POST /api/public/bookings
router.post('/bookings', requireCsrf, async (req, res) => {
  const { name, email, phone, org, service, category, date, time, message, slotId } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'name is required' });
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email is required' });
  }
  const [validCategories, validServices] = await Promise.all([getValidCategories(), getValidServices()]);
  if (category && validCategories.length > 0 && !validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }
  if (service && validServices.length > 0 && !validServices.includes(service)) {
    return res.status(400).json({ error: 'Invalid service' });
  }

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    let bookingDate = date || null;
    let bookingTime = (time || '').trim().slice(0, 50);

    if (slotId) {
      // Lock the slot row to prevent double-booking
      const { rows: slotRows } = await client.query(
        'SELECT id, date, start_time, is_booked FROM availability_slots WHERE id = $1 FOR UPDATE',
        [slotId]
      );
      if (slotRows.length === 0) {
        await client.query('ROLLBACK');
        return res.status(404).json({ error: 'Slot not found' });
      }
      if (slotRows[0].is_booked) {
        await client.query('ROLLBACK');
        return res.status(409).json({ error: 'Slot already booked' });
      }
      // Use the slot's date/time for the booking
      bookingDate = slotRows[0].date.toISOString().split('T')[0];
      bookingTime = slotRows[0].start_time;
    }

    const { rows } = await client.query(
      `INSERT INTO bookings (name, email, phone, org, service, category, date, time, message)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
       RETURNING id`,
      [
        name.trim().slice(0, 255),
        email.trim().slice(0, 255),
        (phone || '').trim().slice(0, 50),
        (org || '').trim().slice(0, 255),
        (service || '').trim().slice(0, 255),
        (category || '').trim().slice(0, 50),
        bookingDate,
        bookingTime,
        (message || '').trim().slice(0, 5000),
      ]
    );
    const bookingId = rows[0].id;

    if (slotId) {
      await client.query(
        'UPDATE availability_slots SET is_booked = TRUE, booking_id = $1 WHERE id = $2',
        [bookingId, slotId]
      );
    }

    await client.query('COMMIT');
    res.status(201).json({ success: true, id: bookingId });
  } catch (err) {
    await client.query('ROLLBACK');
    console.error(err);
    res.status(500).json({ error: 'Failed to save booking' });
  } finally {
    client.release();
  }
});

// POST /api/public/contacts
router.post('/contacts', requireCsrf, async (req, res) => {
  const { name, email, phone, category, subject, message } = req.body;

  if (!name || typeof name !== 'string' || name.trim().length === 0) {
    return res.status(400).json({ error: 'name is required' });
  }
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return res.status(400).json({ error: 'A valid email is required' });
  }
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'message is required' });
  }
  const validCategories = await getValidCategories();
  if (category && validCategories.length > 0 && !validCategories.includes(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  try {
    const { rows } = await pool.query(
      `INSERT INTO contacts (name, email, phone, category, subject, message)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id`,
      [
        name.trim().slice(0, 255),
        email.trim().slice(0, 255),
        (phone || '').trim().slice(0, 50),
        (category || '').trim().slice(0, 50),
        (subject || '').trim().slice(0, 255),
        message.trim().slice(0, 5000),
      ]
    );
    res.status(201).json({ success: true, id: rows[0].id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save message' });
  }
});

// GET /api/public/widget-config — public widget styling + field config
router.get('/widget-config', async (req, res) => {
  try {
    const raw = await getConfig('contact_form_config');
    const cfg = raw ? JSON.parse(raw) : {};
    // Only expose safe, non-sensitive keys
    res.json({
      accentColor: cfg.accentColor || '#C8A84E',
      fontFamily:  cfg.fontFamily  || 'inherit',
      contact: {
        showPhone:    cfg.contact?.showPhone    !== false,
        showSubject:  cfg.contact?.showSubject  !== false,
        showCategory: !!cfg.contact?.showCategory,
        buttonText:    cfg.contact?.buttonText    || 'Send Message',
        successMessage: cfg.contact?.successMessage || "Thank you! We'll be in touch soon.",
      },
      booking: {
        showPhone:    cfg.booking?.showPhone    !== false,
        showService:  cfg.booking?.showService  !== false,
        showCategory: cfg.booking?.showCategory !== false,
        buttonText:    cfg.booking?.buttonText    || 'Request Consultation',
        successMessage: cfg.booking?.successMessage || "Your request has been submitted!",
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load widget config' });
  }
});

// GET /api/public/contact-widget.js — embeddable contact form
router.get('/contact-widget.js', async (req, res) => {
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=60');
  res.send(`(function () {
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
})();`);
});

// GET /api/public/booking-widget.js — embeddable booking request form
router.get('/booking-widget.js', async (req, res) => {
  res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=60');
  res.send(`(function () {
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
      categories.forEach(function(c){ h += '<option value="'+c+'">'+c+'</option>'; });
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
})();`);
});

// GET /api/public/config — public company info, services, categories
router.get('/config', async (req, res) => {
  try {
    const [name, tagline, logo, services, categories] = await Promise.all([
      getConfig('company_name'),
      getConfig('company_tagline'),
      getConfig('company_logo'),
      getConfig('services'),
      getConfig('categories'),
    ]);
    res.json({
      company_name: name || 'Your Company',
      company_tagline: tagline || '',
      company_logo: logo || '',
      services: JSON.parse(services || '[]'),
      categories: JSON.parse(categories || '[]'),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load config' });
  }
});

module.exports = router;
