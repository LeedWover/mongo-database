const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/testApi', {useNewUrlParser: true}, () => {
  console.log('mongoDB connected');
});

router.get('/api', (req, res) => {
  res.json({
    message: 'Hello'
  });
});

router.post('/api', (req, res) => {
  const message = req.body.message;
  const title = req.body.title;
  res.json({
    message: message,
    title: title
  });
});


module.exports = router;
