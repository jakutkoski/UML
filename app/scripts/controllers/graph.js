'use strict';

/**
 * @ngdoc function
 * @name sinpfApp.controller:GraphCtrl
 * @description
 * # GraphCtrl
 * Controller of the sinpfApp.
 * This handles UI logic for the Graph tab.
 */
angular.module('sinpfApp').controller('GraphCtrl', function($scope, $window, graphing, track) {
  $scope.series = ['Proportion Correct']; // graph legend
  $scope.xPoints = [0];
  $scope.yPoints = [[0]]; // array of arrays because there can be multiple plotted lines
  $scope.options = { // options that configure properties of the graph
    datasetFill: false,
    pointDot: false,
    scaleOverride: true,
    scaleStartValue: 0,
    scaleStepWidth: 25,
    scaleSteps: 4,
    scaleLabel: '<%=value%>%'
  };
  $scope.xDomain = { min: -20, max: 10 };
  $scope.lastIterationUpdated = 0;
  $scope.formula = {
    alpha: 'a',
    beta: 'b',
    lambda: 'l',
    gamma: 'g',
    slope: 0
  };

  $scope.$on('updateGraphView', function() {
    $window.dispatchEvent(new Event('resize'));
    if ($scope.lastIterationUpdated !== track.getIterationCount()) { // so it only updates when it needs to
      // update the graph
      var phi = track.getPhi();
      var newPoints = graphing.getPoints(phi, $scope.xDomain.min, $scope.xDomain.max, 1);
      $scope.xPoints = newPoints.xPoints;
      $scope.yPoints = newPoints.yPoints;
      // update the formula
      $scope.formula = graphing.getFormula(phi);
      $scope.lastIterationUpdated = track.getIterationCount();
    }
  });

  $scope.printGraph = function() {
    // CSS @media print takes care of hiding unnecessary divs
    $window.print();
  };

});
