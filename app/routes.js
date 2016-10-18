var core = require('./controllers/coreController');

//Sets the routes to the core controller methods they correspond to
module.exports = function(app){
  app.get('/', core.home);

  app.get('/search', core.search);

  //app.get('/songs', core.songs);
};
