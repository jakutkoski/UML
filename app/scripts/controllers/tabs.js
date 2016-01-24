'use strict';

/**
 * @ngdoc function
 * @name sinpfApp.controller:TabsCtrl
 * @description
 * # TabsCtrl
 * Controller of the sinpfApp
 */
angular.module('sinpfApp').controller('TabsCtrl', function () {
  var tabs = this;

  tabs.isInputVisible = true;
  tabs.isGraphVisible = false;
  tabs.isInstructionsVisible = false;

  function toggle(givenView) {
    tabs.isInputVisible = false;
    tabs.isGraphVisible = false;
    tabs.isInstructionsVisible = false;
    
    switch(givenView) {
      case 'inputView':
        tabs.isInputVisible = true;
        break;

      case 'graphView':
        tabs.isGraphVisible = true;
        // broadcast update graph view
        break;

      case 'instructionsView':
        tabs.isInstructionsVisible = true;
        break;

      default:
        tabs.isInputVisible = true;
        break;

    }
  }

  tabs.toggle = toggle;

});
