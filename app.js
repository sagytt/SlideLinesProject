const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser')
require('dotenv').config();

const app = express();

const routes = require('./routes/routes');
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(routes);

app.listen(PORT, () => {
    console.log('Server running!');

});


module.exports = app;
