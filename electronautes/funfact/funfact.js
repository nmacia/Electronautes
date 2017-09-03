'use strict';

angular.module('electronautes')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/funfact', {
    templateUrl: 'funfact/funfact.html',
    controller: 'FunFactCtrl'
  });
}])

.controller('FunFactCtrl', function($scope, $rootScope) {
  $rootScope.list1 = {title: 'Presence'};
  $rootScope.list2 = {};
});