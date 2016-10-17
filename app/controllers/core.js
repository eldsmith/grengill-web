//Controller that handles rendering the views, fetching and passing in relevant data
YouTube = require('../util/youtube.js');

exports.home = function(req, res){
  res.render('index');
};

exports.search = function(req, res){
  var search = null;

  var p = new Promise((resolve, reject)=>{

    var params = {
       q: req.query.search,
       type:"video",
       maxResults: 10,
       part: "snippet"
     }

    if(req.query.pageToken){
      params.pageToken = req.query.pageToken;
      console.log(params);
    }

    YouTube.search.list(params, (error, result)=>{
      if (error) {
        reject(error);
      }
      else {
        resolve(result);
      }
    });
  });

  p.then((result) => {
    let data = {
      search : result.items,
      prevSearch : req.query.search
    }

    if(result.nextPageToken) data.nextPageToken = result.nextPageToken;
    if(result.prevPageToken) data.prevPageToken = result.prevPageToken;

    console.log(data);
    res.render('index', data);

  });

};
