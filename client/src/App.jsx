import { useState, useEffect } from "react";
import { api } from "./api.js";

const SERVICES = [
  "Leadership Development",
  "Executive Coaching",
  "Small Group Workshops",
  "Individual Development",
  "Organizational Culture Training",
  "Federal HR Consulting",
  "Workforce Planning",
  "HR Modernization",
  "Speaking Engagements",
];

const CATEGORIES = ["Military", "Federal", "Corporate"];

// ─── Icons (inline SVG) ───
const Icons = {
  dashboard: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  ),
  calendar: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  bookings: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  inbox: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-6l-2 3H10l-2-3H2" />
      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
    </svg>
  ),
  check: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  x: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),
  clock: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  chevronRight: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  ),
  back: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  ),
  logout: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
  menu: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  ),
  star: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  phone: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  mail: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  calendarPlus: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="12" y1="14" x2="12" y2="20" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  ),
  filter: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
  search: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  clock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  trash: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  ),
  archive: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  ),
  helpCircle: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  mobile: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  clipboardList: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  ),
  home: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  settings: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  sun: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
};

// ─── Styles ───
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap');

/* ─── Theme: Dark (default) ─── */
:root, [data-theme="dark"] {
  --bg-primary: #0C0F14;
  --bg-secondary: #141820;
  --bg-card: #1A1F2B;
  --bg-card-hover: #1F2537;
  --bg-input: #141820;
  --border: #262D3D;
  --border-light: #1E2433;
  --text-primary: #F0F2F5;
  --text-secondary: #8A94A6;
  --text-muted: #5A6478;
  --accent: #C8A84E;
  --accent-dim: rgba(200,168,78,0.12);
  --accent-glow: rgba(200,168,78,0.25);
  --green: #34D399; --green-dim: rgba(52,211,153,0.12);
  --red: #F87171; --red-dim: rgba(248,113,113,0.12);
  --blue: #60A5FA; --blue-dim: rgba(96,165,250,0.12);
  --orange: #FBBF24; --orange-dim: rgba(251,191,36,0.12);
  --purple: #A78BFA; --purple-dim: rgba(167,139,250,0.12);
  --radius: 10px; --radius-lg: 14px;
  --shadow: 0 2px 12px rgba(0,0,0,0.3);
  --transition: 0.2s ease;
}

/* ─── Theme: Light ─── */
[data-theme="light"] {
  --bg-primary: #F0F2F7;
  --bg-secondary: #FFFFFF;
  --bg-card: #FFFFFF;
  --bg-card-hover: #F5F7FB;
  --bg-input: #F0F2F7;
  --border: #DDE1EB;
  --border-light: #E8ECF3;
  --text-primary: #1A1F2E;
  --text-secondary: #5A6478;
  --text-muted: #9AA3B5;
  --accent: #A8862A;
  --accent-dim: rgba(168,134,42,0.12);
  --accent-glow: rgba(168,134,42,0.25);
  --green: #059669; --green-dim: rgba(5,150,105,0.1);
  --red: #DC2626; --red-dim: rgba(220,38,38,0.1);
  --blue: #2563EB; --blue-dim: rgba(37,99,235,0.1);
  --orange: #D97706; --orange-dim: rgba(217,119,6,0.1);
  --purple: #7C3AED; --purple-dim: rgba(124,58,237,0.1);
  --shadow: 0 2px 12px rgba(0,0,0,0.08);
}

/* ─── Theme: Auto (follows system) ─── */
@media (prefers-color-scheme: light) {
  [data-theme="auto"] {
    --bg-primary: #F0F2F7;
    --bg-secondary: #FFFFFF;
    --bg-card: #FFFFFF;
    --bg-card-hover: #F5F7FB;
    --bg-input: #F0F2F7;
    --border: #DDE1EB;
    --border-light: #E8ECF3;
    --text-primary: #1A1F2E;
    --text-secondary: #5A6478;
    --text-muted: #9AA3B5;
    --accent: #A8862A;
    --accent-dim: rgba(168,134,42,0.12);
    --accent-glow: rgba(168,134,42,0.25);
    --green: #059669; --green-dim: rgba(5,150,105,0.1);
    --red: #DC2626; --red-dim: rgba(220,38,38,0.1);
    --blue: #2563EB; --blue-dim: rgba(37,99,235,0.1);
    --orange: #D97706; --orange-dim: rgba(217,119,6,0.1);
    --purple: #7C3AED; --purple-dim: rgba(124,58,237,0.1);
    --shadow: 0 2px 12px rgba(0,0,0,0.08);
  }
}

/* ─── Theme: Alpha Psi Phi (Deep Purple & Gold) ─── */
[data-theme="alpha-psi-phi"] {
  --bg-primary: #0F0720;
  --bg-secondary: #180B33;
  --bg-card: #1F1040;
  --bg-card-hover: #281554;
  --bg-input: #180B33;
  --border: #3D1F72;
  --border-light: #2B1558;
  --text-primary: #F0E8FF;
  --text-secondary: #B89FD8;
  --text-muted: #7B5FA0;
  --accent: #D4AF37;
  --accent-dim: rgba(212,175,55,0.15);
  --accent-glow: rgba(212,175,55,0.32);
  --green: #34D399; --green-dim: rgba(52,211,153,0.12);
  --red: #F87171; --red-dim: rgba(248,113,113,0.12);
  --blue: #818CF8; --blue-dim: rgba(129,140,248,0.15);
  --orange: #FBBF24; --orange-dim: rgba(251,191,36,0.12);
  --purple: #C084FC; --purple-dim: rgba(192,132,252,0.15);
  --shadow: 0 2px 16px rgba(0,0,0,0.5);
}

* { box-sizing: border-box; margin: 0; padding: 0; }

html {
  overflow-x: hidden;
  height: 100%;
}

body {
  font-family: 'DM Sans', sans-serif;
  background: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  overscroll-behavior: none;
  -webkit-overflow-scrolling: touch;
  min-height: 100%;
  min-height: -webkit-fill-available;
}

#root {
  min-height: 100vh;
  min-height: -webkit-fill-available;
}

.login-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.login-page::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(ellipse at 30% 20%, rgba(200,168,78,0.04) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(200,168,78,0.03) 0%, transparent 50%);
  pointer-events: none;
}

.login-box {
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 1;
}

.login-logo {
  text-align: center;
  margin-bottom: 40px;
}

.login-logo h1 {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 28px;
  letter-spacing: 3px;
  color: var(--text-primary);
  text-transform: uppercase;
}

.login-logo p {
  color: var(--accent);
  font-size: 11px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-top: 6px;
  font-weight: 600;
}

.login-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
}

.login-card h2 {
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 4px;
}

.login-card .subtitle {
  color: var(--text-secondary);
  font-size: 13px;
  margin-bottom: 28px;
}

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.form-group input, .form-group select, .form-group textarea {
  width: 100%;
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 14px;
  color: var(--text-primary);
  font-family: 'DM Sans', sans-serif;
  transition: border-color var(--transition);
  outline: none;
}

.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

.form-group input::placeholder {
  color: var(--text-muted);
}

.btn-primary {
  width: 100%;
  padding: 13px;
  background: var(--accent);
  color: #0C0F14;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: all var(--transition);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.btn-primary:hover {
  background: #D4B65E;
  box-shadow: 0 4px 20px var(--accent-glow);
}

.btn-secondary {
  padding: 8px 16px;
  background: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: all var(--transition);
}

.btn-secondary:hover {
  border-color: var(--text-secondary);
  color: var(--text-primary);
}

.btn-action {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: none;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: all var(--transition);
}

.btn-approve {
  background: var(--green-dim);
  color: var(--green);
}
.btn-approve:hover { background: rgba(52, 211, 153, 0.2); }

.btn-decline {
  background: var(--red-dim);
  color: var(--red);
}
.btn-decline:hover { background: rgba(248, 113, 113, 0.2); }

.btn-calendar {
  background: var(--blue-dim);
  color: var(--blue);
}
.btn-calendar:hover { background: rgba(96, 165, 250, 0.2); }

.btn-delete {
  background: var(--red-dim);
  color: var(--red);
  margin-left: auto;
}
.btn-delete:hover { background: rgba(248, 113, 113, 0.2); }

.btn-archive {
  background: rgba(90,100,120,0.15);
  color: var(--text-muted);
}
.btn-archive:hover { background: rgba(90,100,120,0.25); }

.login-error {
  background: var(--red-dim);
  color: var(--red);
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 18px;
  text-align: center;
}

.login-hint {
  text-align: center;
  margin-top: 20px;
  font-size: 12px;
  color: var(--text-muted);
}

.login-hint code {
  background: var(--bg-input);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--text-secondary);
  font-size: 11px;
}

/* ─── Layout ─── */
.app-layout {
  display: flex;
  min-height: 100vh;
  max-width: 100vw;
  overflow-x: hidden;
}

.sidebar {
  width: 240px;
  background: var(--bg-secondary);
  border-right: 1px solid var(--border);
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  z-index: 100;
  transition: transform 0.3s ease;
}

.sidebar-logo {
  padding: 0 24px;
  margin-bottom: 8px;
}

