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
    case '28' : color = "#3E6A74"
              break;
    case '32' : color = "##00ccff"
              break;
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








