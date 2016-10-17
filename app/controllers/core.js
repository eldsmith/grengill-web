//Controller that handles rendering the views, fetching and passing in relevant data
youTube = require('../util/youtube.js');

exports.home = function(req, res){
  res.render('index');
};

exports.search = function(req, res){
  var search = null;

  var p = new Promise((resolve, reject)=>{

    youTube.search(req.query.search, 2, (error, result) => {
      if (error) {
        reject(error);
      }
      else {
        resolve(result);
      }
    });

  });

  p.then((result) => {
    res.render('index', {search : result.items[0].snippet});
    console.log(result.items);
  });

};
