var express = require('express');
var app = express();

app.use(express.static(__dirname + '/dist'));
app.get('/', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});
app.get('/visualizer', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});
app.get('/simulator', function(req, res){
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(process.env.PORT || 8080);
