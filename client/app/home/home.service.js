(function() {
  'use strict';
  angular.module('marvel.services.home', [])
    .factory('charactersService', ['$http', function(http) {
      var service = {
        getAllCharacters: getAllCharacters,
        getFilteredCharacters:getFilteredCharacters,
        getSomeCharacters:getSomeCharacters
      }
      return service;

      function getAllCharacters() {
        var request = {
          url: '/marvel/characters',
          method: 'GET'
        }
        return http(request)
          .then(sendAllCharacters)
          .catch(function(message) {
            console.log(message);
          });

        function sendAllCharacters(response) {
          if(response.statusText == 'OK'){
              return response.data.data;
          }
          else{
            console.log(statusText);
          }
        }
      }

      function getFilteredCharacters(noOfChars,startFrom){
        var request = {
          url: '/marvel/characters/'+noOfChars+'/'+startFrom,
          method: 'GET'
        }
        return http(request)
          .then(sendFilteredCharacters)
          .catch(function(message){
              console.log(message);
          });
          function sendFilteredCharacters(response) {
            if(response.statusText == 'OK'){
                return response.data.data;
            }
            else{
              console.log(statusText);
            }
          }
      }

      function getSomeCharacters(noOfChars){
        var request = {
          url: '/marvel/characters/'+noOfChars,
          method: 'GET'
        }
        return http(request)
          .then(sendSomeCharacters)
          .catch(function(message){
              console.log(message);
          });
          function sendSomeCharacters(response) {
            if(response.statusText == 'OK'){
                return response.data.data;
            }
            else{
              console.log(statusText);
            }
          }
      }
    }])
})();
