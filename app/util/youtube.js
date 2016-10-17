var YouTube = require('youtube-node');
var youTube = new YouTube();
youTube.setKey(process.env.YOUTUBE_API_KEY);

module.exports = youTube;
