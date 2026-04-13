const crypto = require('crypto');

const TOKEN_TTL_MS = 60 * 60 * 1000; // 1 hour

function generateCsrfToken() {
  const timestamp = Date.now().toString();
  const hmac = crypto
    .createHmac('sha256', global.__JWT_SECRET__)
    .update(`csrf:${timestamp}`)
    .digest('hex');
  return `${timestamp}.${hmac}`;
}

function validateCsrfToken(token) {
  if (!token || typeof token !== 'string') return false;
  const [timestamp, hmac] = token.split('.');
  if (!timestamp || !hmac) return false;
  if (Date.now() - parseInt(timestamp, 10) > TOKEN_TTL_MS) return false;

  const expected = crypto
    .createHmac('sha256', global.__JWT_SECRET__)
    .update(`csrf:${timestamp}`)
    .digest('hex');

  // Constant-time comparison to prevent timing attacks
  try {
    return crypto.timingSafeEqual(Buffer.from(hmac, 'hex'), Buffer.from(expected, 'hex'));
  } catch {
    return false;
  }
}

function requireCsrf(req, res, next) {
  const token = req.headers['x-csrf-token'];
  if (!validateCsrfToken(token)) {
    return res.status(403).json({ error: 'Invalid or missing CSRF token' });
  }
  next();
}

module.exports = { generateCsrfToken, requireCsrf };
