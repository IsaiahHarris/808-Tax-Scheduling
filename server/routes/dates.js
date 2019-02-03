const express = require('express');
const router = express.Router();
const Date = require('../db/models/Date');

router.get('/', (req, res) => {
  return Date.fetchAll({ withRelated: ['appointments'] })
    .then(date => {
      res.json(date);
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  return Date.where({ id: id })
    .fetch({ withRelated: ['appointments'] })
    .then(date => {
      res.json(date);
    })
    .catch(err => {
      console.log(err.message);
    });
});
module.exports = router;
