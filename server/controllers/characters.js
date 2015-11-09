var api   = require('marvel-api');

var marvelCharacters = api.createClient({
  publicKey:'6987c2d03f503a389bdb695eef0e7859',
  privateKey:'908a0b2c8df7855b8b8888f05d0ccd37d46b6ebc'
})

module.exports.getAllCharacters = function(req,res){
  marvelCharacters.characters.findAll(function(err, results) {
    if (err) {
      return console.error(err);
    }
    res.json(results);
  });
}

module.exports.getSomeCharacters = function(req,res){
  var noOfCharsNeeded = req.params.noOfChars;
  marvelCharacters.characters.findAll(noOfCharsNeeded,function(err, results) {
    if (err) {
      return console.error(err);
    }
    res.json(results);
  });
}

module.exports.getFilteredCharacters = function(req,res){
    var noOfChars = req.params.noOfChars;
    var startFrom = req.params.startFrom;
    marvelCharacters.characters.findAll(noOfChars,startFrom,function(err, results) {
      if (err) {
        return console.error(err);
      }
      res.json(results);
    });
}


module.exports.getCharacterByName = function(req,res){
  var characterName = req.body.characterName;
  marvelCharacters.characters.findByName(characterName,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getCharacterNameStarts = function(req,res){
  var characterName = req.body.characterName;
  marvelCharacters.characters.findNameStartsWith(characterName,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getCharacterById = function(req,res){
  var characterId = req.characterId;
  marvelCharacters.characters.find(characterId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getCharacterComics = function(req,res){
  var characterId = req.characterId;
  marvelCharacters.characters.comics(characterId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getCharacterEvents = function(req,res){
  var characterId = req.characterId;
  marvelCharacters.characters.events(characterId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}

module.exports.getCharacterStories = function(req,res){
  var characterId = req.characterId;
  marvelCharacters.characters.stories(characterId,function(err,result){
    if (err) {
      return console.error(err);
    }
    res.json(result);
  });
}
