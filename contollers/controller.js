// const { validationResult } = require('express-validator');
let https = require('https');
const {getAllAlerts,createNewAlert} = require('../models/alert');
const {createNewWatchedCurrency} = require('../models/currency');
const getAlerts = async (req, res) => {
    return await getAllAlerts();
};

const createWatchedCurrency = async (req,res)=>{
    return await createNewWatchedCurrency(req.body);
}

const saveOldRates = () => {
    let myHeaders = new Headers();
    // myHeaders.append("apikey", "PKVvsuNbbk3wSX2td4YWQwG7yVNVsW3E");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: "apikey : PKVvsuNbbk3wSX2td4YWQwG7yVNVsW3E"
    };

    fetch("https://api.apilayer.com/fixer/timeseries?start_date=2022-05-12&end_date=2022-05-12", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    // https.get('https://api.apilayer.com/fixer/timeseries?start_date=2022-05-12&end_date=2022-05-12', (resp) => {
    //     let data = '';
    //     console.log(data)
    //     // A chunk of data has been received.
    //     resp.on('data', (chunk) => {
    //         data += chunk;
    //     });
    //
    //     // The whole response has been received. Print out the result.
    //     resp.on('end', () => {
    //         console.log(JSON.parse(data).explanation);
    //     });
    //
    // }).on("error", (err) => {
    //     console.log("Error: " + err.message);
    // });


    // const sqlQuery = 'INSERT INTO currency SET ?';
    //
    // database.query(sqlQuery, (err, result) => {
    //     if (err) throw err;
    //
    //     res.json({ 'alert': result });
    // });
};

// const addCurrency = (req, res) => {
//     const errors = validationResult(req);
//
//     if (errors.array().length > 0) {
//         res.send(errors.array());
//     } else {
//         const subscriber = {
//             firstname: req.body.firstname,
//             lastname: req.body.lastname,
//             email: req.body.email
//         };
//
//         const sqlQuery = 'INSERT INTO currency SET ?';
//
//         database.query(sqlQuery, subscriber, (err, row) => {
//             if (err) throw err;
//
//             res.send('Subscribed successfully!');
//         });
//     }
// };


const monitor = () =>{
    // const https = require('https');

    https.get('https://api.apilayer.com/fixer/latest?base=USD', (resp) => {
        let data = '';
        console.log()
        // A chunk of data has been received.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data).explanation);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

module.exports = {
    getAlerts,
    monitor,
    saveOldRates,
    createWatchedCurrency
}