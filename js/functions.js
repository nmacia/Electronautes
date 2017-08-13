/*
 Project:       terMITes
 Authors:       Nuria Macia
                Juanita Devis
                Jason Nawyn
 Version:       2.2
 Date:          August 2017
 */





window.onload = function initApp() {
  
  // Retrieve date.
  var today = new Date();
  today.setTime(today.getTime());   
  document.getElementById('getDate').innerHTML = tmonth[today.getMonth()] + " " + today.getDate() + ", " + today.getFullYear();
  document.getElementById('getDayOfWeek').innerHTML = tday[today.getDay()];

  formatSVG('img-esfinx');
  formatSVG('img-kremlin');
  formatSVG('img-bigben');
  formatSVG('img-moais');
  formatSVG('img-atonium');
  formatSVG('img-kheops');
  formatSVG('img-sensors-esfinx');
  formatSVG('img-sensors-kremlin');
  formatSVG('img-sensors-bigben');
  formatSVG('img-sensors-moais');
  formatSVG('img-sensors-atonium');
  formatSVG('img-sensors-kheops');
  formatSVG('img-sensors-esfinx');
  
}

$(document).ready(function() {

  $("#survey-menu li").click(function() {
    window.sessionStorage['survey-classroom'] = this.id;
  });
  
  $("#sensors-menu li").click(function() {
    window.sessionStorage['sensors-classroom'] = this.id;
  });

});
