var core = require('./controllers/core');
var api = require('./controllers/api');

//Sets the routes to the core controller methods they correspond to
module.exports = function(app){
  app.get('/', core.home);

  app.get('/search', core.search);
};
