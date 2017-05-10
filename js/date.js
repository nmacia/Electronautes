/*
 Project:       terMITes
 Authors:       Nuria Macia
                Juanita Devis
 Version:       2.2
 Date:          March 2017
 Last modified: May 2017 
 */


var tday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var tmonth = ['January','February','March','April','May','June','July','August','September','October','November','December']; 

// Retrieve date.
window.onload = function getClock(){
  var today = new Date();
  today.setTime(today.getTime());   
  document.getElementById('getDate').innerHTML = tmonth[today.getMonth()] + " " + today.getDate()+ ", " + today.getFullYear();
  document.getElementById('getDayOfWeek').innerHTML = tday[today.getDay()];

}

function validatePassword( password ) {  
  if ( password === "12345" ) {
    return true;
  }
  else {    
     return false;
  }
}

function validateRadio( radios ) {
  for ( i = 0; i < radios.length; ++ i) {
      if (radios [i].checked) return true;
  }
  return false;
}

function validateForm() { 
  var answerMood = validateRadio(document.forms["survey"]["mood"]);
  var answerEnergy = validateRadio(document.forms["survey"]["energy"]);
  var answerTemperature = validateRadio(document.forms["survey"]["temperature"]);
  var answerNoise = validateRadio(document.forms["survey"]["noise"]);
  var password = document.getElementById("password").value;

  var authentication = true;

  // Init error messages.
  document.getElementById("error-mood").innerHTML = "";
  document.getElementById("error-energy").innerHTML = "";
  document.getElementById("error-temperature").innerHTML = "";
  document.getElementById("error-noise").innerHTML = "";
  document.getElementById("error").innerHTML = "";

  // Display error messages when radios are not checked or password is incorrect.
  if ( !answerMood ) {
    document.getElementById("error-mood").innerHTML = "You forgot to answer this.";
  }
  if ( !answerEnergy ) {
    document.getElementById("error-energy").innerHTML = "You forgot to answer this.";
  }
  if ( !answerTemperature ) {
    document.getElementById("error-temperature").innerHTML = "You forgot to answer this.";
  }
  if ( !answerNoise ) {
    document.getElementById("error-noise").innerHTML = "You forgot to answer this.";
  }
  
  if ( !validatePassword( password ) ) {
    authentication = false;
    document.getElementById("error").innerHTML = "Wrong password";
  }
  
  if( answerMood && answerEnergy && answerTemperature && answerNoise && authentication) {
    return true;
  }

  return false;
}

function getForm() { 
  var mood = document.querySelector('input[name = "mood"]:checked').value;
  var energy = document.querySelector('input[name = "energy"]:checked').value;
  var temperature = document.querySelector('input[name = "temperature"]:checked').value;
  var noise = document.querySelector('input[name = "noise"]:checked').value;
  var password = document.getElementById("password").value;
  writeUserData(mood, energy, temperature, noise, password);
}

function writeUserData(mood, energy, temperature, noise, password) {
  
  var dt = new Date();

  firebase.database().ref('entry/' + dt).set({
    mood: mood,
    energy: energy,
    temperature : temperature,
    noise : noise,
    class : password
  });
}

//function changeBackground ( weatherCode ) {
//
//  var color = "#38BFB3";
//
//  switch ( weatherCode ) {
//    //Rain showers 10, 11,12, 40 color #3E6A74
//    case '10': case '11': case '12': case '40': 
//            color = "#3E6A74"
//            break;
//    //Sunny 32, 34 #FDCF07
//    case '32': case '34':
//            color = "#FDCF07"
//            break;
//    //Snow 13, 14, 15, 16, 41,42, 43, 46 color #CCCEDA
//    case '13': case '14': case '15': case '16': case '41': case '42': case '43': case '46':
//            color = "#CCCEDA"
//            break;     
//    //Tunderstorms 1, 3, 4,37, 38, 39, 45, 47 color #445197
//    case '1': case '3': case '4': case '37': case '38': case '39': case '45': case '47':
//            color = "#445197"
//            break; 
//    //Hail 17, 35, #517897 #6b6b6b
//     case '17': case '35':
//            color = "#6b6b6b"
//            break;
//    //Foggy 20 #7A7A70
//      case '20':
//            color = "#6b6b6b"
//            break;
//    //Haze 21 #F4AD2F
//     case '21':
//            color = "#F59117"
//            break;
//    //Cold  25 #8EB1C4
//    case '25':
//            color = "#8EB1C4"
//            break;
//    //Hot 36 #F56544
//          case '36':
//            color = "#F56544"
//            break;
//    //Cloudy 26, 27, 44 #A4A09D
//          case '26': case '27': case '44':
//            color = "#A4A09D"
//            break;
//    //No asociation 0, 2, 3200
//    case '30' : color = "#ffcc00"
//              break;
//    
//  }
//
//  document.body.style.background = color;
// 
// }

