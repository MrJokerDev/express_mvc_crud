const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const todoRouter = require('./routes/router');

const app = express();
app.use(express.static(__dirname + '/public/'));
// Set up view engine
app.set('view engine', 'ejs');

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

// Set up routes
app.use('/', todoRouter);

// Connect to database and start server
mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://root:Password@cluster0.wi5grss.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(8000, () => {
      console.log('Server started on port http://localhost:8000');
      console.log('Mongo DB success connected')
    });
  })
  .catch((err) => {
    console.error(err);
  });
