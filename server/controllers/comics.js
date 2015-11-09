var api   = require('marvel-api');

var marvelComics = api.createClient({
  publicKey:'6987c2d03f503a389bdb695eef0e7859',
  privateKey:'908a0b2c8df7855b8b8888f05d0ccd37d46b6ebc'
})

module.exports.getAllComics = function(req,res){
  marvelComics.comics.findAll(function(err, results) {
    if (err) {
      return console.error(err);
    }
    res.json(results);
  });
}

module.exports.getSomeComics = function(req,res){
  var noOfComics = req.params.noOfComics;
  console.log(noOfComics);
  marvelComics.comics.findAll(noOfComics,function(err, results) {
    if (err) {
      return console.error(err);
    }
    console.log(results);
    res.json(results);
  });
}

module.exports.getFilteredComics = function(req,res){
    var noOfChars = req.params.noOfComics;
    var startFrom = req.params.startFrom;
    marvelComics.comics.findAll(noOfChars,startFrom,function(err, results) {
      if (err) {
        return console.error(err);
      }
      res.json(results);
    });
}


module.exports.getComicByName = function(req,res){
  var characterName = req.params.characterName;
  marvelComics.comics.findByName(characterName,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getComicById = function(req,res){
  var comicId = req.params.comicId;
  marvelComics.comics.find(comicId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getCharacterComics = function(req,res){
  var characterId = req.params.characterId;
  marvelComics.comics.characters(characterId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getComicStories = function(req,res){
  var storyId = req.params.storyId;
  marvelComics.comics.stories(storyId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}
