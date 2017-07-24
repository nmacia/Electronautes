<!--
 Project:       terMITes
 Authors:       Nuria Macia
                Juanita Devis
 Version:       1.1
 Date:          March 2017
 Last modified: July 2017
 -->

        <?php include './php/theme-functions/header.php';?>

        <!-- MAIN -->

        <main>	
			<div class="container no-padding">
                <div class="block no-margin clearfix">
                    <div class="col-xs-12 col-md-7 no-padding">
                        <object data="svg/santacolomaill.svg" type="image/svg+xml" id="santasvg"></object>
                    </div>
                    <div class="col-xs-12 col-md-5 no-padding">
                        <div>
                            <div class="welcome-weather-date">      
                                <span id="getDayOfWeek"></span>
                                <span id="getDate"></span>
                                <div id="weather" class="weather"></div>
                            </div>
                        
                            <div class="boxbuttonssurvey">
                                <form name="survey" id="survey" method="post" action="" onsubmit="return validateForm()">
                                   
                                    <!-- MOOD -->   
                                    <p class="emotion-title">MOOD<span id="error-mood"></span></p>   
                                    <div class="rowsurvey"> 
                                        <div class="buttonsurvey-mood">
                                            <label>
                                                <input type="radio" name="mood" id="happy" value="happy" />
                                                <figure>
                                                    <img src="./img/emotions/mood-happy.png" alt="I'm happy." />
                                                    <figcaption>Happy</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                        <div class="buttonsurvey-mood">
                                            <label>
                                                <input type="radio" name="mood" id="ok" value="ok" />    
                                                <figure>
                                                    <img src="./img/emotions/mood-normal.png" alt="I'm ok." />
                                                    <figcaption>Sensitive</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                        <div class="buttonsurvey-mood">
                                            <label>
                                                <input type="radio" name="mood" id="sad" value="sad" />
                                                 <figure>
                                                    <img src="./img/emotions/mood-sad.png" alt="I'm sad." />
                                                    <figcaption>Sad</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                        <div class="buttonsurvey-mood">
                                            <label>
                                                <input type="radio" name="mood" id="angry" value="angry" />
                                                <figure>
                                                    <img src="./img/emotions/mood-angry.png" alt="I'm angry." />
                                                    <figcaption>Angry</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                    </div>
                                   
                                    <!-- ENERGY -->
                                    <p class="emotion-title">ENERGY<span id="error-energy"></span></p>   
                                    <div class="rowsurvey">
                                        <div class="buttonsurvey-energy">
                                            <label>
                                                <input type="radio" name="energy" id="super" value="super" />
                                                <figure>
                                                    <img src="./img/emotions/energy-superenergetic.png" alt="I feel awesome." />
                                                    <figcaption>Super Energetic</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                        <div class="buttonsurvey-energy">
                                            <label>
                                                <input type="radio" name="energy" id="energetic" value="energetic" />
                                                <figure>
                                                    <img src="./img/emotions/energy-energetic.png" alt="I feel energetic." />
                                                    <figcaption>Energetic</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                        <div class="buttonsurvey-energy">
                                            <label>
                                                <input type="radio" name="energy" id="normal" value="normal" />
                                                <figure>
                                                    <img src="./img/emotions/energy-normal.png" alt="I feel normal." />
                                                    <figcaption>Normal</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                         <div class="buttonsurvey-energy">
                                            <label>
                                                <input type="radio" name="energy" id="low" value="low" />
                                                <figure>
                                                    <img src="./img/emotions/energy-low.png" alt="I'm feeling low." />
                                                    <figcaption>Low</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                        <div class="buttonsurvey-energy">
                                            <label>
                                                <input type="radio" name="energy" id="sleepy" value="sleepy" />
                                                <figure>
                                                    <img onmousedown="bleep.play()" src="./img/emotions/energy-verylow.png" alt="I'm sleepy." />
                                                    <figcaption>Sleepy</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                    </div>     
                                    
                                    <!-- TEMPERATURE -->                           
                                    <p class="emotion-title">TEMPERATURE<span id="error-temperature"></span></p>   
                                    <div class="rowsurvey">
                                        <div class="buttonsurvey-temperature">
                                            <label>
                                                <input type="radio" name="temperature" id="hot" value="hot" />
                                                <figure>
                                                    <img src="./img/emotions/temperature-hot.png" alt="It is hot..." />
                                                    <figcaption>Hot</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                        <div class="buttonsurvey-temperature">
                                            <label>
                                                <input type="radio" name="temperature" id="good" value="good" />
                                                <figure>
                                                    <img src="./img/emotions/temperature-good.png" alt="Good temperature!" />
                                                    <figcaption>Good</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                        <div class="buttonsurvey-temperature">
                                            <label>
                                                <input type="radio" name="temperature" id="cold" value="cold" />
                                                <figure>
                                                    <img src="./img/emotions/temperature-cold.png" alt="Brrr, it's cold!" />
                                                    <figcaption>Cold</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                    </div>
                                       
                                    <!-- NOISE -->
                                    <p class="emotion-title">NOISE<span id="error-noise"></span></p>   
                                    <div class="rowsurvey">    
                                        <div class="buttonsurvey-noise noise-n">
                                            <label>
                                                <input type="radio" name="noise" id="noisy" value="noisy" />
                                                <figure>
                                                    <img src="./img/emotions/noise-noisy.png" alt="It's really noisy!" />
                                                    <figcaption>Noisy</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                        <div class="buttonsurvey-noise">
                                            <label>
                                                <input type="radio" name="noise" id="regular" value="regular" />
                                                <figure>
                                                    <img src="./img/emotions/noise-normal.png" alt="Regular noise" />
                                                    <figcaption>Regular</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                        <div class="buttonsurvey-noise">
                                            <label>
                                                <input type="radio" name="noise" id="whisper" value="whisper" />
                                                <figure>
                                                    <img src="./img/emotions/noise-whisper.png" alt="Shh... little wishpers" />
                                                    <figcaption>Whispers</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                         <div class="buttonsurvey-noise">
                                            <label>
                                                <input type="radio" name="noise" id="silence" value="silence" />
                                                <figure>
                                                    <img src="./img/emotions/noise-quiet.png" alt="Silence." />
                                                    <figcaption>Quiet</figcaption>
                                                </figure>
                                            </label>
                                        </div>
                                    </div> 
                                        <input type="submit" class="btn pull-right" name="submit" value="Submit" onclick="return getForm()" />    
                                        <input type="password" id="password" name="password" placeholder="Secret CODE" />
                                        <span id="error"></span>
                                </form> 
                            </div>        
                        </div>   
                    </div>
                </div>
            </div>       
        </main>

        <?php include './php/theme-functions/footer.php';?>

    </body>    
