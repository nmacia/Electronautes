<!--
 Project:       terMITes
 Authors:       Nuria Macia
                  Juanita Devis
 Version:       1.1
 Date:          March 2017
 Last modified: August 2017
 -->

    <?php include './php/theme-functions/header.php';?>

    <!-- MAIN -->

    <main>	
        <div class="container no-padding">
            <div class="block no-margin clearfix">
                
                <!-- Drag and drop -->
                <div class="col-xs-12 col-md-7 no-padding">

                    <div class="r-emotions">
                    </div>

                    <div class="r-sensorsbox-and-dragbox">

                        <!-- Left side sensors -->
                        <div class="r-sensors-side" id="left-buttonbox-sensors" ondrop="drop(event)" ondragover="allowDrop(event)">

                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-presence">
                                  <label>
                                      <figure>
                                          <img src="./img/sensors/presence.png" alt="Presence" />
                                          <figcaption>Presence</figcaption>
                                      </figure>
                                  </label>
                            </div>
                  
                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-motion">
                                <label>
                                    <figure>
                                        <img src="./img/sensors/motion.png" alt="Motion" />
                                        <figcaption>Motion</figcaption>
                                    </figure>
                                </label>
                            </div>
                    
                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-proximity">
                                <label>
                                  
                                    <figure>
                                        <img src="./img/sensors/proximity.png" alt="Proximity" />
                                        <figcaption>Proximity</figcaption>
                                    </figure>
                                </label>
                            </div>

                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-window">
                                <label>
                                    
                                      <figure>
                                          <img class='img-window-sensor' src="./img/sensors/window.png" alt="Window" />
                                          <figcaption>Window</figcaption>
                                      </figure>
                                </label> 
                            </div>
                  
                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-door">
                                <label>
  
                                    <figure>
                                        <img src="./img/sensors/door.png" alt="I feel awesome." />
                                        <figcaption>Door</figcaption>
                                    </figure>
                                </label>
                            </div>
                            
                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-curtains">
                                <label>
                                   
                                    <figure>
                                        <img src="./img/sensors/curtains.png" alt="I feel normal." />
                                        <figcaption>Curtains</figcaption>
                                    </figure>
                                </label> 
                            </div>

                        </div>

                        <!-- Dropzone -->    
                        <div class="r-dragbox" id="center-dragbox-forsensors" ondrop="drop(event)" ondragover="allowDrop(event)">
                        </div>

                        <!-- Right side sensors -->
                        <div class="r-sensors-side" id="right-buttonbox-sensors" ondrop="drop(event)" ondragover="allowDrop(event)">

                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-temperature">
                                <label>
                                    
                                    <figure>
                                        <img src="./img/sensors/temperature.png" alt="Temperature" />
                                        <figcaption>Temperature</figcaption>
                                    </figure>
                                </label>
                            </div>

                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-humidity">
                                <label>
                                   
                                    <figure>
                                        <img src="./img/sensors/humidity-2.png" alt="Humidity" />
                                        <figcaption>Humidity</figcaption>
                                    </figure>
                                </label>
                            </div>
                     
                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-pressure">
                                <label>
                                    
                                    <figure>
                                        <img src="./img/sensors/pressure.png" alt="Pressure" />
                                        <figcaption>Pressure</figcaption>
                                    </figure>
                                </label>
                            </div>
                    
                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-co2">
                                <label>
                                   
                                    <figure>
                                        <img src="./img/sensors/co2.png" alt="CO2" />
                                        <figcaption>CO2</figcaption>
                                    </figure>
                                </label>
                            </div>
                     
                            <div class="r-button-sensor" draggable="true" ondragstart="drag(event)" id="drag-light">
                                <label>
                                   
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
                    </div> 
                  <div class="boxbuttonssurvey">
                    <div class="c-group-box">
                    <div class="circle-group">
                    </div>
                    <div class="circle-group">
                    </div>
                    <div class="circle-group">
                    </div>
                    <div class="circle-group">
                    </div>
                      </div>
                    <input type="submit" class="btn pull-right" name="submit" value="Submit" onclick="return getForm()" /> 
                  </div>
                </div>
           
            </div>
        </div>       
    </main>

    <?php include './php/theme-functions/footer.php';?>