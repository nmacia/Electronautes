'use strict';

angular.module('electronautes')

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sensors', {
    templateUrl: 'sensors/sensors.html',
    controller: 'SensorsCtrl'
  });
}])

.controller('SensorsCtrl', function($scope, $rootScope, $location, $routeParams) {
  
  // Load correct Google font inside each svg file (for compatibility with mobile browsers)  
  $rootScope.importGoogleFontToSVG("img-floorplan");
  $rootScope.importGoogleFontToSVG("img-sensors-lasvegas");
  $rootScope.importGoogleFontToSVG("img-sensors-pompeia");
  $rootScope.importGoogleFontToSVG("img-sensors-oimiakon");
  $rootScope.importGoogleFontToSVG("imgadd-sensors-honolulu");
  $rootScope.importGoogleFontToSVG("img-sensors-hongkong");
  $rootScope.importGoogleFontToSVG("img-sensors-monaco");


  // Make flooplan clickable.
  // TODO fix mobile devices
  $rootScope.addClickableEventToClassroomsInSVG("img-floorplan");
    
  $scope.activeSensors = {
    'co2': { 'lasvegas': true, 'pompeia': false, 'oimiakon': false, 'honolulu': true, 'hongkong': false, 'monaco': true },
    'curtains': { 'lasvegas': false, 'pompeia': false, 'oimiakon': false, 'honolulu': false, 'hongkong': false, 'monaco': false },
    'door': { 'lasvegas': false, 'pompeia': false, 'oimiakon': false, 'honolulu': false, 'hongkong': false, 'monaco': false },
    'humidity': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'light': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'motion': { 'lasvegas': false, 'pompeia': false, 'oimiakon': false, 'honolulu': false, 'hongkong': false, 'monaco': false },
    'presence': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'pressure': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'proximity': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'temperature': { 'lasvegas': true, 'pompeia': true, 'oimiakon': true, 'honolulu': true, 'hongkong': true, 'monaco': true },
    'window': { 'lasvegas': false, 'pompeia': false, 'oimiakon': false, 'honolulu': false, 'hongkong': false, 'monaco': false }
  };

  $scope.goToRelate = function () {
      $location.path('/relate')
  };
  
  $scope.goToLearnMore = function () {
    $location.path('/learnmore')
  };
  
  // Catalog of sensors installed and their IDs in the SVG. 
  var sensorCatalog = [
   
    /* Presence values: 0 or 1  Sensors: PIR */
    { name: "sensor-presence", group: "pompeia", id: ["ATP074"] },
    { name: "sensor-presence", group: "oimiakon", id: ["ATP075", "ATP076"] },
    { name: "sensor-presence", group: "honolulu", id: ["ATP079"] },
    { name: "sensor-presence", group: "lasvegas", id: ["ATP080"] },
    { name: "sensor-presence", group: "hongkong", id: ["ATP081"] },
    { name: "sensor-presence", group: "monaco", id: ["ATP082"] },
    
    ///* Motion values: 0.00-0.10 Do we need to scale them yes, boolean. Sensors: AndorraMotion1, AndorraMotion2 */
    //{ name: "sensor-motion", group: "lasvegas", id: ["AndorraMotion1","AndorraMotion2"] },
    
    /* Window values: 0 or 1  Sensors form left to right: AndorraMITes-0769, AndorraMITes-1012,AndorraMITes-0109, AndorraMITes-1001, AndorraMITes-333 */
    //{ name: "sensor-window", group: "lasvegas", id: ["w0769-value", "w1012-value", "w0109-value", "w1001-value","w333-value"] },
    
    // /* Door values: 0 or 1 close  Sensors: Reed2 */
    // { name: "sensor-door", group: "lasvegas", id: ["door2-value"] },
    
    /* Light values: 0-1250 */
    { name: "sensor-light", group: "pompeia", id: ["AT001", "ATP074"] },
    { name: "sensor-light", group: "oimiakon", id: ["AT003", "ATP075", "ATP076"] },
    { name: "sensor-light", group: "honolulu", id: ["AT006", "ATP079"] },
    { name: "sensor-light", group: "lasvegas", id: ["AT007", "ATP080"] },
    { name: "sensor-light", group: "hongkong", id: ["AT008", "ATP081"] },
    { name: "sensor-light", group: "monaco", id: ["AT008","ATP082"] },
    
    // /* Curtains values: 0 or 1 move  Sensors form left to right: AndorraMITes-0210, AndorraMITes-0995, AndorraMITes-0066,AndorraMITes-0325*/
    // { name: "sensor-curtains", group: "lasvegas", id: ["cur0210-value","cur0995-value","cur0066-value","cur0325-value"] },
    
    /* Temperature values: 0-30  Sensors: sensor-temperature */
    { name: "sensor-temperature", group: "pompeia", id: ["AT001", "ATP074"] },
    { name: "sensor-temperature", group: "oimiakon", id: ["AT003", "ATP075", "ATP076"] },
    { name: "sensor-temperature", group: "honolulu", id: ["AT006", "ATP079"] },
    { name: "sensor-temperature", group: "lasvegas", id: ["AT007", "ATP080"] },
    { name: "sensor-temperature", group: "hongkong", id: ["AT008", "ATP081"] },
    { name: "sensor-temperature", group: "monaco", id: ["AT008","ATP082"] },

     /* CO2 values:  2.6-1 Inverted, volt sign Sensor: AndorraBob1 */
    { name: "sensor-co2", group: "honolulu", id: ["AndorraBob6"] },
    { name: "sensor-co2", group: "lasvegas", id: ["AndorraBob1"] },
    { name: "sensor-co2", group: "monaco", id: ["AndorraBob5"] },

    /* Humidity values:  0-100% Relative Humidity */

    { name: "sensor-humidity", group: "pompeia", id: ["AT001"] },
    { name: "sensor-humidity", group: "oimiakon", id: ["AT003"] },
    { name: "sensor-humidity", group: "honolulu", id: ["AT006"] },
    { name: "sensor-humidity", group: "lasvegas", id: ["AT007"] },
    { name: "sensor-humidity", group: "hongkong", id: ["AT008"] },
    { name: "sensor-humidity", group: "monaco", id: ["AT009"] },
    
    /* Proximity sensor-proximity*/
    { name: "sensor-proximity", group: "pompeia", id: ["AT001", "ATP074"] },
    { name: "sensor-proximity", group: "oimiakon", id: ["AT003", "ATP075", "ATP076"] },
    { name: "sensor-proximity", group: "honolulu", id: ["AT006", "ATP079"] },
    { name: "sensor-proximity", group: "lasvegas", id: ["AT007", "ATP080"] },
    { name: "sensor-proximity", group: "hongkong", id: ["AT008", "ATP081"] },
    { name: "sensor-proximity", group: "monaco", id: ["AT008","ATP082"] },
    
    /* Pressure sensor-pressure */
    { name: "sensor-pressure", group: "pompeia", id: ["AT001", "ATP074"] },
    { name: "sensor-pressure", group: "oimiakon", id: ["AT003", "ATP075", "ATP076"] },
    { name: "sensor-pressure", group: "honolulu", id: ["AT006", "ATP079"] },
    { name: "sensor-pressure", group: "lasvegas", id: ["AT007", "ATP080"] },
    { name: "sensor-pressure", group: "hongkong", id: ["AT008", "ATP081"] },
    { name: "sensor-pressure", group: "monaco", id: ["AT008","ATP082"] }
  ]; 

  var previousQuery = "";
  var phantom = true;
  var motion = true;
  var timezoneOffsetUTC = 1;
  var daysUntilOldDataWarning = 5;

  $scope.showSensorValue = function(typeOfSensor) {

    var classroom = document.getElementById("img-sensor-" + sessionStorage.getItem("sensors-classroom") );
    var classr = document.getElementById("img-sensors-"+ $scope.classroom);
    //var classr = document.getElementById("img-sensors");

    console.log("ID img-sensors");
    console.log("what's this" + classr);

    // Get the inner DOM of svg file.
    var svgDoc = classr.contentDocument;

    // Hide sensor values queried before.
    if ( previousQuery !== "" ) {
      svgDoc.getElementById( previousQuery ).setAttribute("class", "st0");
    }

    // Get the inner element by id.
    var sensor = svgDoc.getElementById( typeOfSensor );

    if ( sensor ) {

      // Search the sensor IDs for the SVG.
      var sensorIDs = $.grep(sensorCatalog, function( element ){ 
          return element.name === typeOfSensor && element.group === $scope.classroom; 
        }
      );

      var status = sensor.getAttribute("class");
      if ( status === "st0" ) {

        switch ( typeOfSensor ) {

          case "sensor-presence":
            var numberOfSensors = sensorIDs[0].id.length;
            for (var i = 0; i < numberOfSensors; i++) {
              var sensorId = sensorIDs[0].id[i];
              $.ajax({
                  url: 'http://replace.media.mit.edu/andorra/electronautes/php/getActivationCountTodayByName.php?name=' + sensorId,
                  async: false,
                  dataType: 'json',
                  success: function(data) {
                    var count = data["count"];
                    if (count > 0) {
                      svgDoc.getElementById(sensorId+"-presence-icon-0").setAttribute("class", "st0");
                      svgDoc.getElementById(sensorId+"-presence-icon-1").setAttribute("class","sshow");
                      $(svgDoc.getElementById(sensorId+"-sensor-presence-value")).text(count.toString());
                    }
                    else {
                      svgDoc.getElementById(sensorId+"-presence-icon-0").setAttribute("class","sshow");
                      svgDoc.getElementById(sensorId+"-presence-icon-1").setAttribute("class", "st0");
                      $(svgDoc.getElementById(sensorId+"-sensor-presence-value")).text("0");
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
                      svgDoc.getElementById(sensorId+'-motion-icon-0').setAttribute("class", "st0");
                      svgDoc.getElementById(sensorId+'-motion-icon-1').setAttribute("class","sshow");
                      $(svgDoc.getElementById(sensorId+'-value')).text(count.toString());
                    }
                    else {
                      svgDoc.getElementById(sensorId+'-motion-icon-0').setAttribute("class","sshow");
                      svgDoc.getElementById(sensorId+'-motion-icon-1').setAttribute("class", "st0");
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
            // TODO: change the icon depending on the value of the sensor (0,1) if value=1 display-presence-icon-1 else display-presence-icon-0
            for (var i = 0; i < numberOfSensors; i++) {
              if ( phantom ) {
                svgDoc.getElementById(sensorIDs[0].id[i]+'-window-icon-0').setAttribute("class", "st0");
                svgDoc.getElementById(sensorIDs[0].id[i]+'-window-icon-1').setAttribute("class","sshow");
                phantom = false;
                $(svgDoc.getElementById(sensorIDs[0].id[i])).text("1");
              }
              else {
                svgDoc.getElementById(sensorIDs[0].id[i]+'-window-icon-0').setAttribute("class","sshow");
                svgDoc.getElementById(sensorIDs[0].id[i]+'-window-icon-1').setAttribute("class", "st0");
                phantom = true;
                $(svgDoc.getElementById(sensorIDs[0].id[i])).text("0");
              }
            }
            break;
          case "sensor-door":
             var numberOfSensors = sensorIDs[0].id.length;
            // TODO: change the icon depending on the value of the sensor (0,1) if value=1 display-presence-icon-1 else display-presence-icon-0
            for (var i = 0; i < numberOfSensors; i++) {
              if ( phantom ) {
                svgDoc.getElementById(sensorIDs[0].id[i]+'-door-icon-0').setAttribute("class", "st0");
                svgDoc.getElementById(sensorIDs[0].id[i]+'-door-icon-1').setAttribute("class","sshow");
                phantom = false;
                $(svgDoc.getElementById(sensorIDs[0].id[i])).text("1");
              }
              else {
                svgDoc.getElementById(sensorIDs[0].id[i]+'-door-icon-0').setAttribute("class","sshow");
                svgDoc.getElementById(sensorIDs[0].id[i]+'-door-icon-1').setAttribute("class", "st0");
                phantom = true;
                $(svgDoc.getElementById(sensorIDs[0].id[i])).text("0");
              }
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
                url: 'http://replace.media.mit.edu/andorra/electronautes/php/getLastValueByName.php?name=' + sensorId,
                async: false,
                dataType: 'json',
                success: function(data) {
                    $(svgDoc.getElementById(sensorId + "-value")).text(data[0]['value']);
                    var lastDate = data[0]['time'].split('.')[0].replace(/-/g, '/');
                    var lastDateArray = lastDate.split(' ')[0].split('/');
                    var lastTimeArray = lastDate.split(' ')[1].split(':');
                    var localDate = new Date(lastDateArray[0],lastDateArray[1] - 1,lastDateArray[2],lastTimeArray[0],lastTimeArray[1],lastTimeArray[2],0);
                    localDate.setHours(localDate.getHours() + timezoneOffsetUTC);
                    $(svgDoc.getElementById(sensorId + "-lastimevalue")).text(localDate.toISOString().replace('T', ' ').split('.')[0]);
                    var timeDiff = daysUntilOldDataWarning;
                    timeDiff = Math.abs(Date.now() - localDate.getTime());
                    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                    if (diffDays >= daysUntilOldDataWarning) {
                        svgDoc.getElementById(sensorId+"-co2-warning").setAttribute("class","sshow");
                    }
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
                  url: 'http://replace.media.mit.edu/andorra/electronautes/php/getLastValueArrayByName.php?name=' + sensorId,
                  async: false,
                  dataType: 'json',
                  success: function(data) {
                      var values = data[0]['values'];
                      var valuejson = JSON.parse(values);
                      if(valuejson.hasOwnProperty('humidity')) $(svgDoc.getElementById(sensorId + "-sensor-humidity-value")).text(valuejson['humidity'] + '%');
                      var lastDate = data[0]['inserttime'].split('.')[0].replace(/-/g, '/');
                      var lastDateArray = lastDate.split(' ')[0].split('/');
                      var lastTimeArray = lastDate.split(' ')[1].split(':');
                      var localDate = new Date(lastDateArray[0],lastDateArray[1] - 1,lastDateArray[2],lastTimeArray[0],lastTimeArray[1],lastTimeArray[2],0);
                      localDate.setHours(localDate.getHours() + timezoneOffsetUTC);
                      $(svgDoc.getElementById(sensorId + "-sensor-humidity-lastimevalue")).text(localDate.toISOString().replace('T', ' ').split('.')[0]);
                      var timeDiff = daysUntilOldDataWarning;
                      timeDiff = Math.abs(Date.now() - localDate.getTime());
                      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                      if (diffDays >= daysUntilOldDataWarning) {
                          svgDoc.getElementById(sensorId+"-humidity-warning").setAttribute("class","sshow");
                      }
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
                url: 'http://replace.media.mit.edu/andorra/electronautes/php/getLastValueArrayByName.php?name=' + sensorId,
                async: false,
                dataType: 'json',
                success: function(data) {
                  var values = data[0]['values'];
                  var valuejson = JSON.parse(values);
                  $(svgDoc.getElementById(sensorId + "-sensor-temperature-value")).text(valuejson['temperature'] + '° C');
                  var lastDate = data[0]['inserttime'].split('.')[0].replace(/-/g, '/');
                  var lastDateArray = lastDate.split(' ')[0].split('/');
                  var lastTimeArray = lastDate.split(' ')[1].split(':');
                  var localDate = new Date(lastDateArray[0],lastDateArray[1] - 1,lastDateArray[2],lastTimeArray[0],lastTimeArray[1],lastTimeArray[2],0);
                  localDate.setHours(localDate.getHours() + timezoneOffsetUTC);
                  $(svgDoc.getElementById(sensorId + "-sensor-temperature-lastimevalue")).text(localDate.toISOString().replace('T', ' ').split('.')[0]);
                  var timeDiff = daysUntilOldDataWarning;
                  timeDiff = Math.abs(Date.now() - localDate.getTime());
                  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                  if (diffDays >= daysUntilOldDataWarning) {
                      svgDoc.getElementById(sensorId+"-temperature-warning").setAttribute("class","sshow");
                  }
                }
              });
            }
            break;
          case "sensor-proximity":
              // Change value for each sensor.
              var numberOfSensors = sensorIDs[0].id.length;
              for (var i = 0; i < numberOfSensors; i++) {
                  var sensorId = sensorIDs[0].id[i];
                  $.ajax({
                      url: 'http://replace.media.mit.edu/andorra/electronautes/php/getLastValueArrayByName.php?name=' + sensorId,
                      async: false,
                      dataType: 'json',
                      success: function(data) {
                          var values = data[0]['values'];
                          var valuejson = JSON.parse(values);
                          if(valuejson.hasOwnProperty('proximity')) $(svgDoc.getElementById(sensorId + "-sensor-proximity-value")).text((valuejson['proximity']).split(".")[0] + " mm");
                          var lastDate = data[0]['inserttime'].split('.')[0].replace(/-/g, '/');
                          var lastDateArray = lastDate.split(' ')[0].split('/');
                          var lastTimeArray = lastDate.split(' ')[1].split(':');
                          var localDate = new Date(lastDateArray[0], lastDateArray[1] - 1, lastDateArray[2], lastTimeArray[0], lastTimeArray[1], lastTimeArray[2], 0);
                          localDate.setHours(localDate.getHours() + timezoneOffsetUTC);
                          $(svgDoc.getElementById(sensorId + "-sensor-proximity-lastimevalue")).text(localDate.toISOString().replace('T', ' ').split('.')[0]);
                          var timeDiff = daysUntilOldDataWarning;
                          timeDiff = Math.abs(Date.now() - localDate.getTime());
                          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                          if (diffDays >= daysUntilOldDataWarning) {
                              svgDoc.getElementById(sensorId+"-proximity-warning").setAttribute("class","sshow");
                          }
                      }
                  });
              }
              break;
          case "sensor-pressure":
              // Change value for each sensor.
              var numberOfSensors = sensorIDs[0].id.length;
              for (var i = 0; i < numberOfSensors; i++) {
                  var sensorId = sensorIDs[0].id[i];
                  $.ajax({
                      url: 'http://replace.media.mit.edu/andorra/electronautes/php/getLastValueArrayByName.php?name=' + sensorId,
                      async: false,
                      dataType: 'json',
                      success: function(data) {
                          var values = data[0]['values'];
                          var valuejson = JSON.parse(values);
                          if(valuejson.hasOwnProperty('pressure')) $(svgDoc.getElementById(sensorId + "-sensor-pressure-value")).text((valuejson['pressure']).split(".")[0] + " Pa");
                          var lastDate = data[0]['inserttime'].split('.')[0].replace(/-/g, '/');
                          var lastDateArray = lastDate.split(' ')[0].split('/');
                          var lastTimeArray = lastDate.split(' ')[1].split(':');
                          var localDate = new Date(lastDateArray[0],lastDateArray[1] - 1,lastDateArray[2],lastTimeArray[0],lastTimeArray[1],lastTimeArray[2],0);
                          localDate.setHours(localDate.getHours() + timezoneOffsetUTC);
                          $(svgDoc.getElementById(sensorId + "-sensor-pressure-lastimevalue")).text(localDate.toISOString().replace('T', ' ').split('.')[0]);
                          var timeDiff = daysUntilOldDataWarning;
                          timeDiff = Math.abs(Date.now() - localDate.getTime());
                          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                          if (diffDays >= daysUntilOldDataWarning) {
                              svgDoc.getElementById(sensorId+"-pressure-warning").setAttribute("class","sshow");
                          }
                      }
                  });
              }
              break;
            case "sensor-light":
              // Change value for each sensor.
              var numberOfSensors = sensorIDs[0].id.length;
              for (var i = 0; i < numberOfSensors; i++) {
                var sensorId = sensorIDs[0].id[i];
                $.ajax({
                  url: 'http://replace.media.mit.edu/andorra/electronautes/php/getLastValueArrayByName.php?name=' + sensorId,
                  async: false,
                  dataType: 'json',
                  success: function(data) {
                      var values = data[0]['values'];
                      var valuejson = JSON.parse(values);
                      if(valuejson.hasOwnProperty('ambientLight')) $(svgDoc.getElementById(sensorId + "-sensor-light-value")).text((valuejson['ambientLight']).split(".")[0]);
                      var lastDate = data[0]['inserttime'].split('.')[0].replace(/-/g, '/');
                      var lastDateArray = lastDate.split(' ')[0].split('/');
                      var lastTimeArray = lastDate.split(' ')[1].split(':');
                      var localDate = new Date(lastDateArray[0],lastDateArray[1] - 1,lastDateArray[2],lastTimeArray[0],lastTimeArray[1],lastTimeArray[2],0);
                      localDate.setHours(localDate.getHours() + timezoneOffsetUTC);
                      $(svgDoc.getElementById(sensorId + "-sensor-light-lastimevalue")).text(localDate.toISOString().replace('T', ' ').split('.')[0]);
                      var timeDiff = daysUntilOldDataWarning;
                      timeDiff = Math.abs(Date.now() - localDate.getTime());
                      var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                      if (diffDays >= daysUntilOldDataWarning) {
                          svgDoc.getElementById(sensorId+"-light-warning").setAttribute("class","sshow");
                      }
                  }
                });
              }
              break;
        }

        // Display sensors on the SVG.
        sensor.setAttribute("class","sshow");
        previousQuery = typeOfSensor;
      }
    }
  }
  
  // Unselect sensor when looking at another classroom.
  if ( $scope.classroom != null ) {
    $scope.$watch('classroom', function() {
      if ( previousQuery != "" ) {
        var unselectSensor = previousQuery.replace(/sensor-/, "");
        document.getElementById(unselectSensor).checked = false;
      }
    });
  }

});