// Plik: [twój-projekt-strapi]/config/database.ts

import path from 'path';

export default ({ env }) => {
  // === Konfiguracja dla środowiska produkcyjnego (gdy działa na Railway) ===
  if (env('NODE_ENV') === 'production') {
    return {
      connection: {
        client: 'postgres',
        connection: {
          // Strapi odczyta ten URL ze zmiennych środowiskowych, które ustawiliśmy na Railway
          connectionString: env('DATABASE_URL'),
          ssl: {
            // Ta opcja jest krytycznie ważna dla Railway, Render i podobnych platform
            rejectUnauthorized: false
          }
        },
        debug: false,
      },
    };
  }

  // === Konfiguracja dla środowiska lokalnego (gdy uruchamiasz `npm run develop`) ===
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