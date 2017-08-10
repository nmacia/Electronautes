<!--
 Project:       terMITes
 Authors:       Nuria Macia
                Juanita Devis
 Version:       1.1
 Date:          March 2017
 Last modified: April 2017
 -->

        <?php include './php/theme-functions/header.php';?>

        <!-- MAIN -->

        <main>	
			<div class="container no-padding">
                <div class="block no-margin clearfix">
                    <div class="col-xs-12 col-md-7 no-padding">
                        <object data="svg/santacolomasvgforsensors.svg" type="image/svg+xml" id="santasensorssvg"></object>
                    </div>
                    <div class="col-xs-12 col-md-5 no-padding">
                        <div>
                            <div class="welcome-weather-date">      
                                <span id="getDayOfWeek"></span>
                                <span id="getDate"></span>
                                <div id="weather" class="weather"></div>
                            </div>
                        
                            <div class="boxsensors">
                                   
                                <!-- ROW 1 -->   
                                <div class="row-sensor"> 
                                    <div class="button-sensor">
                                        <label>
                                            <input type="radio" name="sensor" id="presence" value="presence" onclick="showSensorValue('sensor-presence');" />
                                            <figure>
                                                <img src="./img/sensors/presence.png" alt="Presence" />
                                                <figcaption>Presence</figcaption>
                                            </figure>
                                        </label>
                                    </div>
                                    <div class="button-sensor">
                                        <label>
                                            <input type="radio" name="sensor" id="motion" value="motion" onclick="showSensorValue('sensor-motion');" />
                                            <figure>
                                                <img src="./img/sensors/motion.png" alt="Motion" />
                                                <figcaption>Motion</figcaption>
                                            </figure>
                                        </label>
                                    </div>
                                    
                                  <div class="button-sensor">
                                        <label>
                                            <input type="radio" name="sensor" id="proximity" value="promixity" onclick="showSensorValue('sensor-proximity');" />
                                            <figure>
                                                <img src="./img/sensors/proximity.png" alt="Proximity" />
                                                <figcaption>Proximity</figcaption>
                                            </figure>
                                        </label>
                                    </div>
                               
                                </div>

                                <!-- ROW 2 -->   
                               <div class="row-sensor">
                                 
                                    <div class="button-sensor">
                                          <label>
                                              <input type="radio" name="sensor" id="window" value="window" onclick="showSensorValue('sensor-window');" />
                                              <figure>
                                                  <img class='img-window-sensor' src="./img/sensors/window.png" alt="Window" />
                                                  <figcaption>Window</figcaption>
                                              </figure>
                                          </label>
                                      </div>
                                    <div class="button-sensor">
                                        <label>
                                            <input type="radio" name="sensor" id="door" value="door" onclick="showSensorValue('sensor-door');" />
                                            <figure>
                                                <img src="./img/sensors/door.png" alt="I feel awesome." />
                                                <figcaption>Door</figcaption>
                                            </figure>
                                        </label>
                                    </div>
                                    <div class="button-sensor">
                                        <label>
                                            <input type="radio" name="sensor" id="curtains" value="curtains" onclick="showSensorValue('sensor-curtains');" />
                                            <figure>
                                                <img src="./img/sensors/curtains.png" alt="I feel normal." />
                                                <figcaption>Curtains</figcaption>
                                            </figure>
                                        </label>
                                    </div>
                                </div>

                                <!-- ROW 3 -->                           
                                <div class="row-sensor">
                                  <!-- Temperature -->
                                  <div class="button-sensor">
                                    <label>
                                      <input type="radio" name="sensor" id="temparature" value="temperature" onclick="showSensorValue('sensor-temperature');" />
                                      <figure>
                                        <img src="./img/sensors/temperature.png" alt="Temperature" />
                                        <figcaption>Temperature</figcaption>
                                      </figure>
                                    </label>
                                  </div>
                                  <!-- Humidity -->
                                  <div class="button-sensor">
                                    <label>
                                      <input type="radio" name="sensor" id="humidity" value="humidity" onclick="showSensorValue('sensor-humidity');" />
                                      <figure>
                                        <img src="./img/sensors/humidity-2.png" alt="Humidity" />
                                        <figcaption>Humidity</figcaption>
                                      </figure>
                                    </label>
                                  </div>
                                  <!-- Pressure -->
                                  <div class="button-sensor">
                                    <label>
                                      <input type="radio" name="sensor" id="pressure" value="pressure" onclick="showSensorValue('sensor-pressure');" />
                                      <figure>
                                        <img src="./img/sensors/pressure.png" alt="Pressure" />
                                        <figcaption>Pressure</figcaption>
                                      </figure>
                                    </label>
                                  </div>            
                                </div>
                                
                                <!-- ROW 4 -->                           
                                <div class="row-sensor">  
                                  <!-- CO2 -->
                                  <div class="button-sensor">
                                    <label>
                                      <input type="radio" name="sensor" id="co2" value="co2" onclick="showSensorValue('sensor-co2');" />
                                      <figure>
                                        <img src="./img/sensors/co2.png" alt="CO2" />
                                        <figcaption>CO2</figcaption>
                                      </figure>
                                    </label>
                                  </div>
                                  <!--Light -->
                                  <div class="button-sensor">
                                    <label>
                                      <input type="radio" name="sensor" id="light" value="light" onclick="showSensorValue('sensor-light');" />
                                      <figure>
                                        <img src="./img/sensors/light.png" alt="I feel energetic." />
                                        <figcaption>Light</figcaption>
                                      </figure>
                                    </label>
                                  </div>
                                  <!-- Game -->
                                 <!-- <div class="button-relate">
                                    <label>
                                      <input type="button" name="relate" id="relate" value="relate" onclick="window.location.href='relate.php'" />
                                      <figure>
                                        <img src="./img/sensors/humidity.png" alt="Relate feelings and sensors" />
                                        <figcaption>Relate</figcaption>
                                      </figure>
                                    </label>
                                  </div>-->
                                </div>
                                
                            </div> 
                          <!-- Game -->
                          <input type="button" class="btn pull-right button-relate" name="relate" value="relate" onclick="window.location.href='relate.php'" />
                          
                        </div>   
                    </div>
                </div>
            </div>       
        </main>

        <?php include './php/theme-functions/footer.php';?>   