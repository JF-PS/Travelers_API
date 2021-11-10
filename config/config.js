const env = require('../keys');

const creds = {
  development: {
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT
  },
  test: {
    username: "root",
    password: "root",
    database: "dbvoyageur",
    host: "127.0.0.1",
    port: "5432",
    dialect: "postgresql"
  },
  production: {
    username: env.DB_USER,
    password: env.DB_PASS,
    database: env.DB_NAME,
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_DIALECT
  }
};

module.exports = creds;
