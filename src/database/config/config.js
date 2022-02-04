const DBHOST = process.env.DBHOST         || '127.0.0.1';
const DBNAME = process.env.DBNAME         || 'megatronix_db';
const DBUSER = process.env.DBUSER         || 'root';
const DBPASS = process.env.DBPASS         || '1234';
const PORT   = process.env.PORT           || '3307';

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
    "username": DBUSER,
    "password": DBPASS,
    "database": DBNAME,
    "host": DBHOST,
    "dialect": "mysql"
  }
}