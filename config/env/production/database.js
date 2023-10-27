module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: 'megeve-cottage-db',
      port: 3306,
      database: 'strapi',
      user: 'strapi',
      password: 'strapi',
      ssl: false,
    },
  },
});
