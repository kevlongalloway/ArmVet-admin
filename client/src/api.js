// In production the API lives on a Cloudflare Worker (set VITE_API_URL).
// In development the Vite dev server proxies /api → the local Wrangler dev
// server, so an empty string keeps the same relative-URL behaviour.
const BASE = (import.meta.env.VITE_API_URL ?? '') + '/api';

function getToken() {
  return localStorage.getItem('armvet_token');
}

function setToken(token) {
  localStorage.setItem('armvet_token', token);
}

function clearToken() {
  localStorage.removeItem('armvet_token');
}

async function request(method, path, body) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const url = BASE + path;
  let res;
  try {
    res = await fetch(url, {
      method,
      headers,
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  } catch (networkErr) {
    // fetch() itself threw — network failure, CORS preflight rejection, or bad URL.
    const apiUrl = import.meta.env.VITE_API_URL || '(not set)';
    throw new Error(
      `Network request failed: ${networkErr.message}\n` +
      `URL: ${url}\n` +
      `VITE_API_URL at build time: ${apiUrl}\n` +
      `Possible causes: CORS blocked, wrong API URL, or Worker not deployed.`
    );
  }

  if (res.status === 401) {
    clearToken();
    window.location.reload();
    return;
  }

  if (!res.ok) {
    let text = '';
    try { text = await res.text(); } catch { /* ignore */ }
    throw new Error(text || `HTTP ${res.status} from ${url}`);
  }

  return res.json();
}

export const api = {
  login: async (username, password) => {
    const data = await request('POST', '/auth/login', { username, password });
    if (data?.token) setToken(data.token);
    return data;
  },
  logout: clearToken,
  getBookings: () => request('GET', '/bookings'),
  createBooking: (data) => request('POST', '/bookings', data),
  updateBookingStatus: (id, status) => request('PUT', `/bookings/${id}/status`, { status }),
  getContacts: () => request('GET', '/contacts'),
  updateContactStatus: (id, status) => request('PUT', `/contacts/${id}/status`, { status }),
  getAvailability: () => request('GET', '/availability'),
  createSlot: (slot) => request('POST', '/availability', slot),
  createSlotRange: (range) => request('POST', '/availability/batch', range),
  deleteSlot: (id) => request('DELETE', `/availability/${id}`),
  changePassword: (currentPassword, newPassword) => request('POST', '/auth/change-password', { currentPassword, newPassword }),
  completeTutorial: () => request('PUT', '/auth/tutorial-complete'),
  resetTutorial: () => request('DELETE', '/auth/tutorial-complete'),
  deleteBooking: (id) => request('DELETE', `/bookings/${id}`),
  deleteContact: (id) => request('DELETE', `/contacts/${id}`),
  hasToken: () => !!getToken(),
  applyWeeklySchedule: (weeksAhead = 4) => request('POST', '/availability/apply-weekly', { weeksAhead }),
  getAdminConfig: () => request('GET', '/admin/config'),
  saveConfig: (updates) => request('PUT', '/admin/config', updates),
  getDocs: () => request('GET', '/admin/docs'),
  resetSetup: () => request('DELETE', '/admin/config/setup_complete'),
  // Deals
  getDeals: () => request('GET', '/deals'),
  createDeal: (data) => request('POST', '/deals', data),
  updateDeal: (id, data) => request('PUT', `/deals/${id}`, data),
  deleteDeal: (id) => request('DELETE', `/deals/${id}`),
  // Activity
  getActivity: (type, id) => request('GET', `/activity?entity_type=${type}&entity_id=${id}`),
  addActivity: (data) => request('POST', '/activity', data),
  deleteActivity: (id) => request('DELETE', `/activity/${id}`),
  // Tasks
  getTasks: () => request('GET', '/tasks'),
  createTask: (data) => request('POST', '/tasks', data),
  updateTask: (id, data) => request('PUT', `/tasks/${id}`, data),
  deleteTask: (id) => request('DELETE', `/tasks/${id}`),
  // Tags
  getTags: () => request('GET', '/tags'),
  createTag: (data) => request('POST', '/tags', data),
  deleteTag: (id) => request('DELETE', `/tags/${id}`),
  getEntityTags: (type, id) => request('GET', `/entity-tags?entity_type=${type}&entity_id=${id}`),
  addEntityTag: (data) => request('POST', '/entity-tags', data),
  removeEntityTag: (data) => request('POST', '/entity-tags/remove', data),
  // Analytics
  getAnalytics: () => request('GET', '/analytics'),
};
