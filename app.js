const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Middlewares
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());


// Routes
app.use('/', require('./routes/index'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));