require("dotenv").config()

const DATABASE_HOST     = process.env.DATABASE_HOST       || '127.0.0.1';
const DATABASE_NAME     = process.env.DATABASE_NAME       || 'megatronix_db';
const USER              = process.env.USER                || 'root';
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD   || '1234';
const DATABASE_PORT     = process.env.DATABASE_PORT       || '3307';

module.exports = {
  "development": {
    "username": "root",
    "password": "1234",
    "database": "megatronix_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3307"
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
