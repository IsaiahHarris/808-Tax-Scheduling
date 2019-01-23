const express = require('express');

const router = express.Router();
const appointments = require('./appointments');

router.use('/appointments', appointments);

module.exports = router;
