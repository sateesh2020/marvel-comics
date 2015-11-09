var api   = require('marvel-api');

var marvelEvents = api.createClient({
  publicKey:'6987c2d03f503a389bdb695eef0e7859',
  privateKey:'908a0b2c8df7855b8b8888f05d0ccd37d46b6ebc'
})

module.exports.getAllEvents = function(req,res){
  marvelEvents.events.findAll(function(err, results) {
    if (err) {
      return console.error(err);
    }
    res.json(results);
  });
}

module.exports.getSomeEvents = function(req,res){
  var noOfEvents = req.params.noOfEvents;
  console.log(noOfEvents);
  marvelEvents.events.findAll(noOfEvents,function(err, results) {
    if (err) {
      return console.error(err);
    }
    console.log(results);
    res.json(results);
  });
}

module.exports.getFilteredEvents = function(req,res){
    var noOfChars = req.params.noOfEvents;
    var startFrom = req.params.startFrom;
    marvelEvents.events.findAll(noOfChars,startFrom,function(err, results) {
      if (err) {
        return console.error(err);
      }
      res.json(results);
    });
}


module.exports.getEventByCharName = function(req,res){
  var characterName = req.params.characterName;
  marvelEvents.events.findByName(characterName,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getEventById = function(req,res){
  var eventId = req.params.eventId;
  marvelEvents.events.find(eventId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getCharacterEvents = function(req,res){
  var eventId = req.params.eventId;
  marvelEvents.events.characters(eventId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getEventStories = function(req,res){
  var eventId = req.params.eventId;
  marvelEvents.events.stories(eventId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getEventComics = function(req,res){
  var eventId = req.params.eventId;
  marvelEvents.events.comics(eventId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}
