/*
 Project:       terMITes
 Authors:       Nuria Macia
                Juanita Devis
 Version:       1.1
 Date:          March 2017
 Last modified: April 2017 
 */

/*
==================================================
  01 - Furniture
==================================================
*/

/* Tables */


  $(document).ready(function(){
            var a = document.getElementById("santasvg");

            //it's important to add an load event listener to the object, as it will load the svg doc asynchronously
            a.addEventListener("load",function(){
                console.log("svg loaded");
                var svgDoc = a.contentDocument; //get the inner DOM of alpha.svg
                var svgRoot  = svgDoc.documentElement;

                //now we can query stuff with jquery like this
                //note that we pass in the svgRoot as the context node!
                
                $('#Sensors', svgRoot).attr('visibility', 'hidden');
            },false);
        })
  
  