// returns the graphical parameters (for now background color and image filename) of a given weather code
function getWeatherGraphicsParams( weatherCode ) {  
    // TODO: if previously computed weatherParams are cached, performance can be improved
    
    var weatherGraphics = { };
    var color = "#ffffff";
    var img = ""; // what is the default image?
    
    switch ( weatherCode ) {

        //Rain showers 10, 11, 12, 40 color #3E6A74
        case '10': case '11': case '12': case '40': 
                color = "#3E6A74";
                img = "rain.png";
                break;
        //Sunny 32, 34 #FDCF07
        case '32': case '34':
                color = "#FDCF07";
                img = "sunny.png";
                break;
        //Snow 13, 14, 15, 16, 41,42, 43, 46 color #CCCEDA
        case '13': case '14': case '15': case '16': case '41': case '42': case '43': case '46':
                color = "#CCCEDA";
                img = "snow.png";
                break;     
        //Thunderstorms 1, 3, 4,37, 38, 39, 45, 47 color #445197
        case '1': case '3': case '4': case '37': case '38': case '39': case '45': case '47':
                color = "#445197";
                img = "thunderstorms.png";
                break; 
        //Hail 17, 35, #6b6b6b
         case '17': case '35':
                color = "#6b6b6b";
                img = "hail.png";
                break;
        //Foggy 20 #7A7A70
          case '20':
                color = "#6b6b6b";
                img = "foggy.png";
                break;
        //Haze Smoky 21, 22 #F4AD2F
         case '21': case '22':
                color = "#F59117";
                img = "haze.png";
                break;
        //Cold  25 #8EB1C4
        case '25':
                color = "#8EB1C4";
                img = "cold.png";
                break;
        //Hot 36 #F56544
        case '36':
                color = "#F56544";
                img = "hot.png";
                break;
        //Cloudy 26, 27, 44 #A4A09D
        case '26': case '27': case '44':
                color = "#A4A09D";
                img = "cloudy.png";
                break;
        //Drizzle 8, 9 #2F431E
        case '8': case '9':
                color = "#506250";
                img = "drizzle.png";
                break;
        //Mixed Rain Snow Sleet 5, 6, 7, 18 #859CA7
        case '5': case '6': case '7': case '18':
                color = "#859CA7";
                img = "mixed-rss.png";
                break;
        //Windy 23, 24 #648b3a
        case '5': case '6': case '7': case '18':
                color = "#648b3a";
                img = "windy.gif";
                break;
        //Mostly_cloudy_day 28 #bcd1f0
        case '28':
                color = "#bcd1f0";
                img = "mostly-cloudy-day.png";
                break;
        //Mostly_cloudy_night 27, 29 #4f80ba
        case '27': case '29':
                color = "#4f80ba";
                img = "mostly-cloudy-night.png";
                break;
        //Partly_cloudy_day 30 #DFBF39
        case '30':
                color = "#DFBF39";
                img = "partly-cloudy-day.png";
                break;
        //Clear_night 31, 33 #312991
        case '31': case '33':
                color = "#312991";
                img = "clear-night.png";
                break;
        //Dust 19  #d69a5b
        case '19':
                color = "#d69a5b";
                img = "dust.png";
                break;    
            
        //No asociation 0, 2, 3200 candiate for ups color #b71111
        case '3200': case '0': case '2': 
                color = "#ffcc00";
                img = "ups.png";
                break;

    }
    
    weatherGraphics.color = color;
    weatherGraphics.img = img;
    
    return weatherGraphics;     
}

function changeBackground ( color ) {
    // Change color background body.
    $('body').css('background', color);
    // Change color background menu for mobile.
    $('#nav ul').css('background', color);
}

