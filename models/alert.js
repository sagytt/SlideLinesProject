const { Sequelize } = require('sequelize');
const db = require('../database/db')
const DataTypes = Sequelize.DataTypes

const Alert = db.define('alert', {
    timestamp: {
        type: DataTypes.DATE,
        allowNull: false
    },
    currencySymbol: {
        type: DataTypes.STRING(40),
        allowNull: false
    },
    valueToDate:{
        type:  DataTypes.INTEGER(2),
        allowNull: false,
        default: 0
    }
})

db.sync({alter:true})
    .then(() => console.log('Database synchronised'))
    .catch(console.error)

module.exports = Alert;



