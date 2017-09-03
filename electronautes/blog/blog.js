'use strict';

angular.module('electronautes')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/blog', {
    templateUrl: 'blog/blog.html',
    controller: 'BlogCtrl'
  });
}])

.controller('BlogCtrl', function($scope,$rootScope) {

});