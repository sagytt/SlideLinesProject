const Currency = require('./models/currency')
const fetch = require('node-fetch');

const cData = async () => {
    const date = '2022-05-16'
    try {
        // await db.sync()
        // Insert Data
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {apikey: " Uru952RpC9Vs6ky67yZqUEwWZhHLrnN3"}
        };
        fetch(`https://api.apilayer.com/fixer/timeseries?start_date=${date}&end_date=${date}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result);
                const ratesJson = data.rates[date];

                Object.keys(ratesJson).forEach(function  (key) {
                    Currency.create({
                        symbol: key,
                        threshold: ratesJson[key]
                    })
                });
            })
            .catch(error => console.log('error', error));
    } catch (e) {
        console.error(e)
    }
}

cData();


