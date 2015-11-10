(function() {
  'use strict';

  angular.module('marvel-router', ['ui.router'])

  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

    // Main Page ========================================
    .state('home', {
      url: '/home',
      templateUrl: 'app/home/home.html',
      controller:'HomeController'
    })
    .state('characters', {
      url: '/characters',
      templateUrl: 'app/characters/characters.html',
      controller:'CharactersController',
      controllerAs:'chars'
    });

  }]);

})();
