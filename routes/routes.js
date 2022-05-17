const express = require('express');
const controller = require('../contollers/controller');
// const { body } = require('express-validator');
const router = express.Router();

router.get('/alerts', controller.getAlerts);
router.post('/watched-currency', controller.monitor);

// router.post('/watched-currency',controller.createWatchedCurrency);

module.exports = router;