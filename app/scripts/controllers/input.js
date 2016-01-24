'use strict';

/**
 * @ngdoc function
 * @name sinpfApp.controller:InputCtrl
 * @description
 * # InputCtrl
 * Controller of the sinpfApp
 */
angular.module('sinpfApp').controller('InputCtrl', function($scope) {
  $scope.nElem = 0;
  $scope.mElem = 5;
  $scope.speechLevel = { val: 65, isReadonly: false };
  $scope.maskerLevel = 'OFF';
  
  $scope.keyPressed = function(event) {
    var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if (keyCode === 13) { $scope.runIteration(); }
  };

  $scope.runIteration = function() {
    if ($scope.verifyInput()) {
      // iteration.run(parseFloat($scope.nElem), parseFloat($scope.mElem));
      // update iteration count
      // call to updateInputElements
      // focus on nElem
      console.log('iteration');
    }
    else { console.log('fail'); }
  };

  $scope.verifyInput = function() {
    var n = parseInt($scope.nElem);
    var m = parseInt($scope.mElem);
    if (false) { // nrev > 16
      // terminate experiment
      return false;
    } else if (isNaN(n) || isNaN(m) || n>m || n<0 || m<=0) {
      // "please check input"
      return false;
    } else if (isNaN(parseFloat($scope.speechLevel.val))) {
      // "please fix the speech level"
      return false;
    } else {
      return true;
    }
  };

});