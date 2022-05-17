const Alert = require('../models/alert')
const Currency = require('../models/currency')
const fetch = require('node-fetch');

const getAlerts = async (req, res) => {
    const allAlerts = await Alert.findAll()
    res.status(200).send(allAlerts)
};

const createCurrency = async (req, res) => {
    let data = {
        symbol: req.body.symbol,
        threshold: req.body.threshold,
    }
    console.log(data)
    const currency = await Currency.create(data)
    res.status(200).send(currency)

};

const createAlert = (currentValue, symbol) => {
    const currentTime = Date.now();
    Alert.create({
        currencySymbol: symbol,
        valueToDate: currentValue,
        timestamp: currentTime
    })
};

const monitor = async () => {
    // const https = require('https');
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {apikey: " Uru952RpC9Vs6ky67yZqUEwWZhHLrnN3"}
    };
    fetch("https://api.apilayer.com/fixer/latest?base=EUR", requestOptions)
        .then(response => response.text())
        .then(async (result) => {
            const data = JSON.parse(result);
            const ratesJson = data.rates;

            const allCurrencies = await Currency.findAll();
            allCurrencies.forEach(currency => {
                    if (ratesJson[(currency.dataValues.symbol)] > currency.threshold) {
                        createAlert(ratesJson[(currency.dataValues.symbol)], currency.dataValues.symbol)
                    }
                }
            )
        })
        .catch(error => console.log('error', error));
}

module.exports = {
    getAlerts,
    monitor,
    createCurrency
}