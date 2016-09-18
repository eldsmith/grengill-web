//Used by javascript for ajax requests to make async calls on the results page

var db = require('../util/db');
var client = require('../util/twitter');

//returns json of search query
exports.results = function(req, res){
  var query = req.query.q;
  if(query){
    db.getCollection('searches').insert({term: query});
    db.saveDatabase();

    client.get('search/tweets', {q:query}, function(error, tweets, response){
      res.json(tweets);
    });
  }
  else{
    res.send('Error');
  }
};
