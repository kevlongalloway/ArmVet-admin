-- Reset allowed_origins to ["*"] (open to all origins).
-- The setup wizard saved an empty array [] which locked out all browser
-- requests. Empty origins defaults to wildcard so the admin can always login.
UPDATE app_config SET value = '["*"]' WHERE key = 'allowed_origins';
