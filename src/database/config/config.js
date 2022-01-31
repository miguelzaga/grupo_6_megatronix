require("dotenv").config()
const env = process.env

module.exports = {
  "development": {
    "username": "env.USER",
    "password": "env,DATABASE_PASSWORD",
    "database": "env.DATABASE_NAME",
    "host": "env.DATABASE_HOST",
    "dialect": "mysql",
    "port": "env.DATABASE_PORT"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "env.USER",
    "password": "env,DATABASE_PASSWORD",
    "database": "env.DATABASE_NAME",
    "host": "env.DATABASE_HOST",
    "dialect": "mysql"
  }
}
