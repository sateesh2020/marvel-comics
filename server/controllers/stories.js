var api   = require('marvel-api');

var marvelStories = api.createClient({
  publicKey:'6987c2d03f503a389bdb695eef0e7859',
  privateKey:'908a0b2c8df7855b8b8888f05d0ccd37d46b6ebc'
})

module.exports.getAllStories = function(req,res){
  marvelStories.stories.findAll(function(err, results) {
    if (err) {
      return console.error(err);
    }
    res.json(results);
  });
}

module.exports.getSomeStories = function(req,res){
  var noOfStories = req.params.noOfStories;
  marvelStories.stories.findAll(noOfStories,function(err, results) {
    if (err) {
      return console.error(err);
    }
    res.json(results);
  });
}

module.exports.getFilteredStories = function(req,res){
    var noOfChars = req.params.noOfStories;
    var startFrom = req.params.startFrom;
    marvelStories.stories.findAll(noOfChars,startFrom,function(err, results) {
      if (err) {
        return console.error(err);
      }
      res.json(results);
    });
}


module.exports.getStoryByCharName = function(req,res){
  var characterName = req.params.characterName;
  marvelStories.stories.findByName(characterName,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getStoryById = function(req,res){
  var storyId = req.params.storyId;
  marvelStories.stories.find(storyId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getCharacterStories = function(req,res){
  var storyId = req.params.storyId;
  marvelStories.stories.characters(storyId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getStoryStories = function(req,res){
  var storyId = req.params.storyId;
  marvelStories.stories.stories(storyId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getStoryComics = function(req,res){
  var storyId = req.params.storyId;
  marvelStories.stories.comics(storyId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}
