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
  $scope.graphLegend = ['Proportion Correct'];
  $scope.xPoints = [0];
  $scope.yPoints = [[0]]; // array of arrays because there can be multiple plotted lines
  $scope.options = {
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
    if (shouldUpdateGraph()) {
      var phi = track.getPhi();
      var newPoints = graphing.getPoints(phi, $scope.xDomain.min, $scope.xDomain.max, 1);
      $scope.xPoints = newPoints.xPoints;
      $scope.yPoints = newPoints.yPoints;
      $scope.formula = graphing.getFormula(phi);
      $scope.lastIterationUpdated = track.getIterationCount();
    }
  });

  function shouldUpdateGraph() {
    return $scope.lastIterationUpdated !== track.getIterationCount();
  }

  $scope.printGraph = function() {
    $window.print();
  };

});
