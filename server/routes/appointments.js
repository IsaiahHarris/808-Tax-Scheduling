const express = require('express');
const router = express.Router();
const Appointment = require('../db/models/Appointment');
router.route('/').get((req, res) => {
  return Appointment.fetchAll().then(appointment => {
    return res.json(appointment);
  });
});

router
  .route('/:id')
  .get((req, res) => {
    const appId = req.params.id;

    return new Appointment()
      .where({ id: appId })
      .fetch()
      .then(appointment => {
        return res.json(appointment);
      })
      .catch(err => {
        return res.json({ error: err.message });
      });
  })
  .put((req, res) => {
    const appId = req.params.id;
    const appInput = {
      name: req.body.name,
      phone_number: req.body.phone_number,
      subject: req.body.subject,
      note: req.body.note
    };

    return new Appointment()
      .where({ id: appId })
      .save(appInput, { path: true })
      .then(response => {
        return response.refresh();
      })
      .then(appointment => {
        return res.json(appointment);
      })
      .catch(err => {
        return res.json({ error: err.message });
      });
  })
  .delete((req, res) => {
    const appId = req.params.id;
    return new Appointment({ id: appId })
      .destroy()
      .then(() => {
        return new Appointment().where({ id: appId }).refresh();
      })
      .then(appointment => {
        return res.json(appointment);
      })
      .catch(err => {
        return res.json({ error: err.message });
      });
  });

module.exports = router;
