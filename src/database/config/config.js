require("dotenv").config()

const DATABASE_HOST     = process.env.DATABASE_HOST;
const DATABASE_NAME     = process.env.DATABASE_NAME;
const USER              = process.env.USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
const DATABASE_PORT     = process.env.DATABASE_PORT;

module.exports = {
  "development": {
    "username": "franAdmin",
    "password": "Adrian12234..",
    "database": "megatronix_db",
    "host": "45.79.201.214",
    "dialect": "mysql",
    "port": "3306"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": USER,
    "password": DATABASE_PASSWORD,
    "database": DATABASE_NAME,
    "host": DATABASE_HOST,
    "dialect": "mysql"
  }
}