// Catalog of sensors installed and their IDs in the SVG. 
var sensorCatalog = [
    /* Presence values: 0 or 1  Sensors: AndorraPIR1 */
    { name: "sensor-presence", id: ["pres1-value"] },
    /* Motion values: 0.00-0.10 Do we need to scale them? Sensors: AndorraMotion1, AndorraMotion2 */
    { name: "sensor-motion", id: ["mot1-value", "mot2-value"] },
    /* Window values: 0 or 1  Sensors form left to right: AndorraMITes-0769, AndorraMITes-1012,AndorraMITes-0109, AndorraMITes-1001, AndorraMITes-333 */
    { name: "sensor-window", id: ["w0769-value", "w1012-value", "w0109-value", "w1001-value","w333-value" ] },
    /* Door values: 0 or 1 close  Sensors: Reed2 */
    { name: "sensor-door", id: ["door2-value"] },
    /* Light values: 0-1250  Sensors: AndorraLight2, AndorraLight3, AndorraLight4,AndorraLight5, AndorraLight6 */
    { name: "sensor-light", id: ["light2-value_1_","light3-value_1_","light4-value_1_","light4-value_1_","light5-value_1_","light6-value_1_"] },
     /* Curtains values: 0 or 1 move  Sensors form left to right: AndorraMITes-0210, AndorraMITes-0995, AndorraMITes-0066,AndorraMITes-0325*/
    { name: "sensor-curtains", id: ["cur0210-value","cur0995-value","cur0066-value","cur0325-value"] },
    /* Temperature values: 0-30  Sensors: AndorraLight2, AndorraLight3, AndorraLight4,AndorraLight5, AndorraLight6 */
    { name: "sensor-temperature", id: ["temp2-value_1_","temp3-value_1_","temp4-value_1_","temp4-value_1_","temp5-value_1_","temp6-value_1_"] },
    /* CO2 values:  2.6-1 Inverted, volt sign Sensor: AndorraBob1 */
    { name: "sensor-co2", id: ["co21-value"] },
    /* Humidity values:  0-100%RH Sensor: AndorraHumidity1 */
    { name: "sensor-humidity", id: ["hum1-value"] }
]; 

var previousQuery = "";

function showSensorValue ( typeOfSensor ) {

    var classroom = document.getElementById("santasensorssvg");
    
    // Get the inner DOM of svg file.
    var svgDoc = classroom.contentDocument;

    // Hide sensor values queried before.
    if ( previousQuery !== "" ) {
      svgDoc.getElementById( previousQuery ).setAttribute("display","none");
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
          // Change value for each sensor.
          var numberOfSensors = sensorIDs[0].id.length;
          for (var i = 0; i < numberOfSensors; i++) {
            $(svgDoc.getElementById(sensorIDs[0].id[i])).text("12°C");
          }
          // Display sensors on the SVG.
          sensor.setAttribute("display","block");
          previousQuery = typeOfSensor;
      }
    
    }

}

$(document).ready(function() {

 var weatherCode = 0;

 $.simpleWeather({
    //zipcode: 'AD500',
    //woeid: '2357536', //2357536
    location: 'Santa Coloma, Andorra',
    unit: 'f',
    success: function(weather) {
        weatherCode = weather.code;
        var weatherGraphics = getWeatherGraphicsParams( weatherCode );
        
        /* Associate weatherGraphics to the courrent weather. */
        html = '<h2><img class="weather-icon" src="img/weather/'+weatherGraphics.img+'">'+weather.alt.temp+'&deg;C '+weather.currently+'</h2>';
        html += '<div class="weather-region">'+weather.city+', '+weather.region+'</div>';
        
        changeBackground( weatherGraphics.color );

        $("#weather").html(html);
    },
    error: function(error) {
      //$("#weather").html('<p>'+error+'</p>'); // Error message from plugin.
      $("#weather").html('<p>OOPS!</p>');
    
    }
  });
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCx9BjCK5xNx7q7sdD2EjCgdfjqesQSdTY",
    authDomain: "termites-752ca.firebaseapp.com",
    databaseURL: "https://termites-752ca.firebaseio.com",
    projectId: "termites-752ca",
    storageBucket: "termites-752ca.appspot.com",
    messagingSenderId: "58714056226"
  };
  firebase.initializeApp(config);
  
  // Get a reference to the database service
  var database = firebase.database();

});










