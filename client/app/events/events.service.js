(function(){
    'use strict';
    angular.module('marvel.services.events',[])
        .factory('eventsService', eventsService);

    eventsService.$inject = ['$http'];

    function eventsService(http){
        var service = {
          getAllEvents:getAllEvents,
          getSomeEvents:getSomeEvents
        };
        return service;

        function getAllEvents(){
          var request={
            url:'/marvel/events',
            method:'GET'
          }
          return http(request)
            .then(sendAllEvents)
            .catch(function(message){
              console.log(message);
            });

          function sendAllEvents(response) {
            return response.data.data;
          }
        }

        function getSomeEvents(noOfEvents){
          var request={
            url:'/marvel/events/'+noOfEvents,
            method:'GET'
          }
          return http(request)
            .then(sendSomeEvents)
            .catch(function(message){
              console.log(message);
            });

          function sendSomeEvents(response) {
            return response.data.data;
          }
        }
    }
})();
