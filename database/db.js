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

(async ()=>{
  const connection = await createConnection({host,user,password});
  await connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`);
})();

const db = new Sequelize(database,user,password,{host,dialect});
module.exports = db;