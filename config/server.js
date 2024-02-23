module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', [
      'YfruBcnAyAIUIDgNYgVk4A==',
      'QDT4Gl9T9pDC5GWKBgUYGQ==',
      'ymCduXxkZqBW/9VGaj+j1A==',
      'mdt+G//aeF/cHXZDY+A3zA==',
    ]),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  // Use environment variable for jwtSecret
  'users-permissions': {
    jwtSecret: env('JWT_SECRET', 'joaxIBD5qKwDEWTwuqLX/g=='),
  },
  // Additional configurations
  apiTokenSalt: env('API_TOKEN_SALT', 'GK4vVOZSwYFQthH0g6MyNw=='),
  adminJwtSecret: env('ADMIN_JWT_SECRET', 'S+WZvw8pNGwwiqjKT1w2rA=='),
  transferTokenSalt: env('TRANSFER_TOKEN_SALT', 'tBwa27sR/tRJlakLFAVkWw=='),
  database: {
    client: env('DATABASE_CLIENT', 'sqlite'),
    filename: env('DATABASE_FILENAME', '.tmp/data.db'),
  },
});


