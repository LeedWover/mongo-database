const express = require('express');
const router = express.Router();


router.get('/api', function (req, res) {
  res.json({
      name: 'Gábor',
      email: 'valami@ami.com',
      age: 20
  });
});

module.exports = router;