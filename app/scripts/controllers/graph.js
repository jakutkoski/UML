'use strict';

/**
 * @ngdoc function
 * @name sinpfApp.controller:GraphCtrl
 * @description
 * # GraphCtrl
 * Controller of the sinpfApp
 */
angular.module('sinpfApp').controller('GraphCtrl', function($scope, $window) {
  $scope.series = ['Proportion Correct (PC)'];
  $scope.xPoints = [0];
  $scope.yPoints = [[0]];
  $scope.options = {
    datasetFill: false,
    pointDot: false,
    scaleOverride: true,
    scaleStartValue: 0,
    scaleStepWidth: 0.25,
    scaleSteps: 4
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

  // $scope.$on('updateGraphView', function() {
  //   if (sinpf.getIth() !== $scope.lastIterationUpdated) {
  //     $scope.drawGraph(sinpf.getPhi());
  //     $scope.updateFormula(sinpf.getPhi());
  //     $scope.lastIterationUpdated = sinpf.getIth();
  //   }
  // });

  // $scope.drawGraph = function(phi) {
  //   $scope.xPoints = [];
  //   $scope.yPoints = [];
  //   var newPoints = graphing.getPoints(phi, $scope.xDomain.min, $scope.xDomain.max, 1);
  //   $scope.xPoints = newPoints.xPoints;
  //   $scope.yPoints = newPoints.yPoints;
  // };

  // $scope.updateFormula = function(phi) {
  //   $scope.formula.alpha = utility.round(phi.alpha);
  //   $scope.formula.beta = utility.round(phi.beta);
  //   $scope.formula.lambda = utility.round(1 - phi.lambda);
  //   $scope.formula.gamma = phi.gamma;
  //   $scope.formula.slope = graphing.calculateSlope(phi.beta, phi.gamma).toPrecision(2);
  // };

  $scope.printGraph = function() {
    $window.print();
  };

});
