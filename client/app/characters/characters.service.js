(function() {
    'use strict';
    angular.module('marvel.services.characters', [])
      .factory('charactersService', charactersService);
    charactersService.$inject = ['$http'];

    function charactersService(http) {
      var service = {
        getAllCharacters: getAllCharacters,
        getFilteredCharacters: getFilteredCharacters,
        getSomeCharacters: getSomeCharacters
      };
      return service;
      /* Factory to get All Characters from Marvel API
          Get First 20 Characters of 100
      */
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
          if (response.statusText == 'OK') {
            return response.data.data;
          } else {
            console.log(statusText);
          }
        }
      }
      /* Factory to get Filtered Characters from Marvel API
        First Argument - No of Characters Needed
        Second Argument - Index to Start From
      */
      function getFilteredCharacters(noOfChars, startFrom) {
        var request = {
          url: '/marvel/characters/' + noOfChars + '/' + startFrom,
          method: 'GET'
        }
        return http(request)
          .then(sendFilteredCharacters)
          .catch(function(message) {
            console.log(message);
          });

        function sendFilteredCharacters(response) {
          if (response.statusText == 'OK') {
            return response.data.data;
          } else {
            console.log(statusText);
          }
        }
      }
      /* Factory to get Filtered Characters from Marvel API
        First Argument - No of Characters Needed
      */
      function getSomeCharacters(noOfChars) {
        var request = {
          url: '/marvel/characters/' + noOfChars,
          method: 'GET'
        }
        return http(request)
          .then(sendSomeCharacters)
          .catch(function(message) {
            console.log(message);
          });

        function sendSomeCharacters(response) {
          if (response.statusText == 'OK') {
            return response.data.data;
          } else {
            console.log(statusText);
          }
        }
      }
    }
    /* Characters Service End */
})();
