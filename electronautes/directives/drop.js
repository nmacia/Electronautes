'use strict';

angular.module('electronautes').directive('tDropTarget', ($rootScope) => {
  return {
    restrict: 'A',
    scope: {
      onDrop: '&'
    },
    link: (scope, el, attrs, controller) => {
      
      el.bind("dragover", (e) => {
        return false;
      });
      
      el.bind("drop", (e) => {
        
        if (e.preventDefault) e.preventDefault(); // Necessary. Allows us to drop.
        if (e.stopPropagation) e.stopPropagation(); // Necessary. Allows us to drop.
        var sensor = e.originalEvent.dataTransfer.getData("sensor-id");
        scope.onDrop({dragEl: sensor, dropEl: angular.element(el).attr('id')});
      });
   
    }
  };
});