const YouTube = require('youtube-api');

YouTube.authenticate({
  type: 'key',
  key: process.env.YOUTUBE_API_KEY
});

const search = (query)=>{

  return new Promise((resolve_a, reject_a)=>{
    var p = new Promise((resolve)=>{

      var params = {
        q: query.search,
        type: 'video',
        maxResults: 10,
        part: 'snippet'
      };

      if(query.pageToken){
        params.pageToken = query.pageToken;
        console.log(params);
      }

      YouTube.search.list(params, (error, result)=>{
        if (error) {
          reject_a(error);
        }
        else {
          resolve(result);
        }
      });
    });

    p.then((result) => {
      let data = {
        search : result.items,
        prevSearch : query.search
      };

      if(result.nextPageToken) data.nextPageToken = result.nextPageToken;
      if(result.prevPageToken) data.prevPageToken = result.prevPageToken;

      resolve_a(data);
    });
  });

};


module.exports = {
  search: search
};
