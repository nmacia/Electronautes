'use strict';

angular.module('electronautes')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/survey', {
    templateUrl: 'survey/survey.html',
    controller: 'SurveyCtrl'
  });
}])

.controller('SurveyCtrl', function($scope, $rootScope, $location) {
    
  // Make flooplan clickable.
  $rootScope.addClickableEventToClassroomsInSVG("img-floorplan");
 
  // Store values checked on the survey.
  $rootScope.surveyResults = {
    mood: null,
    energy: null,
    temperature: null,
    noise: null,
    group: null
  };
  
  $scope.surveyPassword = null;
  
  // Store classroom.
  $rootScope.surveyClassroom = null;
  
  $scope.errorMessage = {
    mood: null,
    energy: null,
    temperature: null,
    noise: null,
    password: null
  }
  
  $scope.checkPassword = function () {
    var url="./password.json";  
    $.getJSON(url, function (data) {   // This method gets the json file and fetches the data inside it.
      return ( data[$scope.classroom] === $scope.surveyPassword );
    });              
  }
   
  function validateForm() { 
    
    var isCorrect = true;
    
    // Display error messages when radios are not checked or password is incorrect.   
    $rootScope.surveyResults.mood === null ? $scope.errorMessage.mood = true : $scope.errorMessage.mood = false;
    $rootScope.surveyResults.energy === null ? $scope.errorMessage.energy = true : $scope.errorMessage.energy = false;
    $rootScope.surveyResults.temperature === null ? $scope.errorMessage.temperature = true : $scope.errorMessage.temperature = false;
    $rootScope.surveyResults.noise === null ? $scope.errorMessage.noise = true : $scope.errorMessage.noise = false;
    $scope.checkPassword() ? $scope.errorMessage.password = true : $scope.errorMessage.password = false;
    
    for ( var key in $scope.errorMessage ) {
      if ( $scope.errorMessage[key] ) {
        isCorrect = false;
      }
    }
    return isCorrect;
  }
     
  /*function writeUserData() {
    var dt = new Date();
    // MOOD: $scope.surveyResults.mood
    // ENERGY: $scope.surveyResults.energy
    // TEMPERATURE: $scope.surveyResults.temperature
    // NOISE: $scope.surveyResults.noise
    // CLASSROOM: $scope.surveyClassroom
    });
  }*/
  
  $scope.submitSurvey = function () { 
    if ( validateForm() ) {
      $rootScope.surveyClassroom = $scope.classroom;
      // TODO: Store values in Jason's database.
      // writeUserData();
      $location.path('/sensors');
    }
  }
  
}); // End controller.