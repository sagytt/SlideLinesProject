const Alerts = require('../migrations/alerts');

const getAllAlerts = async ()=>{
    return await Alerts.findAll({});
}
const createNewAlert = async (payload)=>{
    const {currencySymbol,valueToDate} = payload;
    await Alerts.create({currencySymbol,valueToDate});
}
module.exports={getAllAlerts,createNewAlert}