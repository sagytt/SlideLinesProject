const { Sequelize } = require('sequelize');
const  {createConnection } = require('mysql2/promise');
require('dotenv').config();

const {
  SQL_DIALECT: dialect,
  DB_HOST:host,
  DB_USER:user,
  DB_NAME:database,
    DB_PASSWORD:password
} = process.env;

const db = new Sequelize('slidedb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = db;