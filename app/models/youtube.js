//TODO: Implement youtubeController

const YouTube = require('youtube-api');

YouTube.authenticate({
  type: 'key',
  key: process.env.YOUTUBE_API_KEY
});

exports.search = (query)=>{
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
    //TODO: Match youtubeURLS in results with saved songs in db, perhaps not in youtube.js though

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

exports.getVideoInfo = (videoIds)=>{
  return new Promise((resolve, reject)=>{

    var params = {
      id: videoIds,
      maxResults: 10,
      part: 'contentDetails'
    };

    YouTube.videos.list(params, (error, result)=>{
      if (error) {
        reject(error);
      }
      else {
        resolve(result);
      }
    });
  }).then((result) => {
    //TODO: Match youtubeURLS in results with saved songs in db, perhaps not in youtube.js though

    let data = {
      search : result.items
    };

    //Return new promise to allow chaining
    return new Promise((resolve)=>{
      resolve(data);
    });
  });
};
