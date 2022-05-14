const express = require('express');
const controller = require('../contollers/controller');
// const { body } = require('express-validator');
const router = new express.Router();

router.get('/alerts', controller.getAlerts);
router.get('/save-old-rates', controller.saveOldRates);

// router.post('/watched-currency',
//     body('currencysymbol').not().isEmpty().escape(),
//     body('threshold').not().isEmpty().escape(),
//     controller.addCurrency
// );

module.exports = router;