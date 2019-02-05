const express = require('express');
const router = express.Router();
const Date = require('../db/models/Date');

router.get('/', (req, res) => {
  return Date.fetchAll()
    .then(dates => {
      console.log(dates);
      res.json(dates);
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.get('/:date', (req, res) => {
  const date = req.params.date;
  return Date.where({ date: date })
    .fetch({ withRelated: ['appointments'] })
    .then(date => {
      res.json(date);
    })
    .catch(err => {
      console.log(err.message);
    });
});
module.exports = router;
