'use strict';

angular.module('electronautes').directive('tWeather', ($rootScope) => {
  return {
    restrict: 'EA',
    template: '<div class="weather-panel">' +
              '<span id="getDayOfWeek">{{date | date:"EEEE"}} </span>' +
              '<span id="getDate">{{date | date:"MMMM d, y"}}</span>' +
              '<div id="weather" class="weather" ng-if="weather">' +
                '<h2>' +
                  '<img class="weather-icon" src="{{ weatherGraphics.$img }}">' +
                  '{{ weather.alt.temp }} &deg;C {{ weather.currently }}' +
                '</h2>' +
                '<div class="weather-region">' +
                '{{ weather.city }}, {{ weather.region }}' +
                '</div>' + 
                '</div>' + 
              '</div>',
    link: (controller) => {
      // DATE
      // Retrieve date.
      $rootScope.date = new Date();

      // WEATHER
      // Return the graphical parameters (for now background color and image filename) of a given weather code
      function getWeatherGraphicsParams (weatherCode) {  
        // TODO: if previously computed weatherParams are cached, performance can be improved
        var weatherGraphics = { };
        var color = "#ffffff";
        var img = ""; // what is the default image?

        switch (weatherCode) {
          //Rain showers 10, 11, 12, 40 color #3E6A74
          case "10": 
          case "11": 
          case "12": 
          case "40": 
            color = "#3e6a74";
            img = "rain.png";
            addRainToBackground( color )
            break;
          //Sunny 32, 34 #FDCF07
          case "32": 
          case "34":
            color = "#fcdf07";
            img = "sunny.png";
            break;
          //Snow 13, 14, 15, 16, 41,42, 43, 46 color #CCCEDA
          case "13": 
          case "14": 
          case "15":
          case "16":
          case "41":
          case "42":
          case "43":
          case "46":
            color = "#ccceda";
            img = "snow.png";
            break;     
          //Thunderstorms 1, 3, 4,37, 38, 39, 45, 47 color #445197
          case "1": 
          case "3": 
          case "4": 
          case "37": 
          case "38": 
          case "39": 
          case "45": 
          case "47":
            color = "#445197";
            img = "thunderstorms.png";
            addRainToBackground( color )
            break; 
          //Hail 17, 35, #6b6b6b
          case "17": 
          case "35":
            color = "#6b6b6b";
            img = "hail.png";
            break;
          //Foggy 20 #7A7A70
          case "20":
            color = "#6b6b6b";
            img = "foggy.png";
            break;
          //Haze Smoky 21, 22 #F4AD2F
          case "21":
          case "22":
            color = "#f59117";
            img = "haze.png";
            break;
          //Cold  25 #8EB1C4
          case "25":
            color = "#8Eb1c4";
            img = "cold.png";
            break;
          //Hot 36 #F56544
          case "36":
            color = "#f56544";
            img = "hot.png";
            break;
          //Cloudy 26, 27, 44 #A4A09D
          case "26": 
          case "27": 
          case "44":
            color = "#a4a09d";
            img = "cloudy.png";
            break;
          //Drizzle 8, 9 #2F431E
          case "8":
          case "9":
            color = "#506250";
            img = "drizzle.png";
            break;
          //Mixed Rain Snow Sleet 5, 6, 7, 18 #859CA7
          case "5":
          case "6":
          case "7":
          case "18":
            color = "#859ca7";
            img = "mixed-rss.png";
            break;
          //Windy 23, 24 #648b3a
          case "23": 
          case "24":
            color = "#648b3a";
            img = "windy.gif";
            break;
          //Mostly_cloudy_day 28 #bcd1f0
          case "28":
            color = "#bcd1f0";
            img = "mostly-cloudy-day.png";
            break;
          //Mostly_cloudy_night 27, 29 #4f80ba
          case "27":
          case "29":
            color = "#4f80ba";
            img = "mostly-cloudy-night.png";
            break;
          //Partly_cloudy_day 30 #DFBF39
          case "30":
            color = "#dfbf39";
            img = "partly-cloudy-day.png";
            break;
          //Clear_night 31, 33 #312991
          case "31":
          case "33":
            color = "#312991";
            img = "clear-night.png";
            break;
          //Dust 19  #d69a5b
          case "19":
            color = "#d69a5b";
            img = "dust.png";
            break;           
          //No asociation 0, 2, 3200 candiate for ups color #b71111
          // Add i.error "There was a problem retrieving the latest weather information." to this case
          case "3200":
          case "0":
          case "2": 
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
        $("body").css("background", color);

        //Javascript Browser Detection - Mobile    
        if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          // Change color background menu for mobile.
          $("#nav ul").css("background", color);
        }
      }

      var weatherCode = 0;

      $.simpleWeather({
        //zipcode: "AD500",
        //woeid: "2357536", //2357536
        location: "Santa Coloma, Andorra",
        unit: "f",
        success: function(weather) {
          weatherCode = weather.code;
          $rootScope.weather = weather;
          $rootScope.weatherGraphics = getWeatherGraphicsParams( weatherCode );

          /* Associate weatherGraphics to the courrent weather. */
          // var html = '<h2><img class="weather-icon" src="img/weather/'+weatherGraphics.img+'">'+weather.alt.temp+'&deg;C '+weather.currently+'</h2>';
          // html += '<div class="weather-region">'+weather.city+', '+weather.region+'</div>';
          $rootScope.weatherGraphics.$img = 'img/weather/' + $rootScope.weatherGraphics.img;
          changeBackground( $rootScope.weatherGraphics.color );
          // $("#weather").html(html);
          $rootScope.$digest();
        },
        error: function(error) {
          //$("#weather").html('<p>'+error+'</p>'); // Error message from plugin.
          $("#weather").html("<p>OOPS!</p>");
        }
      });
    }
  };
});