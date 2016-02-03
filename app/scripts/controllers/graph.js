'use strict';

/**
 * @ngdoc function
 * @name sinpfApp.controller:GraphCtrl
 * @description
 * # GraphCtrl
 * Controller of the sinpfApp
 */
angular.module('sinpfApp').controller('GraphCtrl', function($scope, $window, graphing, track, utility) {
  $scope.series = ['Percent Correct'];
  $scope.xPoints = [0];
  $scope.yPoints = [[0]];
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
    if (track.getIterationCount() !== $scope.lastIterationUpdated) {
      $scope.drawGraph(track.getPhi());
      $scope.updateFormula(track.getPhi());
      $scope.lastIterationUpdated = track.getIterationCount();
    }
  });

  $scope.drawGraph = function(phi) {
    $scope.xPoints = [];
    $scope.yPoints = [];
    var newPoints = graphing.getPoints(phi, $scope.xDomain.min, $scope.xDomain.max, 1);
    $scope.xPoints = newPoints.xPoints;
    $scope.yPoints = newPoints.yPoints;
  };

  $scope.updateFormula = function(phi) {
    $scope.formula.alpha = utility.roundToHundredth(phi.alpha);
    $scope.formula.beta = utility.roundToHundredth(phi.beta);
    $scope.formula.lambda = utility.roundToHundredth(1 - phi.lambda);
    $scope.formula.gamma = phi.gamma;
    $scope.formula.slope = graphing.calculateSlope(phi.beta, phi.gamma).toPrecision(2);
  };

  $scope.printGraph = function() {
    $window.print();
  };

});
