const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { mySchema } = require('../model/schema');


mongoose.connect('mongodb://localhost/testApi', {useNewUrlParser: true}, () => {
  console.log('mongoDB connected');
});

router.get('/api', (req, res) => {
  res.json({message: "Hello"});
});

router.post('/api', (req, res) => {
  const result = new mySchema({
    message: req.body.message,
    title: req.body.title
  });
  result.save(() => {
    console.log('Saved');
    if(error) {
      console.log(err);
    }
  });
  
  res.json();
});


module.exports = router;
