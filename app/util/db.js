var loki = require('lokijs');

var db = new loki('db.json');

// Sets the module.exports to the value of the fetched database,
// module.exports is returned upon a require()
module.exports = db;