.sidebar-logo h1 {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 20px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.sidebar-logo p {
  font-size: 10px;
  color: var(--accent);
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 2px;
}

.sidebar-label {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 20px 24px 8px;
}

.sidebar-nav {
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 24px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all var(--transition);
  border-left: 3px solid transparent;
  position: relative;
}

.nav-item:hover {
  color: var(--text-primary);
  background: rgba(255,255,255,0.03);
}

.nav-item.active {
  color: var(--accent);
  background: var(--accent-dim);
  border-left-color: var(--accent);
}

.nav-badge {
  position: absolute;
  right: 20px;
  background: var(--accent);
  color: #0C0F14;
  font-size: 10px;
  font-weight: 700;
  padding: 2px 7px;
  border-radius: 10px;
  min-width: 20px;
  text-align: center;
}

.sidebar-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--border);
}

.logout-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--text-muted);
  cursor: pointer;
  transition: color var(--transition);
  background: none;
  border: none;
  font-family: inherit;
  padding: 0;
}

.logout-btn:hover { color: var(--red); }

.main-content {
  flex: 1;
  margin-left: 240px;
  padding: 28px;
  min-height: 100vh;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}

.mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border);
  padding: 12px 16px;
  z-index: 90;
  align-items: center;
  justify-content: space-between;
}

.mobile-header h1 {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.mobile-menu-btn {
  background: none;
  border: none;
  color: var(--text-primary);
  cursor: pointer;
  padding: 4px;
}

.sidebar-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 99;
}

/* ─── Page Header ─── */
.page-header {
  margin-bottom: 28px;
}

.page-header h2 {
  font-family: 'Syne', sans-serif;
  font-size: 24px;
  font-weight: 700;
}

.page-header p {
  color: var(--text-secondary);
  font-size: 14px;
  margin-top: 4px;
}

/* ─── Stats Row ─── */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}

.stat-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  min-width: 0;
  box-sizing: border-box;
  transition: border-color var(--transition);
}

.stat-card:hover {
  border-color: var(--border-light);
}

.stat-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.stat-value {
  font-family: 'Syne', sans-serif;
  font-size: 28px;
  font-weight: 700;
}

.stat-sub {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 4px;
}

/* ─── Card List ─── */
.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 12px;
}

.section-title {
  font-size: 16px;
  font-weight: 700;
}

.filters {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-chip {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-secondary);
  font-family: 'DM Sans', sans-serif;
  transition: all var(--transition);
  white-space: nowrap;
}

.filter-chip:hover {
  border-color: var(--text-secondary);
}

.filter-chip.active {
  background: var(--accent-dim);
  border-color: var(--accent);
  color: var(--accent);
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 20px;
  cursor: pointer;
  transition: all var(--transition);
  display: flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
  box-sizing: border-box;
}

.list-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent);
  box-shadow: 0 0 0 1px var(--accent-dim);
}

.card-status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.card-body {
  flex: 1;
  min-width: 0;
}

.card-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 4px;
}

