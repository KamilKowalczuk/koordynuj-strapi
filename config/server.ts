// ścieżka: config/server.ts

export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // Upewniamy się, że domyślnie nasłuchuje na wszystkich interfejsach
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});