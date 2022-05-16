const { Sequelize } = require('sequelize');
const db = require('../database/db')
const Alert = db.define(
    'alert',
    {
        timestamps:true,
        currencySymbol:{
            type:Sequelize.STRING,
            allowNull: false
        },
        valueToDate:{
            type:Sequelize.FLOAT,
            allowNull: true
        }
    }
);
(async ()=> {
    await db.sync({force:true});
})();
module.exports=Alert;