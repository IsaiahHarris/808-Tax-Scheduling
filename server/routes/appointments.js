const express = require('express');
const router = express.Router();
const Appointment = require('../db/models/Appointment');
router.route('/').get((req, res) => {
  return Appointment.fetchAll().then(appointment => {
    return res.json(appointment);
  });
});

module.exports = router;
