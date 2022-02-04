const DATABASE_HOST     = process.env.DBHOST         || '127.0.0.1';
const DATABASE_NAME     = process.env.DBNAME         || 'megatronix_db';
const USER              = process.env.DBUSER         || 'root';
const DATABASE_PASSWORD = process.env.DBPASS         || '1234';
const DATABASE_PORT     = process.env.PORT           || '3307';

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