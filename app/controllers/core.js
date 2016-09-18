//Controller that handles rendering the views, fetching and passing in relevant data

var db = require('../util/db'); //Fetch the database
var client = require('../util/twitter'); //Import the twitter api utility

exports.home = function(req, res){
  db.loadDatabase({}, function(){
    //renders the view and passes in the search data to the view
    res.render('index', {searches : db.getCollection('searches').data});
  });
};

//add the top terms page
exports.top = function(req, res){
  db.loadDatabase({}, function(){
    res.render('top', {terms : db.getCollection('top').data});
  });
};

exports.results = function(req, res){
  var query = req.query.q; //Fetch the query from the request
  if(query){
    db.getCollection('searches').insert({term: query}); //add the query to the searches collection
    db.saveDatabase();

    //Use the twitter api to get the tweets from the query
    client.get('search/tweets', {q:query}, function(error, tweets, response){
      //render the results view and pass in the query along with the they type of tweet
      res.render('results', {query: query, tweets: tweets.statuses});
    });
  }
  else{
    res.send('Error');
  }
};
