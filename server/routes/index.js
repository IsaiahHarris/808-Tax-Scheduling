const express = require('express');
const router = express.Router();
const appointments = require('./appointments');
const dates = require('./dates');

router.use('/appointments', appointments);
router.use('/dates', dates);
module.exports = router;
