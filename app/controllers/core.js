//Controller that handles rendering the views, fetching and passing in relevant data
const youtube = require('../util/youtube.js');

exports.home = function(req, res){
  res.render('index');
};

exports.search = function(req, res){
  youtube.search(req.query).then((result)=>{
    res.render('index', result);
  });
};
