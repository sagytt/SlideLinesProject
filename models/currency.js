const {Sequelize} = require('sequelize');
const db = require('../database/db')
const DataTypes = Sequelize.DataTypes

const Currency = db.define(
    'currency',
    {
        symbol: {
            type: DataTypes.STRING(40),
            primaryKey: true
        },
        threshold: {
            type: DataTypes.STRING(40),
            allowNull: false
        }
    }
);

db.sync({})
    .then(() => console.log('Database synchronised'))
    .catch(console.error)

module.exports = Currency;
