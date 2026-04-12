import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Local Wrangler dev server runs on 8787 by default.
// Override with VITE_DEV_API_URL env var if needed.
const devApiTarget = process.env.VITE_DEV_API_URL || 'http://localhost:8787';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: devApiTarget,
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});
