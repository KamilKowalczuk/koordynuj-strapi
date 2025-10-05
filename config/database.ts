// config/database.ts
import path from 'path';

export default ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    const { parse } = require('pg-connection-string');
    const config = parse(env('DATABASE_URL'));

    return {
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: {
            rejectUnauthorized: false
          },
        },
        pool: {
          min: 2,
          max: 10
        },
        acquireConnectionTimeout: 60000,
        debug: false,
      },
    };
  }

  // Lokalne SQLite
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', '..', '.tmp/data.db'),
      },
      useNullAsDefault: true,
    },
  };
};