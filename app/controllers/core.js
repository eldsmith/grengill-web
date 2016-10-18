//Controller that handles rendering the views, fetching and passing in relevant data
const youtube = require('../models/youtube.js');
const moment = require('moment');
require('moment-duration-format');

exports.home = function(req, res){
  res.render('index');
};

exports.search = function(req, res){
  //TODO: implement youtubeController

  youtube.search(req.query).then((result)=>{
    //console.log(JSON.stringify(result));
    //Map an array of video ids
    let videoIds = result.search.map((video)=>{
      return video.id.videoId;
    });

    //Get more info on the videos for video durations
    youtube.getVideoInfo(videoIds.toString())
      .then((videoInfo)=>{
        //Map the new video info to the search results
        result.search = result.search.map((item)=>{

          videoInfo.search.map((info)=>{
            if(item.id.videoId === info.id){
              item.snippet.duration = moment
                .duration(info.contentDetails.duration).format('hh:mm:ss');
            }
          });

          return item;
        });

        res.render('index', result);
      });

  });
};

/*
exports.songs = function(req, res){
  req.query
};*/
