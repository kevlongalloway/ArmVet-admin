-- ─────────────────────────────────────────────────────────────────────────────
-- ArmVet Admin – Open CORS to all origins (temporary bootstrap fix)
--
-- The initial seed (0002) only whitelisted localhost. This migration opens
-- allowed_origins to * so the deployed Render frontend can reach the Worker.
-- After you log in to the admin dashboard, lock it down via
--   Settings → Config → Allowed Origins
-- to your exact Render URL (e.g. ["https://your-app.onrender.com"])
-- ─────────────────────────────────────────────────────────────────────────────

UPDATE app_config SET value = '["*"]' WHERE key = 'allowed_origins';
