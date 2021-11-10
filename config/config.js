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
    username: "uajkkboauvzorj",
    password: "c85f6e07fe87df0c122ff23b2c789d30f1b6358c672514bd5090cc9c1a0d83c7",
    database: "dfoddo1uoqr4rh",
    host: "ec2-54-73-110-26.eu-west-1.compute.amazonaws.com",
    port: "5432",
    dialect: "postgresql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
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