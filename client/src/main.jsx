import { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// Captured at module parse time (build-time constant baked in by Vite)
const BUILT_API_URL = import.meta.env.VITE_API_URL || '';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      const err = this.state.error;
      const msg = String(err);
      const isNetworkError =
        msg.includes('Load failed') ||
        msg.includes('Failed to fetch') ||
        msg.includes('NetworkError') ||
        msg.includes('Network request');

      const apiBase = (BUILT_API_URL || '(empty)') + '/api';
      const pageOrigin = window.location.origin;
      const debugUrl = BUILT_API_URL ? BUILT_API_URL + '/debug' : null;

      return (
        <div style={{ padding: 40, fontFamily: 'monospace', color: '#F87171', background: '#0C0F14', minHeight: '100vh' }}>
          <h2 style={{ color: '#C8A84E', marginBottom: 8 }}>App Error</h2>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: 14, marginBottom: 8 }}>{msg}</pre>
          {err?.stack && (
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: 11, color: '#6B7280', marginBottom: 20 }}>
              {err.stack}
            </pre>
          )}

          <div style={{ background: '#111418', border: '1px solid #374151', borderRadius: 8, padding: 20, marginBottom: 24, fontSize: 13, lineHeight: 1.8 }}>
            <div style={{ color: '#C8A84E', fontWeight: 700, marginBottom: 10 }}>Debug Info</div>
            <div><span style={{ color: '#9CA3AF' }}>VITE_API_URL (build-time):</span> <span style={{ color: '#F9FAFB' }}>{BUILT_API_URL || '(not set — requests go to relative /api)'}</span></div>
            <div><span style={{ color: '#9CA3AF' }}>API calls going to:</span> <span style={{ color: '#F9FAFB' }}>{apiBase}</span></div>
            <div><span style={{ color: '#9CA3AF' }}>Page origin:</span> <span style={{ color: '#F9FAFB' }}>{pageOrigin}</span></div>
            {debugUrl && (
              <div>
                <span style={{ color: '#9CA3AF' }}>Worker debug:</span>{' '}
                <a href={debugUrl} target="_blank" rel="noreferrer" style={{ color: '#60A5FA' }}>{debugUrl}</a>
              </div>
            )}
          </div>

          {isNetworkError && (
            <div style={{ background: '#1C1008', border: '1px solid #92400E', borderRadius: 8, padding: 16, marginBottom: 24, fontSize: 13, lineHeight: 1.8 }}>
              <div style={{ color: '#F59E0B', fontWeight: 700, marginBottom: 8 }}>Likely Cause: CORS or Wrong API URL</div>
              <div style={{ color: '#D1D5DB' }}>
                <strong>1. API URL not set:</strong> If VITE_API_URL is empty above, Vite builds the app pointing at relative <code>/api</code> paths — those don't exist on a static site. Set <code>VITE_API_URL=https://armvet-api.&lt;account&gt;.workers.dev</code> in your Render environment variables and <strong>redeploy</strong>.
              </div>
              <div style={{ color: '#D1D5DB', marginTop: 8 }}>
                <strong>2. CORS blocked:</strong> Your Render origin (<code>{pageOrigin}</code>) may not be in the Worker's <code>allowed_origins</code> list. Visit the debug URL above to check. If <code>allowedOrigins</code> shows only localhost URLs, run migration <code>0003_update_cors.sql</code> by pushing to the branch.
              </div>
              <div style={{ color: '#D1D5DB', marginTop: 8 }}>
                <strong>3. Worker not deployed:</strong> Check the GitHub Actions tab to confirm the deploy step completed without error.
              </div>
            </div>
          )}

          <button
            onClick={() => this.setState({ error: null })}
            style={{ marginRight: 12, background: 'transparent', color: '#9CA3AF', border: '1px solid #374151', padding: '8px 16px', borderRadius: 8, fontWeight: 600, cursor: 'pointer' }}
          >
            Dismiss
          </button>
          <button
            onClick={() => window.location.reload()}
            style={{ background: '#C8A84E', color: '#0C0F14', border: 'none', padding: '8px 20px', borderRadius: 8, fontWeight: 700, cursor: 'pointer' }}
          >
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
