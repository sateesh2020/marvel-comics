(function() {
  'use strict';
  angular.module('marvel.directives', [])
    .directive('marvelSpinner', ['$http', '$rootScope', function($http, $rootScope) {
      return {
        link: function(scope, elm, attrs) {
          $rootScope.spinnerActive = false;
          scope.isLoading = function() {
            return $http.pendingRequests.length > 0;
          };

          scope.$watch(scope.isLoading, function(loading) {
            $rootScope.spinnerActive = loading;
            if (loading) {
              elm.removeClass('ng-hide');
            } else {
              elm.addClass('ng-hide');
            }
          });
        }
      };
    }])
    .directive('marvelHeader', function() {
      return {
        restrict: 'E',
        replace: true,
        templateUrl: '../app/layouts/header.html'
      }
  })
})();
