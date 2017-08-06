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
                            <p></p>
                        </div>   
                    </div>
                </div>
            </div>       
        </main>

        <?php include './php/theme-functions/footer.php';?>
