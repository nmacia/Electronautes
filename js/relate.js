/*
 Project:       terMITes
 Authors:       Nuria Macia
                Juanita Devis
                Jason Nawyn
 Version:       2.2
 Date:          March 2017
 Last modified: July 2017 
 */

/* Drag and drop relate sensors emotions */

function allowDrop(ev) {
  ev.preventDefault();
}

var fromId = {};

function drag(ev) {
  var draggableButtonDiv = $(ev.target).closest('.r-button-sensor')[0];

  var containerOfButton = draggableButtonDiv.parentElement;
  if (containerOfButton.id !== 'center-dragbox-forsensors') {
    fromId[draggableButtonDiv.id] = containerOfButton.id;
  }

  ev.dataTransfer.setData("draggedId", draggableButtonDiv.id);     
  console.log("containerOfButton.id: " + containerOfButton.id);  
}

function drop(ev) {
  ev.preventDefault();
  var draggedId = ev.dataTransfer.getData("draggedId");

  console.log(fromId);
  if (ev.target.id !== "center-dragbox-forsensors") {
    $("#" + fromId[draggedId]).append(document.getElementById(draggedId));
  }
  else {
    $('#center-dragbox-forsensors').append(document.getElementById(draggedId));  
  }   
}

$(document).ready(function() {
  window.sessionStorage.clear();
});

