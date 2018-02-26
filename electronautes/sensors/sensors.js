'use strict';

angular.module('electronautes')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sensors', {
    templateUrl: 'sensors/sensors.html',
    controller: 'SensorsCtrl'
  });
}])

.controller('SensorsCtrl', function($scope, $rootScope, $location, $routeParams) {

  // Format SVG.
  $rootScope.formatSVG("img-floorplan");
  $rootScope.formatSVG("img-sensors");
  $rootScope.formatSVG("img-sensors-lasvegas");
  $rootScope.formatSVG("img-sensors-pompeia");
  $rootScope.formatSVG("img-sensors-oimiakon");
  $rootScope.formatSVG("img-sensors-honolulu");
  $rootScope.formatSVG("img-sensors-hongkong");
  $rootScope.formatSVG("img-sensors-monaco");
  
  // Make flooplan clickable.
  $rootScope.addClickableEventToClassroomsInSVG("img-floorplan");
  
  // Get id from the route param if defined.  
  //$rootScope.classroom;
  //$rootScope.classroom = $routeParams.classroom ? $routeParams.classroom : "floorplan";
  
  $scope.activeSensors = {
    'co2': { 'lasvegas': true, 'pompeia': false, 'oimiakon': false, 'honolulu': false, 'hongkong': false, 'monaco': false },
    'curtains': { 'lasvegas': true, 'pompeia': false, 'oimiakon': false, 'honolulu': false, 'hongkong': false, 'monaco': false },
    'door': { 'lasvegas': true, 'pompeia': false, 'oimiakon': false, 'honolulu': false, 'hongkong': false, 'monaco': false },
    'humidity': { 'lasvegas': true, 'pompeia': false, 'oimiakon': false, 'honolulu': false, 'hongkong': false, 'monaco': false },
    'light': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'motion': { 'lasvegas': true, 'pompeia': false, 'oimiakon': false, 'honolulu': false, 'hongkong': false, 'monaco': false },
    'presence': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'pressure': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'proximity': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'temperature': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'window': { 'lasvegas': true, 'pompeia': false, 'oimiakon': false, 'honolulu': false, 'hongkong': false, 'monaco': false }
  };

  $scope.goToRelate = function () {
    $location.path('/relate')
  }
  
  // Catalog of sensors installed and their IDs in the SVG. 
  var sensorCatalog = [
   
    /* Presence values: 0 or 1  Sensors: AndorraPIR1 */
    { name: "sensor-presence", group: "lasvegas", id: ["AndorraPIR1","ATP080"] },
    { name: "sensor-presence", group: "pompeia", id: ["ATP074"] },
    { name: "sensor-presence", group: "oimiakon", id: ["ATP075", "ATP076"] },
    { name: "sensor-presence", group: "honolulu", id: ["ATP079"] },
    { name: "sensor-presence", group: "hongkong", id: ["ATP081"] },
    { name: "sensor-presence", group: "monaco", id: ["ATP082"] },
    
    /* Motion values: 0.00-0.10 Do we need to scale them yes, boolean. Sensors: AndorraMotion1, AndorraMotion2 */
    { name: "sensor-motion", group: "lasvegas", id: ["AndorraMotion1","AndorraMotion2"] },
    
    /* Window values: 0 or 1  Sensors form left to right: AndorraMITes-0769, AndorraMITes-1012,AndorraMITes-0109, AndorraMITes-1001, AndorraMITes-333 */
    { name: "sensor-window", group: "lasvegas", id: ["w0769-value", "w1012-value", "w0109-value", "w1001-value","w333-value"] },
    
    /* Door values: 0 or 1 close  Sensors: Reed2 */
    { name: "sensor-door", group: "lasvegas", id: ["door2-value"] },
    
    /* Light values: 0-1250  Sensors: AndorraLight2, AndorraLight3, AndorraLight4,AndorraLight5, AndorraLight6 */
    { name: "sensor-light", group: "lasvegas", id: ["AndorraLight2", "AndorraLight3", "AndorraLight4", "AndorraLight5", "AndorraLight6", "ATP080", "AT007"] },
    { name: "sensor-light", group: "pompeia", id: ["ATP074", "AT001"] },
    { name: "sensor-light", group: "oimiakon", id: ["ATP075", "ATP076", "AT003"] },
    { name: "sensor-light", group: "honolulu", id: ["ATP079", "AT006"] },
    { name: "sensor-light", group: "hongkong", id: ["ATP081", "AT008"] },
    { name: "sensor-light", group: "monaco", id: ["ATP082", "AT009"] },
    
    /* Curtains values: 0 or 1 move  Sensors form left to right: AndorraMITes-0210, AndorraMITes-0995, AndorraMITes-0066,AndorraMITes-0325*/
    { name: "sensor-curtains", group: "lasvegas", id: ["cur0210-value","cur0995-value","cur0066-value","cur0325-value"] },
    
    /* Temperature values: 0-30  Sensors: AndorraLight2, AndorraLight3, AndorraLight4,AndorraLight5, AndorraLight6 */
    { name: "sensor-temperature", group: "lasvegas", id: ["AndorraLight2", "AndorraLight3", "AndorraLight4", "AndorraLight5", "AndorraLight6", "ATP080", "AT007"] },
    { name: "sensor-temperature", group: "pompeia", id: ["ATP074", "AT001"] },
    { name: "sensor-temperature", group: "oimiakon", id: ["ATP075", "ATP076", "AT003"] },
    { name: "sensor-temperature", group: "honolulu", id: ["ATP079", "AT006"] },
    { name: "sensor-temperature", group: "hongkong", id: ["ATP081", "AT008"] },
    { name: "sensor-temperature", group: "monaco", id: ["ATP082", "AT009"] },
    
    /* CO2 values:  2.6-1 Inverted, volt sign Sensor: AndorraBob1 */
    { name: "sensor-co2", group: "lasvegas", id: ["AndorraBob1"] },
    
    /* Humidity values:  0-100%RH Sensor: AndorraHumidity1 */
    { name: "sensor-humidity", group: "lasvegas", id: ["AndorraHumidity1"] },
    
    /* Proximity */
    { name: "sensor-proximity", group: "lasvegas", id: ["ATP080", "AT007"] },
    { name: "sensor-proximity", group: "pompeia", id: ["ATP074", "AT001"] },
    { name: "sensor-proximity", group: "oimiakon", id: ["ATP075", "ATP076", "AT003"] },
    { name: "sensor-proximity", group: "honolulu", id: ["ATP079", "AT006"] },
    { name: "sensor-proximity", group: "hongkong", id: ["ATP081", "AT008"] },
    { name: "sensor-proximity", group: "monaco", id: ["ATP082", "AT009"] },
    
    /* Pressure */
    { name: "sensor-pressure", group: "lasvegas", id: ["ATP080", "AT007"] },
    { name: "sensor-pressure", group: "pompeia", id: ["ATP074", "AT001"] },
    { name: "sensor-pressure", group: "oimiakon", id: ["ATP075", "ATP076", "AT003"] },
    { name: "sensor-pressure", group: "honolulu", id: ["ATP079", "AT006"] },
    { name: "sensor-pressure", group: "hongkong", id: ["ATP081", "AT008"] },
    { name: "sensor-pressure", group: "monaco", id: ["ATP082", "AT009"] }
  ]; 

  var previousQuery = "";
  var phantom = true;
  var motion = true;

  $scope.showSensorValue = function(typeOfSensor) {

    //var classroom = document.getElementById("img-sensor-" + sessionStorage.getItem("sensors-classroom") );
    //var classr = document.getElementById("img-sensors-"+ $scope.classroom);
    var classr = document.getElementById("img-sensors");
    
    console.log("ID img-sensors");
    console.log("what's this" + classr);

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
          return element.name === typeOfSensor && element.group === $scope.classroom; 
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