.card-name {
  font-weight: 600;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-date {
  font-size: 12px;
  color: var(--text-muted);
  white-space: nowrap;
}

.card-preview {
  font-size: 13px;
  color: var(--text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-tags {
  display: flex;
  gap: 6px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.tag {
  font-size: 10px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.tag-military { background: rgba(52,211,153,0.12); color: #34D399; }
.tag-federal { background: rgba(96,165,250,0.12); color: #60A5FA; }
.tag-corporate { background: rgba(167,139,250,0.12); color: #A78BFA; }

.status-badge {
  font-size: 10px;
  font-weight: 700;
  padding: 3px 10px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-pending { background: var(--orange-dim); color: var(--orange); }
.status-approved { background: var(--green-dim); color: var(--green); }
.status-declined { background: var(--red-dim); color: var(--red); }
.status-new { background: var(--blue-dim); color: var(--blue); }
.status-replied { background: var(--green-dim); color: var(--green); }
.status-archived { background: rgba(90,100,120,0.2); color: var(--text-muted); }
.status-on-calendar { background: var(--purple-dim); color: var(--purple); }

.card-chevron {
  color: var(--text-muted);
  flex-shrink: 0;
}

/* ─── Detail View ─── */
.detail-view {
  max-width: 640px;
}

.detail-back {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 20px;
  background: none;
  border: none;
  font-family: inherit;
  padding: 0;
  transition: color var(--transition);
}

.detail-back:hover { color: var(--accent); }

.detail-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
}

.detail-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.detail-name {
  font-family: 'Syne', sans-serif;
  font-size: 22px;
  font-weight: 700;
}

.detail-org {
  color: var(--text-secondary);
  font-size: 14px;
  margin-top: 2px;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.detail-field label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 4px;
}

.detail-field span {
  font-size: 14px;
  color: var(--text-primary);
}

.detail-field a {
  font-size: 14px;
  color: var(--accent);
  text-decoration: none;
}

.detail-field a:hover { text-decoration: underline; }

.detail-message {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.detail-message label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.detail-message p {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.detail-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.detail-status-select {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--border);
}

.detail-status-select label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.detail-status-select select {
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 12px;
  font-size: 13px;
  color: var(--text-primary);
  font-family: 'DM Sans', sans-serif;
  outline: none;
  cursor: pointer;
}

.detail-status-select select:focus {
  border-color: var(--accent);
}

/* ─── Calendar View ─── */
.cal-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 20px;
  align-items: start;
}
.cal-left { min-width: 0; }
.cal-right { position: sticky; top: 80px; }
.cal-mobile-upcoming { display: none; margin-top: 24px; grid-column: 1 / -1; }

.cal-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 16px;
}

.cal-header-cell {
  background: var(--bg-secondary);
  padding: 10px 6px;
  text-align: center;
  font-size: 11px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.cal-cell {
  background: var(--bg-card);
  padding: 8px 8px 6px;
  min-height: 100px;
  font-size: 12px;
  position: relative;
  cursor: pointer;
  transition: background var(--transition);
  overflow: hidden;
}
.cal-cell:hover:not(.other-month) { background: var(--bg-card-hover); }
.cal-cell.selected { background: rgba(200,168,78,0.08) !important; box-shadow: inset 0 0 0 1.5px var(--accent); }
.cal-cell.other-month { background: var(--bg-secondary); opacity: 0.45; cursor: default; }

.cal-day-num {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}
.cal-cell.today .cal-day-num { background: var(--accent); color: #0C0F14; }
.cal-cell.selected:not(.today) .cal-day-num { color: var(--accent); }

.cal-event {
  background: var(--green-dim);
  color: var(--green);
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 600;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: opacity var(--transition);
}
.cal-event:hover { opacity: 0.8; }
.cal-event.on-cal { background: var(--purple-dim); color: var(--purple); }
.cal-event-more { font-size: 10px; color: var(--text-muted); padding: 1px 4px; }

/* Mobile-only: dots instead of event chips */
.cal-dots { display: none; gap: 3px; margin-top: 4px; flex-wrap: wrap; }
.cal-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.cal-dot.green { background: var(--green); }
.cal-dot.purple { background: var(--purple); }

.cal-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
  gap: 12px;
}
.cal-month {
  font-family: 'Syne', sans-serif;
  font-size: 20px;
  font-weight: 700;
}
.cal-nav-btns { display: flex; gap: 6px; }
.cal-nav-btn {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 7px 13px;
  color: var(--text-secondary);
  font-size: 13px;
  cursor: pointer;
  font-family: inherit;
  transition: all var(--transition);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.cal-nav-btn:hover { border-color: var(--accent); color: var(--accent); }
.cal-nav-icon { padding: 7px 10px; }

.cal-legend { display: flex; gap: 16px; margin-bottom: 4px; flex-wrap: wrap; }
.cal-legend-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary); }
.cal-legend-dot { width: 8px; height: 8px; border-radius: 50%; }
.cal-legend-dot.green { background: var(--green); }
.cal-legend-dot.purple { background: var(--purple); }

/* Right detail panel */
.cal-panel {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px;
  min-height: 200px;
}
.cal-panel-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 16px;
}
.cal-panel-title {
  font-family: 'Syne', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}
.cal-panel-close {
  background: none;
  border: none;
  color: var(--text-muted);
  cursor: pointer;
  padding: 2px;
  flex-shrink: 0;
  transition: color var(--transition);
}
.cal-panel-close:hover { color: var(--text-primary); }
.cal-panel-empty {
  font-size: 13px;
  color: var(--text-muted);
  text-align: center;
  padding: 24px 0;
  line-height: 1.6;
}
.cal-panel-event {
  padding: 12px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 10px;
  cursor: pointer;
  transition: all var(--transition);
}
.cal-panel-event:hover { border-color: var(--accent); background: var(--accent-dim); }
.cal-panel-event-time {
  font-size: 10px;
  color: var(--accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.cal-panel-event-name { font-size: 14px; font-weight: 600; margin-top: 4px; }
.cal-panel-event-service { font-size: 12px; color: var(--text-secondary); margin-top: 2px; }
.cal-panel-event-org { font-size: 11px; color: var(--text-muted); margin-top: 2px; }

/* Upcoming list in panel */
.cal-upcoming-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border-light);
  cursor: pointer;
}
.cal-upcoming-item:last-child { border-bottom: none; }
.cal-upcoming-item:hover .cal-upcoming-name { color: var(--accent); }
.cal-upcoming-badge {
  width: 42px;
  text-align: center;
  flex-shrink: 0;
}
.cal-upcoming-badge-month {
  font-size: 10px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1;
}
.cal-upcoming-badge-day {
  font-size: 22px;
  font-family: 'Syne', sans-serif;
  font-weight: 700;
  line-height: 1.1;
  color: var(--text-primary);
}
.cal-upcoming-name {
  font-size: 13px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color var(--transition);
}
.cal-upcoming-meta { font-size: 11px; color: var(--text-secondary); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* ─── Toast ─── */
.toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.toast {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 14px 20px;
  font-size: 13px;
  box-shadow: var(--shadow);
  animation: slideUp 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 360px;
}

.toast-success { border-left: 3px solid var(--green); }
.toast-info { border-left: 3px solid var(--blue); }
.toast-error { border-left: 3px solid var(--red); }

@keyframes slideUp {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ─── Search ─── */
.search-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 8px 14px;
  margin-bottom: 16px;
  transition: border-color var(--transition);
}

.search-bar:focus-within {
  border-color: var(--accent);
}

.search-bar input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 14px;
  font-family: inherit;
}

.search-bar input::placeholder { color: var(--text-muted); }

.search-icon { color: var(--text-muted); flex-shrink: 0; }

/* ─── Empty State ─── */
.empty-state {
  text-align: center;
  padding: 48px 20px;
  color: var(--text-muted);
}

.empty-state p {
  font-size: 14px;
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }
  .sidebar.open {
    transform: translateX(0);
    box-shadow: 4px 0 24px rgba(0,0,0,0.5);
  }
  .sidebar-overlay.show {
    display: block;
  }
  .mobile-header {
    display: flex;
  }
  .main-content {
    margin-left: 0;
    padding: 72px 16px 24px;
  }
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .stat-value { font-size: 22px; }
  .detail-grid {
    grid-template-columns: 1fr;
  }
  .cal-layout { grid-template-columns: 1fr; }
  .cal-right { display: none; position: static; margin-top: 16px; }
  .cal-layout.day-selected .cal-right { display: block; }
  .cal-layout.day-selected .cal-mobile-upcoming { display: none; }
  .cal-mobile-upcoming { display: block; }
  .cal-cell { min-height: 56px; padding: 5px 4px; }
  .cal-event { display: none; }
  .cal-event-more { display: none; }
  .cal-dots { display: flex; }
  .cal-day-num { width: 22px; height: 22px; font-size: 12px; }
  .page-header h2 { font-size: 20px; }
  .toast-container {
    left: 16px;
    right: 16px;
    bottom: 16px;
  }
  .toast { max-width: 100%; }
}

@media (max-width: 480px) {
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .detail-card { padding: 20px; }
  .detail-name { font-size: 18px; }
}

/* ─── Availability Page ─── */
.avail-intro {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-left: 3px solid var(--accent);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 24px;
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
}
.avail-form-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  margin-bottom: 28px;
}
.avail-form-card h3 {
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 6px;
}
.avail-form-card .avail-section-hint {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 20px;
  line-height: 1.6;
}
.avail-form-row { display: flex; flex-direction: column; gap: 18px; }
.avail-form-inline {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.avail-field-hint {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 5px;
  line-height: 1.5;
}
.avail-form-row .form-group { margin-bottom: 0; }
.avail-preview {
  background: var(--accent-dim);
  border: 1px solid var(--accent);
  border-radius: var(--radius);
  padding: 14px 18px;
  font-size: 13px;
  color: var(--text-primary);
  line-height: 1.7;
}
.avail-preview strong { color: var(--accent); }
.avail-date-group { margin-bottom: 32px; }
.avail-date-header {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-primary);
  padding: 10px 0;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--border);
}
.avail-slot-row {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 8px;
  transition: border-color var(--transition);
  flex-wrap: wrap;
}
.avail-slot-row:hover { border-color: var(--border-light); }
.avail-slot-time { font-weight: 700; font-size: 15px; min-width: 80px; }
.avail-slot-duration { font-size: 12px; color: var(--text-muted); min-width: 55px; }
.avail-slot-label { font-size: 13px; color: var(--text-secondary); flex: 1; font-style: italic; }
.avail-slot-booked-by { font-size: 13px; color: var(--text-secondary); flex: 1; cursor: pointer; }
.avail-slot-booked-by:hover { color: var(--accent); text-decoration: underline; }
.btn-slot-delete {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 7px; background: transparent; color: var(--text-muted);
  border: 1px solid var(--border); border-radius: 6px; cursor: pointer;
  transition: all var(--transition); flex-shrink: 0;
}
.btn-slot-delete:hover { background: var(--red-dim); color: var(--red); border-color: var(--red); }
.avail-empty {
  text-align: center; padding: 56px 20px; color: var(--text-muted); font-size: 14px;
  background: var(--bg-card); border: 1px dashed var(--border); border-radius: var(--radius-lg);
}
.avail-empty .avail-empty-icon { display: flex; justify-content: center; margin-bottom: 12px; color: var(--text-muted); }
.avail-empty .avail-empty-icon svg { width: 40px; height: 40px; }
.avail-empty p { color: var(--text-muted); font-size: 14px; margin-top: 6px; line-height: 1.6; }

/* ─── Tutorial Overlay ─── */
.tutorial-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.88);
  z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 24px;
}
.tutorial-card {
  background: var(--bg-card); border: 1px solid var(--accent);
  border-radius: var(--radius-lg); padding: 44px 36px;
  max-width: 500px; width: 100%; text-align: center;
}
.tutorial-icon { display: flex; justify-content: center; margin-bottom: 20px; color: var(--accent); }
.tutorial-icon svg { width: 52px; height: 52px; }
.tutorial-step-num {
  font-size: 11px; font-weight: 700; color: var(--accent);
  letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px;
}
.tutorial-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; margin-bottom: 16px; }
.tutorial-body { font-size: 16px; color: var(--text-secondary); line-height: 1.75; margin-bottom: 32px; }
.tutorial-dots { display: flex; justify-content: center; gap: 8px; margin-bottom: 28px; }
.tutorial-dot { width: 9px; height: 9px; border-radius: 50%; background: var(--border); transition: background var(--transition); }
.tutorial-dot.active { background: var(--accent); }
.tutorial-btn-row { display: flex; flex-direction: column; align-items: center; gap: 14px; }
.tutorial-next { width: 100%; padding: 14px; background: var(--accent); color: #0C0F14; border: none; border-radius: 8px; font-size: 15px; font-weight: 700; font-family: 'DM Sans', sans-serif; cursor: pointer; transition: all var(--transition); }
.tutorial-next:hover { background: #D4B65E; }
.tutorial-dismiss { background: none; border: none; color: var(--text-muted); font-size: 13px; cursor: pointer; font-family: inherit; }
.tutorial-dismiss:hover { color: var(--text-secondary); }
.tutorial-no-show { background: none; border: 1px solid var(--border); color: var(--text-muted); font-size: 12px; cursor: pointer; font-family: inherit; padding: 8px 16px; border-radius: 6px; transition: all var(--transition); }
.tutorial-no-show:hover { border-color: var(--red); color: var(--red); }
.sidebar-tutorial-btn { display: flex; align-items: center; gap: 10px; width: 100%; background: none; border: none; color: var(--text-muted); font-size: 13px; font-family: inherit; cursor: pointer; padding: 10px 24px; transition: color var(--transition); text-align: left; }
.sidebar-tutorial-btn:hover { color: var(--text-secondary); }

/* ─── Settings Page ─── */
.settings-section {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 28px;
  margin-bottom: 20px;
}
.settings-section > h3 {
  font-family: 'Syne', sans-serif;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 6px;
}
.settings-desc {
  font-size: 13px;
  color: var(--text-secondary);
  margin-bottom: 22px;
  line-height: 1.6;
}
.theme-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.theme-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 6px;
  border-radius: var(--radius);
  border: 2px solid transparent;
  transition: all var(--transition);
}
.theme-option:hover:not(.active) { border-color: var(--border); }
.theme-option.active { border-color: var(--accent); }
.theme-swatch {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
}
.theme-swatch-header {
  height: 32%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  gap: 4px;
}
.theme-swatch-dot { width: 5px; height: 5px; border-radius: 50%; opacity: 0.6; }
.theme-swatch-body {
  flex: 1;
  display: grid;
  grid-template-columns: 28% 1fr;
  gap: 3px;
  padding: 3px;
}
.theme-swatch-sidebar { border-radius: 3px; }
.theme-swatch-content { display: flex; flex-direction: column; gap: 3px; }
.theme-swatch-card { flex: 1; border-radius: 3px; }
.theme-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--text-secondary);
  text-align: center;
}
.theme-option.active .theme-label { color: var(--accent); }

