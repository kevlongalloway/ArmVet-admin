const BASE = '/api';

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

  const res = await fetch(BASE + path, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });

  if (res.status === 401) {
    clearToken();
    window.location.reload();
    return;
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
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
  updateBookingStatus: (id, status) => request('PUT', `/bookings/${id}/status`, { status }),
  getContacts: () => request('GET', '/contacts'),
  updateContactStatus: (id, status) => request('PUT', `/contacts/${id}/status`, { status }),
  hasToken: () => !!getToken(),
};
