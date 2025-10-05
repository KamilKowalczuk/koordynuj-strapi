// config/server.ts
export default ({ env }) => {
  console.log('🚀 Server Config:');
  console.log('HOST:', env('HOST', '0.0.0.0'));
  console.log('PORT:', env.int('PORT', 1337));
  console.log('URL:', env('URL'));
  console.log('NODE_ENV:', env('NODE_ENV'));
  
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    url: env('URL'),
    proxy: true,
    app: {
      keys: env.array('APP_KEYS'),
    },
    webhooks: {
      populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
    },
  };
};