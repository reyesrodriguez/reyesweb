var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
  res.sendFile('./public/index.html');
});


var server = app.listen(3000, function(){
    console.log("Server is listening on port 3000");
})