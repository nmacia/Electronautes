/*
 Project:       terMITes
 Authors:       Nuria Macia
                Juanita Devis
                Jason Nawyn
 Version:       2.2
 Date:          March 2017
 Last modified: July 2017 
 */

/* 
* Preliminary set up of svg file
*/
function formatSVG(svgObjectId) {
  var svgObj = document.getElementById(svgObjectId);
  if (svgObj) {
    svgObj.addEventListener("load", function() { 
      var svgDoc = svgObj.contentDocument;

      // Set the size of the svg root element always to 100%.
      var rootLayer = svgDoc.getElementById('root-layer');
      rootLayer.setAttribute('width', '100%');
      rootLayer.setAttribute('height', '100%');

      // Create the style element within the svg and add the import for the right font.
      var importStament = `
          @import url(http://fonts.googleapis.com/css?family=Amatic+SC);
      `;
      var style = svgDoc.createElementNS("http://www.w3.org/2000/svg", 'style');        
      style.innerHTML = style.innerHTML + importStament;
      svgDoc.documentElement.appendChild(style);

      // Change all the .text font-family to the correct one.
      var textElements = svgDoc.getElementsByTagNameNS("http://www.w3.org/2000/svg", 'text');
      for (var i = 0; i <textElements.length; i++) {
        var textElement = textElements[i];
        textElement.setAttribute('font-family', 'Amatic SC');
        if(textElement.id.endsWith('lastimevalue')) {
          textElement.setAttribute('font-weight', '500');    
        }
        else {
          textElement.setAttribute('font-weight', '700');
        }
      }
    }, false);
  }
}