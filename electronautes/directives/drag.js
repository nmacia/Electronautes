'use strict';

angular.module('electronautes').directive('tDraggable', ($rootScope) => {
  return {
    restrict: 'A',
    link: (scope, el, attrs, controller) => {

      angular.element(el).attr('draggable', 'true');
      
      el.bind("dragstart", (e) => {
        e.originalEvent.dataTransfer.setData('sensor-id', angular.element(el).attr("id"));
      });
      
    }
  };
});