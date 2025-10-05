export default ({ env }) => ({
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
