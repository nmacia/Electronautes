/*
 Project:       terMITes
 Authors:       Nuria Macia
                Juanita Devis
 Version:       1.1
 Date:          March 2017
 Last modified: April 2017 
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

function changeBackground ( weatherCode ) {

  var color = "#38BFB3";

  switch ( weatherCode ) {
    //Rain showers 10, 11,12, 40 color #3E6A74
    case '10': case '11': case '12': case '40': 
            color = "#3E6A74"
            break;
    //Sunny 32, 34 #FDCF07
    case '32': case '34':
            color = "#FDCF07"
            break;
    //Snow 13, 14, 15, 16, 41,42, 43, 46 color #CCCEDA
    case '13': case '14': case '15': case '16': case '41': case '42': case '43': case '46':
            color = "#CCCEDA"
            break;     
    //Tunderstorms 1, 3, 4,37, 38, 39, 45, 47 color #445197
    case '1': case '3': case '4': case '37': case '38': case '39': case '45': case '47':
            color = "#445197"
            break; 
    //Hail 17, 35, #517897 #6b6b6b
     case '17': case '35':
            color = "#6b6b6b"
            break;
    //Foggy 20 #7A7A70
      case '20':
            color = "#6b6b6b"
            break;
    //Haze 21 #F4AD2F
     case '21':
            color = "#F59117"
            break;
    //Cold  25 #8EB1C4
    case '25':
            color = "#8EB1C4"
            break;
    //Hot 36 #F56544
          case '36':
            color = "#F56544"
            break;
    //Cludy 26, 27, 44 
    //No asociation 0, 2, 3200
    case '30' : color = "#ffcc00"
              break;
    
  }

  document.body.style.background = color;
 
 }

$(document).ready(function() {

 var weatherCode = 0;

 $.simpleWeather({
    //zipcode: 'AD500',
    //woeid: '2357536', //2357536
    location: 'Santa Coloma, Andorra',
    unit: 'f',
    success: function(weather) {
        /*Snow 13, 14, 15, 16, 41,42, 43, 46 (creo que se deberia asociar los numeros a Snow, no un numero a la foto) */
      html = '<h2><img class="weather-icon" src="img/weather/'+weather.code+'.png">'+weather.alt.temp+'&deg;C '+weather.currently+'</h2>';
      html += '<div class="weather-region">'+weather.city+', '+weather.region+'</div>';
      weatherCode = weather.code;
      changeBackground( weatherCode );

      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
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