/* Generic form elements */
.form-group { display: flex; flex-direction: column; gap: 6px; }
.form-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.form-input {
  background: var(--bg-input);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14px;
  color: var(--text-primary);
  font-family: 'DM Sans', sans-serif;
  outline: none;
  transition: border-color var(--transition);
  width: 100%;
}
.form-input:focus { border-color: var(--accent); }
.btn-primary {
  background: var(--accent);
  color: #0C0F14;
  border: none;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 700;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  transition: all var(--transition);
  align-self: flex-start;
}
.btn-primary:hover { opacity: 0.9; }
.btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
.settings-form { display: flex; flex-direction: column; gap: 18px; max-width: 420px; }
.settings-info-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid var(--border-light);
  font-size: 14px;
}
.settings-info-row:last-child { border-bottom: none; }
.settings-info-label { color: var(--text-muted); font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
.settings-info-value { color: var(--text-primary); font-weight: 500; }

@media (max-width: 768px) {
  .avail-form-inline { grid-template-columns: 1fr; }
  .tutorial-card { padding: 32px 24px; }
  .tutorial-title { font-size: 19px; }
  .tutorial-body { font-size: 15px; }
  .theme-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
}
`;

// ─── Theme init (runs before first render to avoid flash) ───
if (typeof localStorage !== 'undefined') {
  document.documentElement.setAttribute('data-theme', localStorage.getItem('armvet_theme') || 'auto');
}

function useTheme() {
  const [theme, setThemeState] = useState(() => localStorage.getItem('armvet_theme') || 'auto');
  const setTheme = (t) => {
    localStorage.setItem('armvet_theme', t);
    document.documentElement.setAttribute('data-theme', t);
    setThemeState(t);
  };
  return [theme, setTheme];
}

// ─── Helpers ───
function statusColor(s) {
  const map = { pending: "var(--orange)", approved: "var(--green)", declined: "var(--red)", new: "var(--blue)", replied: "var(--green)", archived: "var(--text-muted)", "on-calendar": "var(--purple)" };
  return map[s] || "var(--text-muted)";
}

function formatDate(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatDateLong(d) {
  return new Date(d + "T00:00:00").toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function formatTime(t) {
  if (!t) return "";
  const [h, m] = t.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")} ${ampm}`;
}

