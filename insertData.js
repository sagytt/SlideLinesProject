const {db, currency} = require('./models/currency')

const fetch = require('node-fetch');
const https = require('https');

const cData = async () => {
    const date = '2022-05-12'
    try {
        // await db.sync({alter: true})
        // Insert Data
        let requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {apikey: " PKVvsuNbbk3wSX2td4YWQwG7yVNVsW3E"}
        };

        fetch(`https://api.apilayer.com/fixer/timeseries?start_date=${date}&end_date=${date}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result);
                console.log(data.rates[date])
                const sql = "INSERT INTO currencies (symbol, threshold) VALUES ?";
                db.query(sql, [data.rates[date]], function(err) {
                    if (err) throw err;
                    db.end();
                });

            })
            .catch(error => console.log('error', error));

        // for( let i = 0; i < 30; i++){
        //     await currency.create({
        //         // name: 'JHON',
        //         name: (['Tom','Dick','Harry','Ram','Nancy','Sally','Billy','Bob',]) [parseInt(Math.random() * 10)],
        //         age: 10 + parseInt(Math.random() * 10)
        //     })
        // }

    } catch (e) {
        console.error(e)
    }
}

cData();


