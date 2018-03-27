'use strict';

angular.module('electronautes')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/learnmore', {
    templateUrl: 'learnmore/learnmore.html',
    controller: 'LearnMoreCtrl'
  });
}])

.controller('LearnMoreCtrl', function($scope, $rootScope) { 
  
  $scope.content = "presence";
  
  $scope.setValue = function(row, col) {
    $scope.content = $rootScope.listOfSensors[row][col];
  }
  
});

