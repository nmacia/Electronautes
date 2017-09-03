'use strict';

angular.module('electronautes')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/data', {
    templateUrl: 'data/data.html',
    controller: 'DataCtrl'
  });
}])

.controller('DataCtrl', function($scope,$rootScope) {
  
});