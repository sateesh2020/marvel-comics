(function(){
    'use strict';
      angular.module('marvel.services.comics', [])
          .factory('comicsService', comicsService);
      comicsService.$inject = ['$http'];

      function comicsService(http){
          var service = {
              getAllComics:getAllComics,
              getSomeComics:getSomeComics
          };
          return service;

          function getAllComics() {
            var request = {
              url:'/marvel/comics',
              method:'GET'
            }

            return http(request)
              .then(sendAllComics)
              .catch(function(message){
                console.log(message);
              });
            function sendAllComics(response) {
              return response.data.data;
            }
          }

          function getSomeComics(noOfComics) {
            var request = {
              url:'/marvel/comics/'+noOfComics,
              method:'GET'
            }

            return http(request)
              .then(sendSomeComics)
              .catch(function(message){
                console.log(message);
              });
            function sendSomeComics(response) {
              return response.data.data;
            }
          }
      }
})();
