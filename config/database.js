module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '109.234.164.174'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'tqnc1114_react-local'),
      user: env('DATABASE_USERNAME', 'tqnc1114_local'),
      password: env('DATABASE_PASSWORD', 'rS332Jer'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
