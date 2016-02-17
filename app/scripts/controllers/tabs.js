'use strict';

/**
 * @ngdoc function
 * @name sinpfApp.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the sinpfApp.
 * Handles switching views between input, graph, and instructions.
 */
angular.module('sinpfApp').controller('TabsCtrl', function($scope) {
  $scope.input        = { isVisible: true,  class: 'active'};
  $scope.graph        = { isVisible: false, class: ''};
  $scope.instructions = { isVisible: false, class: ''};

  $scope.toggle = function(givenView) {
    $scope.input = { isVisible: false, class: ''};
    $scope.graph = { isVisible: false, class: ''};
    $scope.instructions = { isVisible: false, class: ''};

    if (givenView === 'inputView') {
      $scope.input.isVisible = true;
      $scope.input.class = 'active';
    } else if (givenView === 'graphView') {
      $scope.graph.isVisible = true;
      $scope.graph.class = 'active';
      $scope.$broadcast('updateGraphView');
    } else if (givenView === 'instructionsView') {
      $scope.instructions.isVisible = true;
      $scope.instructions.class = 'active';
    } else {
      $scope.input.isVisible = true;
      $scope.input.class = 'active';
    }
  };
  
});

