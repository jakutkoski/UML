'use strict';

/**
 * @ngdoc function
 * @name sinpfApp.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the sinpfApp.
 * Can be thought of as the parent to input, graph, and instructions.
 */
angular.module('sinpfApp').controller('TabsCtrl', function($scope) {
  var tabs = this;

  tabs.input        = { isVisible: true,  class: 'active'};
  tabs.graph        = { isVisible: false, class: ''};
  tabs.instructions = { isVisible: false, class: ''};

  function toggle(givenView) {
    tabs.input = { isVisible: false, class: ''};
    tabs.graph = { isVisible: false, class: ''};
    tabs.instructions = { isVisible: false, class: ''};

    if (givenView === 'inputView') {
      tabs.input.isVisible = true;
      tabs.input.class = 'active';
    } else if (givenView === 'graphView') {
      tabs.graph.isVisible = true;
      tabs.graph.class = 'active';
      $scope.$broadcast('updateGraphView');
    } else if (givenView === 'instructionsView') {
      tabs.instructions.isVisible = true;
      tabs.instructions.class = 'active';
    } else {
      tabs.input.isVisible = true;
      tabs.input.class = 'active';
    }
  }

  tabs.toggle = toggle;

});