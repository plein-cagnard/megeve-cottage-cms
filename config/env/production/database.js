module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'tqnc1114_megeve-cottage'),
      user: env('DATABASE_USERNAME', 'tqnc1114_react-live'),
      password: env('DATABASE_PASSWORD', 'iAjneWF6LqH3AZBaTcBRtSN9vmSaEi6NSgsXxfynfBBAAV5zMY'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
