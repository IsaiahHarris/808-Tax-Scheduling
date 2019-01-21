const express = require('express');
const router = express.Router();

router.route('/').get((req, res) => {
  console.log('appointments got');
});

module.exports = router;
