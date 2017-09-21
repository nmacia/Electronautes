  'use strict';

  // Declare app level module which depends on views, and components
  angular.module('electronautes', [
    'ngRoute'
  ])
  .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    //$locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/funfact'});
  }])

  .controller('electronautesCtrl', function($scope, $rootScope, $location) { 

    // VARIABLES
    // List of sensors following the grid order.
    $rootScope.listOfSensors = [
      ['presence', 'motion', 'proximity'], 
      ['window', 'door', 'curtains'],
      ['temperature', 'humidity', 'pressure'],
      ['co2', 'light']
    ];

    // Info regarding bug reports.
    $rootScope.bugReport = {
      'startReporting': false,
      'bugDescription': ""
    };

    // SVG STYLE
    $rootScope.formatSVG = function (svgObjectId) {
      var svgObj = document.getElementById(svgObjectId);
      if (svgObj) {
        svgObj.addEventListener("load", function() { 
          var svgDoc = svgObj.contentDocument;

          // Set the size of the svg root element always to 100%.
          var rootLayer = svgDoc.getElementById('root-layer');
          rootLayer.setAttribute("width", "100%");
          rootLayer.setAttribute("height", "100%");

          // Create the style element within the svg and add the import for the right font.
          var importStament = `
              @import url(http://fonts.googleapis.com/css?family=Amatic+SC);
          `;
          var style = svgDoc.createElementNS("http://www.w3.org/2000/svg", "style");        
          style.innerHTML = style.innerHTML + importStament;
          svgDoc.documentElement.appendChild(style);

          // Change all the .text font-family to the correct one.
          var textElements = svgDoc.getElementsByTagNameNS("http://www.w3.org/2000/svg", "text");
          for (var i = 0; i <textElements.length; i++) {
            var textElement = textElements[i];
            textElement.setAttribute("font-family", "Amatic SC");
            if(textElement.id.endsWith("lastimevalue")) {
              textElement.setAttribute("font-weight", "500");    
            }
            else {
              textElement.setAttribute("font-weight", "700");
            }
          }
        }, false);      
      }
    }

    //Adds click event listener to school-pan svg file
     $rootScope.addClickableEventToClassroomsInSVG = function(svgObjectId) {
        var svgObj = document.getElementById(svgObjectId);
        if (svgObj) {
          svgObj.addEventListener("load", function() { 
            var svgDoc = svgObj.contentDocument;
            var classroomPaths = svgDoc.getElementsByClassName("svg-clickable-classroom");
            
            for (var i = 0; i < classroomPaths.length; i++) {
              var classroomPath = classroomPaths[i];
              classroomPath.addEventListener("click", function(event) {
                var parentGroup = event.path[1];
                if (parentGroup) {   
                  var classId = parentGroup.id;
                  goToClass(classId);                  
                }          
              });
            }            
          });
        }
     }
     
     var goToClass = function(classId) {
       console.log(classId);
       console.log($location);
       $location.path($location.path() + "/" + classId);
       $rootScope.$apply();
     }

  });

