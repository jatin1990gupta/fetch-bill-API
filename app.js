const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const indexRoutes = require('./routes/index');

mongoose.connect('mongodb+srv://jatin:helloworld@cluster0.z3atx.mongodb.net/nagar?retryWrites=true&w=majority')
  .then(result => {
    console.log('Connected!');
  })
  .catch(err => {
    console.log(err);
  });

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', indexRoutes);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
})