(function(){
  'use strict';
  angular.module('marvel.controller.characters',[])
    .controller('CharactersController',CharactersController);
    CharactersController.$inject = ['charactersService'];

    function CharactersController(charactersService){
      var charactersVM = this;
      getAllCharacters();

      function getAllCharacters(){
        return charactersService.getAllCharacters().then(function(characters){
          charactersVM.characters = characters;
          return charactersVM.characters;
        })
      }
    }
})();
