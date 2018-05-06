var express = require('express');
var app = express();
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');

Genre = require('./models/genres');

//Connect to mongoose

mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
var db = mongoose.connection;

app.get('/',function(req, res){
  res.send('Hello World!!!');
});

app.get('/api/genres',function(req, res){

  Genre.getGenres(function(err,genres){

    if (err) {
      throw err;
    }
    res.json(genres);
  });
  // res.send('Hello World!!!');
});

app.listen(3000);
console.log('Running');
