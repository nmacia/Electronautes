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
                      
                      <div class="r-emotions">
                     
                      </div>
                      
                      <div class="r-sensorsbox-and-dragbox">
                        
                          
                        <div class="r-sensors-side" id="left-buttonbox-sensors" ondrop="drop(event)" ondragover="allowDrop(event)">
                          
                          <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-presence">
                          
                                          <label>
                                              <input type="radio" name="sensor" id="presence" value="presence" />
                                              <figure>
                                                  <img src="./img/sensors/presence.png" alt="Presence" />
                                                  <figcaption>Presence</figcaption>
                                              </figure>
                                          </label>
                          </div>
                        <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-motion">
                          <label>
                            <input type="radio" name="sensor" id="motion" value="motion" />
                            <figure>
                               <img src="./img/sensors/motion.png" alt="Motion" />
                                    <figcaption>Motion</figcaption>
                            </figure>
                          </label>
                        </div>
                        <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-proximity">
                          <label>
                                            <input type="radio" name="sensor" id="proximity" value="promixity" />
                                            <figure>
                                                <img src="./img/sensors/proximity.png" alt="Proximity" />
                                                <figcaption>Proximity</figcaption>
                                            </figure>
                                        </label>
                        </div>
                          
                        <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-window">
                         <label>
                                              <input type="radio" name="sensor" id="window" value="window" />
                                              <figure>
                                                  <img class='img-window-sensor' src="./img/sensors/window.png" alt="Window" />
                                                  <figcaption>Window</figcaption>
                                              </figure>
                                          </label> 
                        </div>
                        <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-door">
                          <label>
                                            <input type="radio" name="sensor" id="door" value="door" />
                                            <figure>
                                                <img src="./img/sensors/door.png" alt="I feel awesome." />
                                                <figcaption>Door</figcaption>
                                            </figure>
                                        </label>
                          
                        </div>
                        <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-curtains">
                         <label>
                                            <input type="radio" name="sensor" id="curtains" value="curtains" />
                                            <figure>
                                                <img src="./img/sensors/curtains.png" alt="I feel normal." />
                                                <figcaption>Curtains</figcaption>
                                            </figure>
                                        </label> 
                        </div>
                        
                      </div>
                      
                        <div class="r-dragbox" id="center-dragbox-forsensors" ondrop="drop(event)" ondragover="allowDrop(event)">
                        </div>
                      
                        <div class="r-sensors-side" id="right-buttonbox-sensors" ondrop="drop(event)" ondragover="allowDrop(event)">
                        
                        <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-temperature">
                          <label>
                             <input type="radio" name="sensor" id="temparature" value="temperature" />
                                <figure>
                                    <img src="./img/sensors/temperature.png" alt="Temperature" />
                                    <figcaption>Temperature</figcaption>
                                </figure>
                          </label>
                          
                        </div>
                        
                        <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-humidity">
                            <label>
                              <input type="radio" name="sensor" id="humidity" value="humidity" />
                                <figure>
                                  <img src="./img/sensors/humidity-2.png" alt="Humidity" />
                                  <figcaption>Humidity</figcaption>
                                </figure>
                            </label>
                          
                        </div>
                         <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-pressure">
                           <label>
                              <input type="radio" name="sensor" id="pressure" value="pressure" />
                              <figure>
                                  <img src="./img/sensors/pressure.png" alt="Pressure" />
                                  <figcaption>Pressure</figcaption>
                              </figure>
                          </label>
                          
                        </div>
                         <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-co2">
                           <label>
                                <input type="radio" name="sensor" id="co2" value="co2" />
                                <figure>
                                    <img src="./img/sensors/co2.png" alt="CO2" />
                                    <figcaption>CO2</figcaption>
                                </figure>
                          </label>
                          
                        </div>
                         <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-light">
                           <label>
                              <input type="radio" name="sensor" id="light" value="light" />
                              <figure>
                                  <img src="./img/sensors/light.png" alt="I feel energetic." />
                                  <figcaption>Light</figcaption>
                              </figure>
                          </label>
                          
                        </div>
                    
                      </div>
                        
                      </div>
                      
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
                                    <div class="button-sensor">
                                        <label>
                                            <input type="radio" name="sensor" id="temparature" value="temperature" onclick="showSensorValue('sensor-temperature');" />
                                            <figure>
                                                <img src="./img/sensors/temperature.png" alt="Temperature" />
                                                <figcaption>Temperature</figcaption>
                                            </figure>
                                        </label>
                                    </div>
                                  <div class="button-sensor">
                                        <label>
                                            <input type="radio" name="sensor" id="humidity" value="humidity" onclick="showSensorValue('sensor-humidity');" />
                                            <figure>
                                                <img src="./img/sensors/humidity-2.png" alt="Humidity" />
                                                <figcaption>Humidity</figcaption>
                                            </figure>
                                        </label>
                                    </div>
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
                                    
                                   <div class="button-sensor">
                                        <label>
                                            <input type="radio" name="sensor" id="co2" value="co2" onclick="showSensorValue('sensor-co2');" />
                                            <figure>
                                                <img src="./img/sensors/co2.png" alt="CO2" />
                                                <figcaption>CO2</figcaption>
                                            </figure>
                                        </label>
                                    </div>
                                  
                                    <div class="button-sensor">
                                        <label>
                                            <input type="radio" name="sensor" id="light" value="light" onclick="showSensorValue('sensor-light');" />
                                            <figure>
                                                <img src="./img/sensors/light.png" alt="I feel energetic." />
                                                <figcaption>Light</figcaption>
                                            </figure>
                                        </label>
                                    </div>
                                  
                                  
                                    <div class="button-sensor">
                                        <label>
                                            <input type="radio" name="sensor" id="proximity" value="promixity" onclick="showSensorValue('sensor-proximity');" />
                                            <figure>
                                                <img src="./img/errors/bug.png" alt="Report bug"/>
                                                <figcaption>Report bug</figcaption>
                                            </figure>
                                        </label>
                                    </div>
                                </div>
                                 
                                
                            </div>        
                        </div>   
                    </div>
                </div>
            </div>       
        </main>

        <?php include './php/theme-functions/footer.php';?>
        
    </body>    
