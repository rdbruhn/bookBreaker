var express = require('express');

var app = express();

var port = process.env.PORT || 8000;

//add database functionality later for storing users and reading plans

app.use(express.static(__dirname + '/client'));

app.get('/', function(req,res){
  res.render('index');
});

app.listen(port);
console.log("Server listening on port:" + port);
module.exports = app;
