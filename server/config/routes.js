var express             = require('express'),
    router              = express.Router(),
    characterCtrl       = require('../controllers/characters'),
    comicCtrl           = require('../controllers/comics'),
    eventCtrl           = require('../controllers/events'),
    storyCtrl           = require('../controllers/stories');


module.exports = function(app){
  // REGISTER OUR ROUTES ---------------
  app.use('/marvel', router);
  // Route to handle all http requests
  router.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html'); // load our client/index.html file
  });

  /* Characters Routes */
  router.get('/characters',characterCtrl.getAllCharacters);
  router.get('/characters/:noOfChars/:startFrom',characterCtrl.getFilteredCharacters);
  router.get('/characters/:noOfChars',characterCtrl.getSomeCharacters);

  /* Comics Routes */
  router.get('/comics',comicCtrl.getAllComics);
  router.get('/comics/:noOfComics/:startFrom',comicCtrl.getFilteredComics);
  router.get('/comics/:noOfComics',comicCtrl.getSomeComics);

  /* Events Routes */
  router.get('/events',eventCtrl.getAllEvents);
  router.get('/events/:noOfEvents/:startFrom',eventCtrl.getFilteredEvents);
  router.get('/events/:noOfEvents',eventCtrl.getSomeEvents);

  /* Events Routes */
  router.get('/stories',storyCtrl.getAllStories);
  router.get('/stories/:noOfStories/:startFrom',storyCtrl.getFilteredStories);
  router.get('/stories/:noOfStories',storyCtrl.getSomeStories);
}
