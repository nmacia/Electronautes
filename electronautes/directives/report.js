'use strict';

angular.module('electronautes').directive('tReportBug', ($rootScope) => {
  return {
    restrict: 'EA',
    scope: true,
    template: '<div class="bug-report" ng-show="bugReport.startReporting === true">' +
                '<textarea id="textareaEdit" ng-model="bugReport.bugDescription"></textarea>' +
                '<input type="submit" class="btn pull-right" name="button-bug" value="report" ng-click="submitBug()" ng-disabled="!bugReport.bugDescription">' +
                '<input type="submit" class="btn pull-right btn-space" name="button-cancel" value="cancel" ng-click="bugReport.startReporting = false">' +
              '</div>',
    link: (scope, controller) => {
      $rootScope.submitBug = function () {
        // TODO: Store report in the database.
        $rootScope.bugReport.startReporting = false;
        $rootScope.bugReport.bugDescription = "";
      }
    }
  };
});