var YouTube = require('youtube-api');

YouTube.authenticate({
    type: "key",
    key: process.env.YOUTUBE_API_KEY
});

module.exports = YouTube;
