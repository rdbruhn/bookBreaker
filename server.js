var express = require('express');
var mongoose = require('mongoose');
// var Users = require('./userController.js');
var app = express();

var port = process.env.PORT || 8000;

//add database functionality later for storing users and reading plans
var URI = process.env.MONGOLAB_URI || "mongodb://localhost/bookBreakerDB";
mongoose.connect(URI);
//TODO: add express session

app.use(express.static(__dirname + '/client'));

app.get('/', function(req,res){
  res.render('index');
});

app.post('#/signin', function(req,res){
  Users.signIn(req, res, function(){
    res.render('#/app');
  });
});

app.post('#/signup', function(req,res){
  //if !user create
    // if user redirect signin
    //hash password
    //store user data
      //request session
});

app.get('/app', function(req,res){
  //get lists from database
});

app.post('/app', function(req,res){
  //store list in database
});

app.listen(port);
console.log("Server listening on port:" + port);
module.exports = app;
