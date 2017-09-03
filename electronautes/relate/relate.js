'use strict';

angular.module('electronautes')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/relate', {
    templateUrl: 'relate/relate.html',
    controller: 'RelateCtrl'
  });
}])

.controller('RelateCtrl', function($scope, $rootScope, $location) {
  
  $scope.selectedTab = "mood";
  
  $scope.sensorsLeftSide = ["presence", "motion", "proximity", "window", "door", "curtains"];
  $scope.sensorsRightSide = ["temperature", "humidity", "pressure", "co2", "light"];
  
  $scope.selectedSensors = {
    'co2': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false },
    'curtains': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false },
    'door': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false },
    'humidity': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false },
    'light': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false },
    'motion': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false },
    'presence': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false },
    'pressure': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false },
    'proximity': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false },
    'temperature': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false },
    'window': { 'mood': false, 'energy': false, 'temperature': false, 'noise': false }
  };

  $scope.moveSensor = function(sensor, dropArea) { 
    // Get the type of sensor.
    var s = sensor.split("-")[0];
   
    switch (dropArea) {
      case "center-dragbox-forsensors": // Drop element in dropbox.
        $scope.selectedSensors[s][$scope.selectedTab] = true;
        break;
      default: // Drop element on the left or right side.
        $scope.selectedSensors[s][$scope.selectedTab] = false;
    }
    $scope.$digest();
  }
  
  $scope.submitRelation = function () { 
    // TODO: Store values in in Jason's database.
    // Results from the relation game are in $scope.selectedSensors
    // Classroom is in $rootScope.classroom
    // Reset surveyClassroom to remove "relate" button in sensors view.
    $rootScope.surveyClassroom = null;
    $location.path('/sensors');
  }
   
});