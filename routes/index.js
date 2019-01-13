const express = require('express');
const router = express.Router();

// Home page route.
router.get('/api', function (req, res) {
  res.json({
      name: 'Gábor',
      age: '20'
  });
})

// About page route.
router.post('/api', function (req, res) {
  res.json();
})

module.exports = router;