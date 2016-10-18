const YouTube = require('youtube-api');

YouTube.authenticate({
  type: 'key',
  key: process.env.YOUTUBE_API_KEY
});

const search = (query)=>{
  return new Promise((resolve, reject)=>{

    var params = {
      q: query.search,
      type: 'video',
      maxResults: 10,
      part: 'snippet'
    };

    if(query.pageToken){
      params.pageToken = query.pageToken;
    }

    YouTube.search.list(params, (error, result)=>{
      if (error) {
        reject(error);
      }
      else {
        resolve(result);
      }
    });
  }).then((result) => {
    let data = {
      search : result.items,
      prevSearch : query.search,
      nextPageToken : result.nextPageToken,
      prevPageToken : result.prevPageToken
    };

    //Return new promise to allow chaining
    return new Promise((resolve)=>{
      resolve(data);
    });
  });
};


module.exports = {
  search: search
};
