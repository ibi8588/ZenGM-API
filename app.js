var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

Player = require('./models/player');

var promise = mongoose.connect('mongodb://localhost:27017/api-2', {
  useMongoClient: true,
});
var db = mongoose.connection;
var url = 'mongodb://localhost:27017/api-2';

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
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
