module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['YfruBcnAyAIUIDgNYgVk4A==', 'QDT4Gl9T9pDC5GWKBgUYGQ==', 'ymCduXxkZqBW/9VGaj+j1A==', 'mdt+G//aeF/cHXZDY+A3zA==']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Use environment variable for jwtSecret
  'users-permissions': {
    jwtSecret: env('JWT_SECRET', 'joaxIBD5qKwDEWTwuqLX/g=='),
  },
});

