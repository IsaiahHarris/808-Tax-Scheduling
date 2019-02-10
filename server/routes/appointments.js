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
      .fetch({ withRelated: ['date'] })
      .then(appointment => {
        return res.json(appointment);
      })
      .catch(err => {
        return res.json({ error: err.message });
      });
  })
  .put((req, res) => {
    const appId = req.params.id;
    return new Appointment(req.body)
      .save()
      .then(response => {
        return response.refresh();
      })
      .then(appointment => {
        return res.json(appointment);
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

router.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  return new Appointment({ id })
    .save(
      {
        name: req.body.name,
        phone_number: req.body.number,
        note: req.body.note,
        subject: req.body.subject
      },
      { patch: true }
    )
    .then(response => {
      return response.refresh();
    })
    .then(() => {
      return Appointment.where({ id })
        .fetch()
        .then(appointment => {
          return res.json(appointment);
        });
    })
    .catch(err => {
      console.log('error : ', err);
    });
});
module.exports = router;
