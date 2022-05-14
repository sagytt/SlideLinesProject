const { Sequelize } = require('sequelize');
const db = require('../database/db')
const Currency = db.define(
    'currency',
    {
        symbol: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        threshold: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
)
(async ()=> {
    await db.sync();
})();
module.exports =Currency;