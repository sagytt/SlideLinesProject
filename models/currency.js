const Currencies = require('../migrations/currency')

const createNewWatchedCurrency = async (payload)=> {
    const {symbol,threshold} = payload;
    return await Currencies.create({symbol,threshold});
}
module.exports = {createNewWatchedCurrency};