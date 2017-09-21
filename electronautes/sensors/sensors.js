'use strict';

angular.module('electronautes')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sensors', {
    templateUrl: 'sensors/sensors.html',
    controller: 'SensorsCtrl'
  });
}])

.controller('SensorsCtrl', function($scope, $rootScope, $location) {

  // Format SVG.
  $rootScope.formatSVG("img-sensors-las-vegas");
  $rootScope.formatSVG("img-sensors-kremlin");
  $rootScope.formatSVG("img-sensors-bigben");
  $rootScope.formatSVG("img-sensors-moais");
  $rootScope.formatSVG("img-sensors-atonium");
  $rootScope.formatSVG("img-sensors-kheops");
  $rootScope.formatSVG("img-sensors-las-vegas");
  
  $scope.activeSensors = {
    'co2': { 'las-vegas': true, 'kremlin': true, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false },
    'curtains': { 'las-vegas': true, 'kremlin': false, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false },
    'door': { 'las-vegas': true, 'kremlin': true, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false },
    'humidity': { 'las-vegas': true, 'kremlin': true, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false },
    'light': { 'las-vegas': true, 'kremlin': false, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false },
    'motion': { 'las-vegas': true, 'kremlin': false, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false },
    'presence': { 'las-vegas': true, 'kremlin': false, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false },
    'pressure': { 'las-vegas': false, 'kremlin': false, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false },
    'proximity': { 'las-vegas': false, 'kremlin': false, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false },
    'temperature': { 'las-vegas': true, 'kremlin': true, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false },
    'window': { 'las-vegas': true, 'kremlin': false, 'bigben': false, 'moais': false, 'atomium': false, 'kheop': false }
  };

  
  $scope.goToRelate = function () {
    $location.path('/relate')
  }
  
  // Catalog of sensors installed and their IDs in the SVG. 
  var sensorCatalog = [
    /* Presence values: 0 or 1  Sensors: AndorraPIR1 */
    { name: "sensor-presence", id: ["AndorraPIR1"] },
    /* Motion values: 0.00-0.10 Do we need to scale them yes, boolean. Sensors: AndorraMotion1, AndorraMotion2 */
    { name: "sensor-motion", id: ["AndorraMotion1","AndorraMotion2"] },
    /* Window values: 0 or 1  Sensors form left to right: AndorraMITes-0769, AndorraMITes-1012,AndorraMITes-0109, AndorraMITes-1001, AndorraMITes-333 */
    { name: "sensor-window", id: ["w0769-value", "w1012-value", "w0109-value", "w1001-value","w333-value"] },
    /* Door values: 0 or 1 close  Sensors: Reed2 */
    { name: "sensor-door", id: ["door2-value"] },
    /* Light values: 0-1250  Sensors: AndorraLight2, AndorraLight3, AndorraLight4,AndorraLight5, AndorraLight6 */
    { name: "sensor-light", id: ["AndorraLight2","AndorraLight3","AndorraLight4","AndorraLight5","AndorraLight6"] },
     /* Curtains values: 0 or 1 move  Sensors form left to right: AndorraMITes-0210, AndorraMITes-0995, AndorraMITes-0066,AndorraMITes-0325*/
    { name: "sensor-curtains", id: ["cur0210-value","cur0995-value","cur0066-value","cur0325-value"] },
    /* Temperature values: 0-30  Sensors: AndorraLight2, AndorraLight3, AndorraLight4,AndorraLight5, AndorraLight6 */
    { name: "sensor-temperature", id: ["AndorraLight2","AndorraLight3","AndorraLight4","AndorraLight5","AndorraLight6"] },
    /* CO2 values:  2.6-1 Inverted, volt sign Sensor: AndorraBob1 */
    { name: "sensor-co2", id: ["AndorraBob1"] },
    /* Humidity values:  0-100%RH Sensor: AndorraHumidity1 */
    { name: "sensor-humidity", id: ["AndorraHumidity1"] }
  ]; 

  var previousQuery = "";
  var phantom = true;
  var motion = true;

  $scope.showSensorValue = function(typeOfSensor) {

    // var classroom = document.getElementById("img-sensor-" + sessionStorage.getItem("sensors-classroom") );
    var classr = document.getElementById("img-sensors-las-vegas");

    // Get the inner DOM of svg file.
    var svgDoc = classr.contentDocument;

    // Hide sensor values queried before.
    if ( previousQuery !== "" ) {
      svgDoc.getElementById( previousQuery ).setAttribute("display", "none");
    }

    // Get the inner element by id.
    var sensor = svgDoc.getElementById( typeOfSensor );

    if ( sensor ) {

      // Search the sensor IDs for the SVG.
      var sensorIDs = $.grep(sensorCatalog, function( element ){ 
          return element.name === typeOfSensor; 
        }
      );

      var status = sensor.getAttribute("display");    
      if ( status === "none" ) {      

        switch ( typeOfSensor ) {

          case "sensor-presence":
            var numberOfSensors = sensorIDs[0].id.length;
            for (var i = 0; i < numberOfSensors; i++) {
              var sensorId = sensorIDs[0].id[i];   
              $.ajax({
                  url: 'http://replace.media.mit.edu/electronautes/php/getActivationCountTodayByName.php?name=' + sensorId,
                  async: false,
                  dataType: 'json',
                  success: function(data) {
                    var count = data["count"];
                    if (count > 0) {
                      svgDoc.getElementById(sensorId+"-icon-0").setAttribute("display","none");
                      svgDoc.getElementById(sensorId+"-icon-1").setAttribute("display","block");
                      $(svgDoc.getElementById(sensorId+"-value")).text(count.toString());
                    }
                    else {
                      svgDoc.getElementById(sensorId+"-icon-0").setAttribute("display","block");
                      svgDoc.getElementById(sensorId+"-icon-1").setAttribute("display","none");
                      $(svgDoc.getElementById(sensorId+"-value")).text("0");
                    }
                  }
              });
            }
            break;               
          case "sensor-motion":
            var numberOfSensors = sensorIDs[0].id.length;
            for (var i = 0; i < numberOfSensors; i++) {
              var sensorId = sensorIDs[0].id[i];
              $.ajax({
                  url: 'http://replace.media.mit.edu/electronautes/php/getActivationCountTodayByName.php?name=' + sensorId,
                  async: false,
                  dataType: 'json',
                  success: function(data) {
                    var count = data['count'];
                    if (count > 0) {
                      svgDoc.getElementById(sensorId+'-icon-0').setAttribute("display","none");
                      svgDoc.getElementById(sensorId+'-icon-1').setAttribute("display","block");
                      $(svgDoc.getElementById(sensorId+'-value')).text(count.toString());
                    }
                    else {
                      svgDoc.getElementById(sensorId+'-icon-0').setAttribute("display","block");
                      svgDoc.getElementById(sensorId+'-icon-1').setAttribute("display","none");
                      $(svgDoc.getElementById(sensorId+'-value')).text("0");
                    }
                  }
              });
            }
            break;
          case "sensor-window":     
            /*
            DOES NOT WORK :(
            */

            var numberOfSensors = sensorIDs[0].id.length;
            // TODO: change the icon depending on the value of the sensor (0,1) if value=1 display-icon-1 else display-icon-0
            for (var i = 0; i < numberOfSensors; i++) {
              if ( phantom ) {
                svgDoc.getElementById(sensorIDs[0].id[i]+'-icon-0').setAttribute("display","none");
                svgDoc.getElementById(sensorIDs[0].id[i]+'-icon-1').setAttribute("display","block");
                phantom = false;
                $(svgDoc.getElementById(sensorIDs[0].id[i])).text("1");
              }
              else {
                svgDoc.getElementById(sensorIDs[0].id[i]+'-icon-0').setAttribute("display","block");
                svgDoc.getElementById(sensorIDs[0].id[i]+'-icon-1').setAttribute("display","none");
                phantom = true;
                $(svgDoc.getElementById(sensorIDs[0].id[i])).text("0");
              }
            }
            break;
          case "sensor-door":
             var numberOfSensors = sensorIDs[0].id.length;
            // TODO: change the icon depending on the value of the sensor (0,1) if value=1 display-icon-1 else display-icon-0
            for (var i = 0; i < numberOfSensors; i++) {
              if ( phantom ) {
                svgDoc.getElementById(sensorIDs[0].id[i]+'-icon-0').setAttribute("display","none");
                svgDoc.getElementById(sensorIDs[0].id[i]+'-icon-1').setAttribute("display","block");
                phantom = false;
                $(svgDoc.getElementById(sensorIDs[0].id[i])).text("1");
              }
              else {
                svgDoc.getElementById(sensorIDs[0].id[i]+'-icon-0').setAttribute("display","block");
                svgDoc.getElementById(sensorIDs[0].id[i]+'-icon-1').setAttribute("display","none");
                phantom = true;
                $(svgDoc.getElementById(sensorIDs[0].id[i])).text("0");
              }
            }
            break;
          case "sensor-light":
            // Change value for each sensor.
            var numberOfSensors = sensorIDs[0].id.length;
            for (var i = 0; i < numberOfSensors; i++) {
              var sensorId = sensorIDs[0].id[i];
              $.ajax({
                url: 'http://replace.media.mit.edu/electronautes/php/getLastValueByName.php?name=' + sensorId,
                async: false,
                dataType: 'json',
                success: function(data) {
                  $(svgDoc.getElementById(sensorId + "-value")).text(data[0]['value']);
                  var lastDate = data[0]['time'].split('.')[0].replace(/-/g, '/');
                  $(svgDoc.getElementById(sensorId + "-light-lastimevalue")).text(lastDate.substring(0, lastDate.lastIndexOf(":")));	
                }    
              });
            }
            break;   
          case "sensor-curtains":
            // Change value for each sensor.
            var numberOfSensors = sensorIDs[0].id.length;
            for (var i = 0; i < numberOfSensors; i++) {
              $(svgDoc.getElementById(sensorIDs[0].id[i])).text("2");
            }
            break;
          case "sensor-co2":
            // Change value for each sensor. ***This value needs to be inverted volt sign
            var numberOfSensors = sensorIDs[0].id.length;
            for (var i = 0; i < numberOfSensors; i++) {
              var sensorId = sensorIDs[0].id[i];  
              $.ajax({
                url: 'http://replace.media.mit.edu/electronautes/php/getLastValueByName.php?name=' + sensorId,
                async: false,
                dataType: 'json',
                success: function(data) {
                  $(svgDoc.getElementById(sensorId + "-value")).text(data[0]['value']);	
                }    
              });
            }
            break;
          case "sensor-humidity":
            // Change value for each sensor. ***This value needs to be inverted volt sign
            var numberOfSensors = sensorIDs[0].id.length;
            for (var i = 0; i < numberOfSensors; i++) {
              var sensorId = sensorIDs[0].id[i];
              $.ajax({
                url: 'http://replace.media.mit.edu/electronautes/php/getLastValueByName.php?name=' + sensorId,
                async: false,
                dataType: 'json',
                success: function(data) {
                  $(svgDoc.getElementById(sensorId + "-value")).text(data[0]['value'] + '%');	
                }    
              });
            }
            break;
          case "sensor-temperature":
            // Change value for each sensor.
            var numberOfSensors = sensorIDs[0].id.length;
            for (var i = 0; i < numberOfSensors; i++) {
              var sensorId = sensorIDs[0].id[i];                
              $.ajax({
                url: 'http://replace.media.mit.edu/electronautes/php/getLastTemperatureByName.php?name=' + sensorId,
                async: false,
                dataType: 'json',
                success: function(data) {
                  $(svgDoc.getElementById(sensorId + "-value")).text(data[0]['temperature'] + '&deg;C');
                  var lastDate = data[0]['time'].split('.')[0].replace(/-/g, '/');
                  $(svgDoc.getElementById(sensorId + "-temp-lastimevalue")).text(lastDate.substring(0, lastDate.lastIndexOf(":")));	
                }
              });
            }
            break;   
        }

        // Display sensors on the SVG.
        sensor.setAttribute("display","block");
        previousQuery = typeOfSensor;
      } 
    }
  }

});