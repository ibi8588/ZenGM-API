var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Player = require('./models/player');

var promise = mongoose.connect('mongodb://localhost/zengm', {
  useMongoClient: true,
});
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Testing');
});

app.get('/api/player', function(req, res){
  Player.getPlayers(function(err, players){
    if(err){
      throw err;
    }
    res.json(players)
  });
});

app.listen(3000);
console.log('running on port 3000')
