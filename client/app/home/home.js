(function() {
  'use strict';
  angular.module('marvel.controller.home', [])
    .controller('HomeController', HomeController);

    HomeController.$inject = ['charactersService','comicsService','eventsService','storiesService','$scope'];

    function HomeController(charactersService,comicsService,eventsService,storiesService,scope){

      getSomeCharacters(5);
      getSomeComics(5);
      getSomeEvents(5);
      getSomeStories(5);
      function getSomeCharacters(noOfChars){
        return charactersService.getSomeCharacters(noOfChars).then(function(data){
          scope.characters = data;
          return scope.characters;
        })
      }

      function getSomeComics(noOfComics){
        return comicsService.getSomeComics(noOfComics).then(function(data){
          scope.comics = data;
          return scope.comics;
        })
      }

      function getSomeEvents(noOfEvents){
        return eventsService.getSomeEvents(noOfEvents).then(function(data){
          scope.events = data;
          console.log(data);
          return scope.events;
        })
      }

      function getSomeStories(noOfStories){
        return storiesService.getSomeStories(noOfStories).then(function(data){
          scope.stories = data;
          console.log(data);
          return scope.stories;
        })
      }

    }
})();