// ─── Components ───
function Toast({ toasts }) {
  return (
    <div className="toast-container">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.type || "success"}`}>
          {t.type === "success" && <span style={{ color: "var(--green)" }}>{Icons.check}</span>}
          {t.type === "info" && <span style={{ color: "var(--blue)" }}>{Icons.calendarPlus}</span>}
          {t.message}
        </div>
      ))}
    </div>
  );
}

function Sidebar({ page, setPage, bookings, contacts, isOpen, onClose, onLogout, onShowTutorial }) {
  const pendingCount = bookings.filter((b) => b.status === "pending").length;
  const newCount = contacts.filter((c) => c.status === "new").length;

  return (
    <>
      <div className={`sidebar-overlay ${isOpen ? "show" : ""}`} onClick={onClose} />
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-logo">
          <h1>Armvet</h1>
          <p>Admin Portal</p>
        </div>
        <div className="sidebar-label">Manage</div>
        <nav className="sidebar-nav">
          {[
            { id: "dashboard", icon: Icons.dashboard, label: "Dashboard" },
            { id: "bookings", icon: Icons.bookings, label: "Bookings", badge: pendingCount },
            { id: "contacts", icon: Icons.inbox, label: "Inbox", badge: newCount },
            { id: "availability", icon: Icons.clock, label: "Availability" },
            { id: "calendar", icon: Icons.calendar, label: "Calendar" },
            { id: "settings", icon: Icons.settings, label: "Settings" },
          ].map((item) => (
            <div
              key={item.id}
              className={`nav-item ${page === item.id ? "active" : ""}`}
              onClick={() => { setPage(item.id); onClose(); }}
            >
              {item.icon}
              {item.label}
              {item.badge > 0 && <span className="nav-badge">{item.badge}</span>}
            </div>
          ))}
        </nav>
        <div className="sidebar-footer">
          <button className="sidebar-tutorial-btn" onClick={() => { onShowTutorial(); onClose(); }}>
            {Icons.helpCircle}
            Show Tutorial
          </button>
          <button className="logout-btn" onClick={onLogout}>
            {Icons.logout}
            Sign Out
          </button>
        </div>
      </aside>
    </>
  );
}

function StatCard({ label, value, sub, color }) {
  return (
    <div className="stat-card">
      <div className="stat-label">{label}</div>
      <div className="stat-value" style={color ? { color } : {}}>
        {value}
      </div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  );
}

function DashboardPage({ bookings, contacts, setPage, setSelectedBooking, setSelectedContact }) {
  const pending = bookings.filter((b) => b.status === "pending");
  const approved = bookings.filter((b) => b.status === "approved" || b.status === "on-calendar");
  const newContacts = contacts.filter((c) => c.status === "new");

  return (
    <div>
      <div className="page-header">
        <h2>Dashboard</h2>
        <p>Overview of your consultation bookings and inquiries</p>
      </div>

      <div className="stats-grid">
        <StatCard label="Pending Bookings" value={pending.length} sub="Need your review" color="var(--orange)" />
        <StatCard label="Approved" value={approved.length} sub="Confirmed consultations" color="var(--green)" />
        <StatCard label="New Messages" value={newContacts.length} sub="Unread inquiries" color="var(--blue)" />
        <StatCard label="Total Leads" value={bookings.length + contacts.length} sub="All time" />
      </div>

      {pending.length > 0 && (
        <div style={{ marginBottom: 28 }}>
          <div className="section-header">
            <span className="section-title">Needs Your Attention</span>
            <button className="btn-secondary" onClick={() => setPage("bookings")}>
              View All Bookings
            </button>
          </div>
          <div className="card-list">
            {pending.slice(0, 3).map((b) => (
              <div key={b.id} className="list-card" onClick={() => { setSelectedBooking(b.id); setPage("booking-detail"); }}>
                <div className="card-status-dot" style={{ background: statusColor(b.status) }} />
                <div className="card-body">
                  <div className="card-top-row">
                    <span className="card-name">{b.name}</span>
                    <span className="card-date">{formatDate(b.date)}</span>
                  </div>
                  <div className="card-preview">{b.service} — {b.org}</div>
                  <div className="card-tags">
                    <span className={`tag tag-${b.category.toLowerCase()}`}>{b.category}</span>
                    <span className={`status-badge status-${b.status}`}>{b.status}</span>
                  </div>
                </div>
                <span className="card-chevron">{Icons.chevronRight}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {newContacts.length > 0 && (
        <div>
          <div className="section-header">
            <span className="section-title">New Inquiries</span>
            <button className="btn-secondary" onClick={() => setPage("contacts")}>
              View Inbox
            </button>
          </div>
          <div className="card-list">
            {newContacts.slice(0, 3).map((c) => (
              <div key={c.id} className="list-card" onClick={() => { setSelectedContact(c.id); setPage("contact-detail"); }}>
                <div className="card-status-dot" style={{ background: statusColor(c.status) }} />
                <div className="card-body">
                  <div className="card-top-row">
                    <span className="card-name">{c.name}</span>
                    <span className="card-date">{formatDate(c.submittedAt)}</span>
                  </div>
                  <div className="card-preview">{c.subject}</div>
                  <div className="card-tags">
                    <span className={`tag tag-${c.category.toLowerCase()}`}>{c.category}</span>
                  </div>
                </div>
                <span className="card-chevron">{Icons.chevronRight}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BookingsPage({ bookings, setPage, setSelectedBooking, searchTerm, setSearchTerm, statusFilter, setStatusFilter, categoryFilter, setCategoryFilter }) {
  const filtered = bookings.filter((b) => {
    const matchSearch = !searchTerm || b.name.toLowerCase().includes(searchTerm.toLowerCase()) || b.org.toLowerCase().includes(searchTerm.toLowerCase()) || b.service.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === "all" || b.status === statusFilter;
    const matchCat = categoryFilter === "all" || b.category === categoryFilter;
    return matchSearch && matchStatus && matchCat;
  });

  return (
    <div>
      <div className="page-header">
        <h2>Consultation Bookings</h2>
        <p>Manage requests for proposals and consultation appointments</p>
      </div>

      <div className="search-bar">
        <span className="search-icon">{Icons.search}</span>
        <input placeholder="Search by name, organization, or service..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className="section-header">
        <div className="filters">
          {["all", "pending", "approved", "on-calendar", "declined"].map((s) => (
            <button key={s} className={`filter-chip ${statusFilter === s ? "active" : ""}`} onClick={() => setStatusFilter(s)}>
              {s === "all" ? "All" : s === "on-calendar" ? "On Calendar" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        <div className="filters">
          {["all", ...CATEGORIES].map((c) => (
            <button key={c} className={`filter-chip ${categoryFilter === c ? "active" : ""}`} onClick={() => setCategoryFilter(c)}>
              {c === "all" ? "All Sectors" : c}
            </button>
          ))}
        </div>
      </div>

      <div className="card-list">
        {filtered.length === 0 ? (
          <div className="empty-state"><p>No bookings match your filters.</p></div>
        ) : (
          filtered.map((b) => (
            <div key={b.id} className="list-card" onClick={() => { setSelectedBooking(b.id); setPage("booking-detail"); }}>
              <div className="card-status-dot" style={{ background: statusColor(b.status) }} />
              <div className="card-body">
                <div className="card-top-row">
                  <span className="card-name">{b.name}</span>
                  <span className="card-date">{b.time} · {formatDate(b.date)}</span>
                </div>
                <div className="card-preview">{b.service} — {b.org}</div>
                <div className="card-tags">
                  <span className={`tag tag-${b.category.toLowerCase()}`}>{b.category}</span>
                  <span className={`status-badge status-${b.status}`}>{b.status === "on-calendar" ? "On Calendar" : b.status}</span>
                </div>
              </div>
              <span className="card-chevron">{Icons.chevronRight}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function BookingDetail({ booking, onBack, onUpdateStatus, onAddToCalendar, onDelete, addToast }) {
  if (!booking) return null;

  const handleStatusChange = (newStatus) => {
    onUpdateStatus(booking.id, newStatus);
    addToast({ message: `Booking ${newStatus === "approved" ? "approved" : newStatus === "declined" ? "declined" : "updated"} — ${booking.name}`, type: "success" });
  };

  const handleDelete = async () => {
    if (!window.confirm(`Permanently delete this booking from ${booking.name}? This cannot be undone.`)) return;
    await onDelete(booking.id);
    onBack();
  };

  return (
    <div className="detail-view">
      <button className="detail-back" onClick={onBack}>{Icons.back} Back to Bookings</button>
      <div className="detail-card">
        <div className="detail-header">
          <div>
            <div className="detail-name">{booking.name}</div>
            <div className="detail-org">{booking.org}</div>
          </div>
          <span className={`status-badge status-${booking.status}`}>{booking.status === "on-calendar" ? "On Calendar" : booking.status}</span>
        </div>

        <div className="detail-grid">
          <div className="detail-field">
            <label>Service Requested</label>
            <span>{booking.service}</span>
          </div>
          <div className="detail-field">
            <label>Sector</label>
            <span className={`tag tag-${booking.category.toLowerCase()}`}>{booking.category}</span>
          </div>
          <div className="detail-field">
            <label>Consultation Date</label>
            <span>{formatDate(booking.date)} at {booking.time}</span>
          </div>
          <div className="detail-field">
            <label>Submitted</label>
            <span>{formatDate(booking.submittedAt)}</span>
          </div>
          <div className="detail-field">
            <label>Email</label>
            <a href={`mailto:${booking.email}`}>{booking.email}</a>
          </div>
          <div className="detail-field">
            <label>Phone</label>
            <a href={`tel:${booking.phone}`}>{booking.phone}</a>
          </div>
        </div>

        <div className="detail-message">
          <label>Message</label>
          <p>{booking.message}</p>
        </div>

        <div className="detail-status-select">
          <label>Status:</label>
          <select value={booking.status} onChange={(e) => handleStatusChange(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="declined">Declined</option>
            <option value="on-calendar">On Calendar</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="detail-actions">
          {booking.status === "pending" && (
            <>
              <button className="btn-action btn-approve" onClick={() => handleStatusChange("approved")}>
                {Icons.check} Approve
              </button>
              <button className="btn-action btn-decline" onClick={() => handleStatusChange("declined")}>
                {Icons.x} Decline
              </button>
            </>
          )}
          {booking.status === "approved" && (
            <button className="btn-action btn-calendar" onClick={() => { onAddToCalendar(booking.id); addToast({ message: `Added to calendar — ${booking.name}, ${formatDate(booking.date)}`, type: "info" }); }}>
              {Icons.calendarPlus} Add to Calendar
            </button>
          )}
          {booking.status === "on-calendar" && (
            <span style={{ fontSize: 13, color: "var(--purple)", display: "flex", alignItems: "center", gap: 6 }}>
              {Icons.check} On your calendar
            </span>
          )}
          <a href={`mailto:${booking.email}`} className="btn-action" style={{ background: "var(--accent-dim)", color: "var(--accent)", textDecoration: "none" }}>
            {Icons.mail} Email Client
          </a>
          <a href={`tel:${booking.phone}`} className="btn-action" style={{ background: "rgba(255,255,255,0.06)", color: "var(--text-secondary)", textDecoration: "none" }}>
            {Icons.phone} Call
          </a>
          {booking.status !== "archived" && (
            <button className="btn-action btn-archive" onClick={() => handleStatusChange("archived")}>
              {Icons.archive} Archive
            </button>
          )}
          <button className="btn-action btn-delete" onClick={handleDelete}>
            {Icons.trash} Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function ContactsPage({ contacts, setPage, setSelectedContact, searchTerm, setSearchTerm, contactStatusFilter, setContactStatusFilter }) {
  const filtered = contacts.filter((c) => {
    const matchSearch = !searchTerm || c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.subject.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = contactStatusFilter === "all" || c.status === contactStatusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div>
      <div className="page-header">
        <h2>Contact Inbox</h2>
        <p>Messages from the website contact form</p>
      </div>

      <div className="search-bar">
        <span className="search-icon">{Icons.search}</span>
        <input placeholder="Search by name or subject..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      <div className="section-header">
        <div className="filters">
          {["all", "new", "replied", "archived"].map((s) => (
            <button key={s} className={`filter-chip ${contactStatusFilter === s ? "active" : ""}`} onClick={() => setContactStatusFilter(s)}>
              {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="card-list">
        {filtered.length === 0 ? (
          <div className="empty-state"><p>No messages match your filters.</p></div>
        ) : (
          filtered.map((c) => (
            <div key={c.id} className="list-card" onClick={() => { setSelectedContact(c.id); setPage("contact-detail"); }}>
              <div className="card-status-dot" style={{ background: statusColor(c.status) }} />
              <div className="card-body">
                <div className="card-top-row">
                  <span className="card-name">{c.name}</span>
                  <span className="card-date">{formatDate(c.submittedAt)}</span>
                </div>
                <div className="card-preview">{c.subject}</div>
                <div className="card-tags">
                  <span className={`tag tag-${c.category.toLowerCase()}`}>{c.category}</span>
                  <span className={`status-badge status-${c.status}`}>{c.status}</span>
                </div>
              </div>
              <span className="card-chevron">{Icons.chevronRight}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function ContactDetail({ contact, onBack, onUpdateStatus, onDelete, addToast }) {
  if (!contact) return null;

  const handleStatusChange = (newStatus) => {
    onUpdateStatus(contact.id, newStatus);
    addToast({ message: `Marked as ${newStatus} — ${contact.name}`, type: "success" });
  };

  const handleDelete = async () => {
    if (!window.confirm(`Permanently delete this message from ${contact.name}? This cannot be undone.`)) return;
    await onDelete(contact.id);
    onBack();
  };

  return (
    <div className="detail-view">
      <button className="detail-back" onClick={onBack}>{Icons.back} Back to Inbox</button>
      <div className="detail-card">
        <div className="detail-header">
          <div>
            <div className="detail-name">{contact.name}</div>
            <div className="detail-org">{contact.subject}</div>
          </div>
          <span className={`status-badge status-${contact.status}`}>{contact.status}</span>
        </div>

        <div className="detail-grid">
          <div className="detail-field">
            <label>Sector</label>
            <span className={`tag tag-${contact.category.toLowerCase()}`}>{contact.category}</span>
          </div>
          <div className="detail-field">
            <label>Received</label>
            <span>{formatDate(contact.submittedAt)}</span>
          </div>
          <div className="detail-field">
            <label>Email</label>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className="detail-field">
            <label>Phone</label>
            <a href={`tel:${contact.phone}`}>{contact.phone}</a>
          </div>
        </div>

        <div className="detail-message">
          <label>Message</label>
          <p>{contact.message}</p>
        </div>

        <div className="detail-status-select">
          <label>Status:</label>
          <select value={contact.status} onChange={(e) => handleStatusChange(e.target.value)}>
            <option value="new">New</option>
            <option value="replied">Replied</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="detail-actions">
          {contact.status === "new" && (
            <button className="btn-action btn-approve" onClick={() => handleStatusChange("replied")}>
              {Icons.check} Mark as Replied
            </button>
          )}
          <a href={`mailto:${contact.email}`} className="btn-action" style={{ background: "var(--accent-dim)", color: "var(--accent)", textDecoration: "none" }}>
            {Icons.mail} Email Client
          </a>
          <a href={`tel:${contact.phone}`} className="btn-action" style={{ background: "rgba(255,255,255,0.06)", color: "var(--text-secondary)", textDecoration: "none" }}>
            {Icons.phone} Call
          </a>
          {contact.status !== "archived" && (
            <button className="btn-action btn-archive" onClick={() => handleStatusChange("archived")}>
              {Icons.archive} Archive
            </button>
          )}
          <button className="btn-action btn-delete" onClick={handleDelete}>
            {Icons.trash} Delete
          </button>
        </div>
      </div>
    </div>
  );
}

function CalendarPage({ bookings, setPage, setSelectedBooking }) {
  const [monthOffset, setMonthOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);

  const todayObj = new Date();
  todayObj.setHours(0, 0, 0, 0);
  const todayStr = todayObj.toISOString().split("T")[0];

  const viewDate = new Date(todayObj.getFullYear(), todayObj.getMonth() + monthOffset, 1);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const monthName = viewDate.toLocaleString("en-US", { month: "long", year: "numeric" });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();

  const cells = [];
  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, otherMonth: true, dateStr: null });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    cells.push({ day: d, otherMonth: false, dateStr });
  }
  while (cells.length < 42) {
    cells.push({ day: cells.length - firstDay - daysInMonth + 1, otherMonth: true, dateStr: null });
  }

  const calBookings = bookings.filter((b) => b.status === "approved" || b.status === "on-calendar");

  const eventsForDate = (dateStr) =>
    calBookings
      .filter((b) => b.date === dateStr)
      .sort((a, b) => (a.time || "").localeCompare(b.time || ""));

  const upcoming = calBookings
    .filter((b) => b.date >= todayStr)
    .sort((a, b) => a.date.localeCompare(b.date) || (a.time || "").localeCompare(b.time || ""));

  const selectedEvents = selectedDate ? eventsForDate(selectedDate) : null;

  const handleDayClick = (cell) => {
    if (cell.otherMonth) return;
    setSelectedDate((prev) => (prev === cell.dateStr ? null : cell.dateStr));
  };

  const handleMonthChange = (delta) => {
    setMonthOffset((m) => m + delta);
    setSelectedDate(null);
  };

  return (
    <div>
      <div className="page-header">
        <h2>Calendar</h2>
        <p>Your approved consultations and scheduled appointments</p>
      </div>

      <div className={`cal-layout${selectedDate ? " day-selected" : ""}`}>
        {/* ── Left: calendar grid ── */}
        <div className="cal-left">
          <div className="cal-nav">
            <span className="cal-month">{monthName}</span>
            <div className="cal-nav-btns">
              <button className="cal-nav-btn cal-nav-icon" onClick={() => handleMonthChange(-1)} title="Previous month">{Icons.back}</button>
              <button className="cal-nav-btn" onClick={() => { setMonthOffset(0); setSelectedDate(null); }}>Today</button>
              <button className="cal-nav-btn cal-nav-icon" onClick={() => handleMonthChange(1)} title="Next month">{Icons.chevronRight}</button>
            </div>
          </div>

          <div className="cal-grid">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
              <div key={d} className="cal-header-cell">{d}</div>
            ))}
            {cells.map((cell, i) => {
              const events = cell.dateStr ? eventsForDate(cell.dateStr) : [];
              const isToday = cell.dateStr === todayStr;
              const isSelected = cell.dateStr && cell.dateStr === selectedDate;
              return (
                <div
                  key={i}
                  className={`cal-cell${cell.otherMonth ? " other-month" : ""}${isToday ? " today" : ""}${isSelected ? " selected" : ""}`}
                  onClick={() => handleDayClick(cell)}
                >
                  <div className="cal-day-num">{cell.day}</div>
                  {!cell.otherMonth && events.slice(0, 2).map((ev) => (
                    <div
                      key={ev.id}
                      className={`cal-event${ev.status === "on-calendar" ? " on-cal" : ""}`}
                      onClick={(e) => { e.stopPropagation(); setSelectedBooking(ev.id); setPage("booking-detail"); }}
                      title={`${ev.name} — ${ev.service}`}
                    >
                      {ev.time ? formatTime(ev.time) + " " : ""}{ev.name.split(" ")[0]}
                    </div>
                  ))}
                  {!cell.otherMonth && events.length > 2 && (
                    <div className="cal-event-more">+{events.length - 2} more</div>
                  )}
                  {/* Mobile: colored dots only */}
                  {!cell.otherMonth && events.length > 0 && (
                    <div className="cal-dots">
                      {events.map((ev) => (
                        <div key={ev.id} className={`cal-dot ${ev.status === "on-calendar" ? "purple" : "green"}`} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="cal-legend">
            <div className="cal-legend-item"><div className="cal-legend-dot green" />Approved</div>
            <div className="cal-legend-item"><div className="cal-legend-dot purple" />On Calendar</div>
          </div>
        </div>

        {/* ── Right: detail / upcoming panel ── */}
        <div className="cal-right">
          <div className="cal-panel">
            {selectedDate && selectedEvents ? (
              <>
                <div className="cal-panel-header">
                  <div className="cal-panel-title">{formatDateLong(selectedDate)}</div>
                  <button className="cal-panel-close" onClick={() => setSelectedDate(null)} title="Close">{Icons.x}</button>
                </div>
                {selectedEvents.length === 0 ? (
                  <div className="cal-panel-empty">No bookings on this day.<br />Click any other day to view its events.</div>
                ) : selectedEvents.map((ev) => (
                  <div key={ev.id} className="cal-panel-event" onClick={() => { setSelectedBooking(ev.id); setPage("booking-detail"); }}>
                    <div className="cal-panel-event-time">{formatTime(ev.time) || "Time TBD"}</div>
                    <div className="cal-panel-event-name">{ev.name}</div>
                    <div className="cal-panel-event-service">{ev.service}</div>
                    <div className="cal-panel-event-org">{ev.org}</div>
                    <span className={`status-badge status-${ev.status}`} style={{ marginTop: 8, display: "inline-block" }}>
                      {ev.status === "on-calendar" ? "On Calendar" : "Approved"}
                    </span>
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className="cal-panel-title" style={{ marginBottom: 16 }}>Upcoming</div>
                {upcoming.length === 0 ? (
                  <div className="cal-panel-empty">No upcoming consultations.<br />Approve bookings to see them here.</div>
                ) : upcoming.slice(0, 12).map((b) => {
                  const monthAbbr = new Date(b.date + "T00:00:00").toLocaleString("en-US", { month: "short" });
                  const dayNum = Number(b.date.split("-")[2]);
                  return (
                    <div key={b.id} className="cal-upcoming-item" onClick={() => { setSelectedBooking(b.id); setPage("booking-detail"); }}>
                      <div className="cal-upcoming-badge">
                        <div className="cal-upcoming-badge-month">{monthAbbr}</div>
                        <div className="cal-upcoming-badge-day">{dayNum}</div>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div className="cal-upcoming-name">{b.name}</div>
                        <div className="cal-upcoming-meta">{formatTime(b.time) || b.time} · {b.service}</div>
                        <span className={`status-badge status-${b.status}`} style={{ marginTop: 4, display: "inline-block" }}>
                          {b.status === "on-calendar" ? "On Calendar" : "Approved"}
                        </span>
                      </div>
                      <span style={{ color: "var(--text-muted)", flexShrink: 0 }}>{Icons.chevronRight}</span>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>

        {/* Mobile: upcoming list — shown by default, hidden when a day is selected */}
        <div className="cal-mobile-upcoming">
          <div className="section-title" style={{ marginBottom: 12 }}>Upcoming Consultations</div>
          {upcoming.length === 0 ? (
            <div className="cal-panel-empty" style={{ textAlign: "center", padding: "24px 0" }}>No upcoming approved consultations.</div>
          ) : (
            <div className="card-list">
              {upcoming.map((b) => (
                <div key={b.id} className="list-card" onClick={() => { setSelectedBooking(b.id); setPage("booking-detail"); }}>
                  <div className="card-status-dot" style={{ background: b.status === "on-calendar" ? "var(--purple)" : "var(--green)" }} />
                  <div className="card-body">
                    <div className="card-top-row">
                      <span className="card-name">{b.name}</span>
                      <span className="card-date">{formatTime(b.time) || b.time}</span>
                    </div>
                    <div className="card-preview">{b.service} — {formatDate(b.date)}</div>
                    <div className="card-tags">
                      <span className={`status-badge status-${b.status}`}>{b.status === "on-calendar" ? "On Calendar" : "Approved"}</span>
                    </div>
                  </div>
                  <span className="card-chevron">{Icons.chevronRight}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Availability Page ───
function previewSlots(fromTime, toTime, duration) {
  if (!fromTime || !toTime || !duration) return [];
  const [fh, fm] = fromTime.split(":").map(Number);
  const [th, tm] = toTime.split(":").map(Number);
  const from = fh * 60 + fm;
  const to = th * 60 + tm;
  if (to <= from) return [];
  const slots = [];
  for (let m = from; m + duration <= to; m += duration) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    slots.push(`${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`);
  }
  return slots;
}

function AvailabilityPage({ slots, setSlots, addToast, setPage, setSelectedBooking }) {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({ date: "", fromTime: "09:00", toTime: "17:00", durationMinutes: 60, label: "" });
  const [saving, setSaving] = useState(false);

  const preview = previewSlots(form.fromTime, form.toTime, Number(form.durationMinutes));
  const canSubmit = form.date && preview.length > 0;

  const handleOpen = async () => {
    if (!canSubmit) { addToast({ message: "Please fill in the date and a valid time range.", type: "error" }); return; }
    setSaving(true);
    try {
      const result = await api.createSlotRange({ date: form.date, fromTime: form.fromTime, toTime: form.toTime, durationMinutes: Number(form.durationMinutes), label: form.label });
      const fresh = await api.getAvailability();
      setSlots(fresh);
      const skipped = result.total - result.count;
      const msg = skipped > 0
        ? `${result.count} slots opened for ${formatDateLong(form.date)} (${skipped} already existed)`
        : `${result.count} slots opened for ${formatDateLong(form.date)}`;
      addToast({ message: msg });
      setForm((f) => ({ ...f, date: "" }));
    } catch {
      addToast({ message: "Could not open those slots. Please try again.", type: "error" });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.deleteSlot(id);
      setSlots((prev) => prev.filter((s) => s.id !== id));
      addToast({ message: "Slot removed" });
    } catch (err) {
      const msg = err?.message || "";
      if (msg.includes("409") || msg.toLowerCase().includes("booked")) {
        addToast({ message: "This slot has already been booked and cannot be removed.", type: "error" });
      } else {
        addToast({ message: "Could not remove that slot. Please try again.", type: "error" });
      }
    }
  };

  const grouped = slots.reduce((acc, s) => { (acc[s.date] = acc[s.date] || []).push(s); return acc; }, {});
  const sortedDates = Object.keys(grouped).sort();

  return (
    <div>
      <div className="page-header">
        <h2>Availability</h2>
        <p>Control when clients can book a session with you.</p>
      </div>

      <div className="avail-intro">
        <strong>How this works:</strong> Pick a day and the hours you're free. We'll automatically create one bookable time slot for every session in that window. Those open slots will appear on your website for clients to choose from — when someone books one, it shows up here as a new booking.
      </div>

      <div className="avail-form-card">
        <h3>Open Up a Day</h3>
        <p className="avail-section-hint">Tell us the date and the hours you're available. We'll take care of splitting it into individual appointment slots.</p>

        <div className="avail-form-row">
          {/* Row 1: Date */}
          <div className="form-group">
            <label>What day are you available?</label>
            <input type="date" min={today} value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} />
          </div>

          {/* Row 2: Time range */}
          <div className="avail-form-inline">
            <div className="form-group">
              <label>Available from</label>
              <input type="time" value={form.fromTime} onChange={(e) => setForm((f) => ({ ...f, fromTime: e.target.value }))} />
              <div className="avail-field-hint">The earliest you can start a session</div>
            </div>
            <div className="form-group">
              <label>Available until</label>
              <input type="time" value={form.toTime} onChange={(e) => setForm((f) => ({ ...f, toTime: e.target.value }))} />
              <div className="avail-field-hint">The latest a session should end</div>
            </div>
          </div>

          {/* Row 3: Duration + Label */}
          <div className="avail-form-inline">
            <div className="form-group">
              <label>How long is each session?</label>
              <select value={form.durationMinutes} onChange={(e) => setForm((f) => ({ ...f, durationMinutes: Number(e.target.value) }))}>
                <option value={30}>30 minutes</option>
                <option value={60}>60 minutes (1 hour)</option>
                <option value={90}>90 minutes (1.5 hours)</option>
              </select>
            </div>
            <div className="form-group">
              <label>Add a note (optional)</label>
              <input type="text" placeholder="e.g. Leadership coaching only" maxLength={100} value={form.label} onChange={(e) => setForm((f) => ({ ...f, label: e.target.value }))} />
            </div>
          </div>

          {/* Preview */}
          {form.fromTime && form.toTime && preview.length > 0 && (
            <div className="avail-preview">
              <strong>{preview.length} session{preview.length !== 1 ? "s" : ""} will open:</strong>{" "}
              {preview.map(formatTime).join("  ·  ")}
            </div>
          )}
          {form.fromTime && form.toTime && preview.length === 0 && (
            <div className="avail-preview" style={{ borderColor: "var(--red)", background: "var(--red-dim)" }}>
              The time range is too short for even one session at {form.durationMinutes} minutes. Try a wider window or shorter session length.
            </div>
          )}

          <button className="btn-primary" onClick={handleOpen} disabled={saving || !canSubmit}>
            {saving ? "Opening slots…" : `Open ${preview.length > 0 ? preview.length + " slot" + (preview.length !== 1 ? "s" : "") : "Slots"}`}
          </button>
        </div>
      </div>

      {/* Slot list */}
      {sortedDates.length === 0 ? (
        <div className="avail-empty">
          <div className="avail-empty-icon">{Icons.calendar}</div>
          <strong>No open slots yet</strong>
          <p>Use the form above to pick a day and open your available hours.<br />Your clients will see those times on the website and can book directly.</p>
        </div>
      ) : (
        sortedDates.map((date) => (
          <div key={date} className="avail-date-group">
            <div className="avail-date-header">{formatDateLong(date)}</div>
            {grouped[date].map((slot) => (
              <div key={slot.id} className="avail-slot-row">
                <span className="avail-slot-time">{formatTime(slot.startTime)}</span>
                <span className="avail-slot-duration">{slot.durationMinutes} min</span>
                <span className="avail-slot-label">{slot.label || ""}</span>
                {slot.isBooked ? (
                  <>
                    <span className="status-badge status-approved" style={{ flexShrink: 0 }}>Booked</span>
                    {slot.bookedBy && (
                      <span className="avail-slot-booked-by" onClick={() => { setSelectedBooking(slot.bookingId); setPage("booking-detail"); }}>
                        {slot.bookedBy} →
                      </span>
                    )}
                  </>
                ) : (
                  <>
                    <span className="status-badge status-new" style={{ flexShrink: 0 }}>Open</span>
                    <span style={{ flex: 1 }} />
                    <button className="btn-slot-delete" onClick={() => handleDelete(slot.id)} title="Remove this slot">
                      {Icons.trash}
                    </button>
                  </>
                )}
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}

// ─── Settings Page ───
const THEMES = [
  {
    id: 'auto',
    label: 'Auto',
    swatch: { header: '#141820', sidebar: '#141820', content: '#0C0F14', card: '#1A1F2B', accent: '#C8A84E' },
  },
  {
    id: 'dark',
    label: 'Dark',
    swatch: { header: '#141820', sidebar: '#141820', content: '#0C0F14', card: '#1A1F2B', accent: '#C8A84E' },
  },
  {
    id: 'light',
    label: 'Light',
    swatch: { header: '#FFFFFF', sidebar: '#FFFFFF', content: '#F0F2F7', card: '#FFFFFF', accent: '#A8862A' },
  },
  {
    id: 'alpha-psi-phi',
    label: 'Alpha Ψ Φ',
    swatch: { header: '#180B33', sidebar: '#180B33', content: '#0F0720', card: '#1F1040', accent: '#D4AF37' },
  },
];

function SettingsPage({ addToast }) {
  const [theme, setTheme] = useTheme();
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [pwSaving, setPwSaving] = useState(false);

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    if (!currentPw) { addToast({ message: 'Current password is required', type: 'error' }); return; }
    if (newPw.length < 8) { addToast({ message: 'New password must be at least 8 characters', type: 'error' }); return; }
    if (newPw !== confirmPw) { addToast({ message: "New passwords don't match", type: 'error' }); return; }
    setPwSaving(true);
    try {
      await api.changePassword(currentPw, newPw);
      addToast({ message: 'Password updated successfully' });
      setCurrentPw(''); setNewPw(''); setConfirmPw('');
    } catch (err) {
      const msg = (err?.message || '').includes('401') || (err?.message || '').toLowerCase().includes('incorrect')
        ? 'Current password is incorrect'
        : 'Failed to update password. Please try again.';
      addToast({ message: msg, type: 'error' });
    } finally {
      setPwSaving(false);
    }
  };

  return (
    <div>
      <div className="page-header">
        <h2>Settings</h2>
        <p>Manage your account and appearance preferences</p>
      </div>

      {/* ── Appearance ── */}
      <div className="settings-section">
        <h3>Appearance</h3>
        <p className="settings-desc">Choose how the dashboard looks. <strong>Auto</strong> follows your device's light or dark mode setting automatically.</p>
        <div className="theme-grid">
          {THEMES.map((t) => (
            <div key={t.id} className={`theme-option${theme === t.id ? ' active' : ''}`} onClick={() => setTheme(t.id)}>
              <div className="theme-swatch">
                <div className="theme-swatch-header" style={{ background: t.swatch.header, borderBottom: `2px solid ${t.swatch.accent}` }}>
                  <div className="theme-swatch-dot" style={{ background: t.swatch.accent }} />
                  <div className="theme-swatch-dot" style={{ background: t.swatch.accent }} />
                </div>
                <div className="theme-swatch-body" style={{ background: t.swatch.content }}>
                  <div className="theme-swatch-sidebar" style={{ background: t.swatch.sidebar }} />
                  <div className="theme-swatch-content">
                    <div className="theme-swatch-card" style={{ background: t.swatch.card }} />
                    <div className="theme-swatch-card" style={{ background: t.swatch.card }} />
                  </div>
                </div>
              </div>
              <span className="theme-label">{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Change Password ── */}
      <div className="settings-section">
        <h3>Change Password</h3>
        <p className="settings-desc">Update your admin login password. Once changed, use the new password to log in. Must be at least 8 characters.</p>
        <form className="settings-form" onSubmit={handlePasswordChange}>
          <div className="form-group">
            <label className="form-label">Current Password</label>
            <input type="password" className="form-input" value={currentPw} onChange={(e) => setCurrentPw(e.target.value)} autoComplete="current-password" placeholder="Enter your current password" />
          </div>
          <div className="form-group">
            <label className="form-label">New Password</label>
            <input type="password" className="form-input" value={newPw} onChange={(e) => setNewPw(e.target.value)} autoComplete="new-password" placeholder="At least 8 characters" />
          </div>
          <div className="form-group">
            <label className="form-label">Confirm New Password</label>
            <input type="password" className="form-input" value={confirmPw} onChange={(e) => setConfirmPw(e.target.value)} autoComplete="new-password" placeholder="Repeat your new password" />
          </div>
          <button type="submit" className="btn-primary" disabled={pwSaving}>
            {pwSaving ? 'Saving...' : 'Update Password'}
          </button>
        </form>
      </div>

      {/* ── About ── */}
      <div className="settings-section">
        <h3>About</h3>
        <div className="settings-info-row">
          <span className="settings-info-label">Platform</span>
          <span className="settings-info-value">Armvet Admin Portal</span>
        </div>
        <div className="settings-info-row">
          <span className="settings-info-label">Version</span>
          <span className="settings-info-value">1.0.0</span>
        </div>
        <div className="settings-info-row">
          <span className="settings-info-label">Support</span>
          <a href="mailto:support@armvet.com" style={{ color: 'var(--accent)', fontSize: 14 }}>support@armvet.com</a>
        </div>
      </div>
    </div>
  );
}

// ─── Tutorial Overlay ───
const TUTORIAL_STEPS = [
  {
    iconKey: "home",
    title: "Welcome to Your Dashboard",
    body: "This is your home base. At a glance you can see new booking requests, unread messages, and anything that needs your attention — all in one place.",
  },
  {
    iconKey: "bookings",
    title: "Managing Bookings",
    body: "When someone on your website requests a consultation, it shows up here under Bookings. You can review the details, approve or decline the request, and add approved sessions to your calendar.",
  },
  {
    iconKey: "inbox",
    title: "Your Inbox",
    body: "General messages and inquiries from the website land here. You can mark them as replied or archive them once you've followed up.",
  },
  {
    iconKey: "clock",
    title: "Setting Your Availability",
    body: "This is how clients book sessions with you. Go to the Availability page, pick a day and your available hours, and we'll create the open time slots automatically. Clients see those slots on the website and choose a time.",
  },
  {
    iconKey: "calendar",
    title: "Your Calendar",
    body: "Once you approve a booking and add it to your calendar, it shows up here. This gives you a clear view of your upcoming consultation schedule.",
  },
  {
    iconKey: "mobile",
    title: "Install as an App",
    body: "You can add this dashboard to your phone or tablet's home screen so it opens like a regular app — no browser address bar, full screen.\n\niPhone/iPad: Tap the Share button (the box with an arrow), then tap \"Add to Home Screen\".\n\nAndroid: Tap the three-dot menu in the top right, then tap \"Add to Home Screen\" or \"Install App\".",
  },
];

function TutorialOverlay({ onDone }) {
  const [step, setStep] = useState(0);
  const current = TUTORIAL_STEPS[step];
  const isLast = step === TUTORIAL_STEPS.length - 1;

  const handleNext = () => {
    if (isLast) {
      onDone();
    } else {
      setStep((s) => s + 1);
    }
  };

  const handleDontShow = async () => {
    try { await api.completeTutorial(); } catch {}
    onDone();
  };

  return (
    <div className="tutorial-overlay">
      <div className="tutorial-card">
        <div className="tutorial-icon">{Icons[current.iconKey]}</div>
        <div className="tutorial-step-num">Step {step + 1} of {TUTORIAL_STEPS.length}</div>
        <div className="tutorial-title">{current.title}</div>
        <div className="tutorial-body" style={{ whiteSpace: "pre-line" }}>{current.body}</div>
        <div className="tutorial-dots">
          {TUTORIAL_STEPS.map((_, i) => (
            <div key={i} className={`tutorial-dot${i === step ? " active" : ""}`} />
          ))}
        </div>
        <div className="tutorial-btn-row">
          <button className="tutorial-next" onClick={handleNext}>
            {isLast ? "Got it, close →" : "Next →"}
          </button>
          <button className="tutorial-no-show" onClick={handleDontShow}>Don't show this again</button>
        </div>
      </div>
    </div>
  );
}

// ─── Login Screen ───
function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!username || !password) { setError("Please enter username and password."); return; }
    setLoading(true);
    setError("");
    try {
      const data = await api.login(username, password);
      onLogin(data.tutorialComplete === false);
    } catch {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="login-logo">
          <h1>Armvet</h1>
          <p>Admin Portal</p>
        </div>
        <div className="login-card">
          <h2>Sign In</h2>
          <p className="subtitle">Access your consultation management dashboard</p>
          {error && <div className="login-error">{error}</div>}
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Enter username" value={username} onChange={(e) => { setUsername(e.target.value); setError(""); }} onKeyDown={(e) => e.key === "Enter" && handleSubmit()} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => { setPassword(e.target.value); setError(""); }} onKeyDown={(e) => e.key === "Enter" && handleSubmit()} />
          </div>
          <button className="btn-primary" onClick={handleSubmit} disabled={loading}>{loading ? "Signing in…" : "Sign In"}</button>
        </div>
      </div>
    </div>
  );
}

// ─── Main App ───
export default function ArmvetDashboard() {
  const [loggedIn, setLoggedIn] = useState(api.hasToken());
  const [showTutorial, setShowTutorial] = useState(false);
  const [page, setPage] = useState("dashboard");
  const [bookings, setBookings] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [slots, setSlots] = useState([]);
  const [selectedBookingId, setSelectedBooking] = useState(null);
  const [selectedContactId, setSelectedContact] = useState(null);
  const [toasts, setToasts] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [contactSearchTerm, setContactSearchTerm] = useState("");
  const [contactStatusFilter, setContactStatusFilter] = useState("all");

  // Load data from API when logged in
  useEffect(() => {
    if (!loggedIn) return;
    api.getBookings().then(setBookings).catch(() => {});
    api.getContacts().then(setContacts).catch(() => {});
    api.getAvailability().then(setSlots).catch(() => {});
  }, [loggedIn]);

  const addToast = ({ message, type = "success" }) => {
    const id = Date.now();
    setToasts((t) => [...t, { id, message, type }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3500);
  };

  const updateBookingStatus = async (id, status) => {
    try {
      await api.updateBookingStatus(id, status);
      setBookings((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
    } catch {
      addToast({ message: "Failed to update status", type: "error" });
    }
  };

  const addToCalendar = async (id) => {
    await updateBookingStatus(id, "on-calendar");
  };

  const updateContactStatus = async (id, status) => {
    try {
      await api.updateContactStatus(id, status);
      setContacts((prev) => prev.map((c) => (c.id === id ? { ...c, status } : c)));
    } catch {
      addToast({ message: "Failed to update status", type: "error" });
    }
  };

  const deleteBooking = async (id) => {
    try {
      await api.deleteBooking(id);
      setBookings((prev) => prev.filter((b) => b.id !== id));
      addToast({ message: "Booking deleted", type: "success" });
    } catch {
      addToast({ message: "Failed to delete booking", type: "error" });
    }
  };

  const deleteContact = async (id) => {
    try {
      await api.deleteContact(id);
      setContacts((prev) => prev.filter((c) => c.id !== id));
      addToast({ message: "Message deleted", type: "success" });
    } catch {
      addToast({ message: "Failed to delete message", type: "error" });
    }
  };

  const handleLogout = () => {
    api.logout();
    setLoggedIn(false);
    setShowTutorial(false);
    setBookings([]);
    setContacts([]);
    setSlots([]);
    setPage("dashboard");
  };

  const selectedBooking = bookings.find((b) => b.id === selectedBookingId);
  const selectedContact = contacts.find((c) => c.id === selectedContactId);

  if (!loggedIn) {
    return (
      <>
        <style>{CSS}</style>
        <LoginScreen onLogin={(showTut) => { setLoggedIn(true); setShowTutorial(!!showTut); }} />
      </>
    );
  }


  let content;
  if (page === "dashboard") {
    content = <DashboardPage bookings={bookings} contacts={contacts} setPage={setPage} setSelectedBooking={setSelectedBooking} setSelectedContact={setSelectedContact} />;
  } else if (page === "bookings") {
    content = <BookingsPage bookings={bookings} setPage={setPage} setSelectedBooking={setSelectedBooking} searchTerm={searchTerm} setSearchTerm={setSearchTerm} statusFilter={statusFilter} setStatusFilter={setStatusFilter} categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter} />;
  } else if (page === "booking-detail") {
    content = <BookingDetail booking={selectedBooking} onBack={() => setPage("bookings")} onUpdateStatus={updateBookingStatus} onAddToCalendar={addToCalendar} onDelete={deleteBooking} addToast={addToast} />;
  } else if (page === "contacts") {
    content = <ContactsPage contacts={contacts} setPage={setPage} setSelectedContact={setSelectedContact} searchTerm={contactSearchTerm} setSearchTerm={setContactSearchTerm} contactStatusFilter={contactStatusFilter} setContactStatusFilter={setContactStatusFilter} />;
  } else if (page === "contact-detail") {
    content = <ContactDetail contact={selectedContact} onBack={() => setPage("contacts")} onUpdateStatus={updateContactStatus} onDelete={deleteContact} addToast={addToast} />;
  } else if (page === "availability") {
    content = <AvailabilityPage slots={slots} setSlots={setSlots} addToast={addToast} setPage={setPage} setSelectedBooking={setSelectedBooking} />;
  } else if (page === "calendar") {
    content = <CalendarPage bookings={bookings} setPage={setPage} setSelectedBooking={setSelectedBooking} />;
  } else if (page === "settings") {
    content = <SettingsPage addToast={addToast} />;
  }

  return (
    <>
      <style>{CSS}</style>
      <div className="app-layout">
        <div className="mobile-header">
          <h1>Armvet</h1>
          <button className="mobile-menu-btn" onClick={() => setSidebarOpen(true)}>{Icons.menu}</button>
        </div>
        <Sidebar page={page} setPage={setPage} bookings={bookings} contacts={contacts} isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onLogout={handleLogout} onShowTutorial={() => setShowTutorial(true)} />
        <main className="main-content">
          {content}
        </main>
        <Toast toasts={toasts} />
        {showTutorial && <TutorialOverlay onDone={() => setShowTutorial(false)} />}
      </div>
    </>
  );
}
