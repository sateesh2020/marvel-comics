(function(){
  'use strict';
  angular.module('marvel.services.stories',[])
    .factory('storiesService',storiesService);

    storiesService.$inject = ['$http'];

    function storiesService(http){
      var service = {
        getAllStories:getAllStories,
        getSomeStories:getSomeStories
      };
      return service;

      function getAllStories() {
        var request = {
          url:'/marvel/stories',
          method:'GET'
        };
        return http(request)
          .then(sendAllStories)
          .catch(function(message){
              console.log(message);
          });
        function sendAllStories(response) {
          return response.data.data;
        }
      }

      function getSomeStories(noOfStories) {
        var request = {
          url:'/marvel/stories/'+noOfStories,
          method:'GET'
        };
        return http(request)
          .then(sendSomeStories)
          .catch(function(message){
              console.log(message);
          });
        function sendSomeStories(response) {
          return response.data.data;
        }
      }
    }
})();
