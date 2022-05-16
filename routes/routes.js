const express = require('express');
const controller = require('../contollers/controller');
// const { body } = require('express-validator');
const router = express.Router();

router.get('/alerts', controller.getAlerts);
router.get('/save-old-rates', controller.saveOldRates);

router.post('/watched-currency',controller.createWatchedCurrency);

module.exports = router;