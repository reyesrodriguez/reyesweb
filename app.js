var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/index', function(req, res){
  res.sendFile('./public/index.html');
});


var server = app.listen(3000, function(){
    console.log("Server is listening on port 3000");
})