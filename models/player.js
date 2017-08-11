var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var SchemaTypes = mongoose.Schema.Types;

var playerSchema = mongoose.Schema({
  Name: {
    type: String
  },
  Pos: {
    type: String
  },
  Age : {
    type: Number
  },
  Team : {
    type: String
  },
  Season : {
    type: Number
  },
  "GP" : {
  type: Number
},
  "GS" : {
  type: Number
},
  AtBats : {
  type: Number
},
  Hits: {
  type: Number

},
  "2B" : {
  type: Number

},
  "3B" : {
  type: Number

},
  "HR" : {
  type: Number

},
  Run : {
  type: Number

},
  "RBI" : {
  type: Number

},
  "SB" : {
  type: Number
},
  "BB" : {
  type: Number
},
  "SO" : {
  type: Number
},
  "ISO" : {
  type: SchemaTypes.Double
},
  "BABIP" : {
  type: SchemaTypes.Double
},
  "AVG" : {
  type: SchemaTypes.Double
},
  "OBP" : {
  type: SchemaTypes.Double
},
  "SLG" : {
  type: SchemaTypes.Double
},
  "OPS" : {
  type: SchemaTypes.Double
},
  "wOBA" : {
  type: SchemaTypes.Double
},
  "E" : {
  type: Number
},
  "WAR" : {
  type: SchemaTypes.Double
},
  "W" : {
  type: Number
},
  "L" : {
  type: Number
},
  "S" : {
  type: Number
},
  "IP" : {
  type: SchemaTypes.Double
},
  "K/9" : {
  type: SchemaTypes.Double
},
  "BB/9" : {
  type: SchemaTypes.Double
},
  "HR/9" : {
  type: SchemaTypes.Double
},
  "PBABIP" : {
  type: SchemaTypes.Double
},
  "GB%" : {
  type: SchemaTypes.Double
},
  "HR/FB" : {
  type: SchemaTypes.Double
},
  "ERA" : {
  type: SchemaTypes.Double
},
  "FIP" : {
  type: SchemaTypes.Double
},
  "WARP" : {
  type: SchemaTypes.Double
},
created: {
    type: Date,
    default: Date.now
}
})


var Player = module.exports = mongoose.model('Player', playerSchema);
module.exports.getPlayers = function(callback, limit){
  Player.find(callback).limit(limit);
}
