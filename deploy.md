# 1. Create Cloudflare resources
wrangler d1 create armvet-db
wrangler r2 bucket create armvet-media
wrangler kv namespace create armvet-kv
# → Paste IDs into workers/wrangler.toml

# 2. Run migrations + seed
cd workers && npm install
npm run db:migrate && npm run db:seed

# 3. Set secrets
wrangler secret put ADMIN_USERNAME
wrangler secret put ADMIN_PASSWORD

# 4. Deploy Worker
npm run deploy

# 5. Render dashboard: set VITE_API_URL = <https://armvet-api>.<account>.workers.dev
