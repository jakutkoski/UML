'use strict';

/**
 * @ngdoc function
 * @name sinpfApp.controller:InputCtrl
 * @description
 * # InputCtrl
 * Controller of the sinpfApp
 */
angular.module('sinpfApp').controller('InputCtrl', function($scope, $window, $timeout, track, iteration) {
  $scope.nElem = 0;
  $scope.mElem = 5;
  $scope.speechLevel = { val: 65, isReadonly: false };
  $scope.maskerLevel = 'OFF';
  $scope.flasher = { message: 'initial message', isVisible: false };
  
  $scope.keyPressed = function(event) {
    var keyCode = event.keyCode || event.which || event.charCode;
    if (keyCode === 13) { $scope.runIteration(); }
  };

  $scope.runIteration = function() {
    if ($scope.verifyInput()) {
      iteration.run(parseFloat($scope.nElem), parseFloat($scope.mElem));
      $scope.updateInputElements();
      if (track.getReversalCount() > 16) { $scope.terminate(); }
      $scope.speechLevel.isReadonly = true;
      var nInput = document.getElementById('nInput');
      if (nInput) { nInput.focus(); }
    }
  };

  $scope.verifyInput = function() {
    var n = parseInt($scope.nElem);
    var m = parseInt($scope.mElem);
    var SL = parseFloat($scope.speechLevel.val);
    if (track.getReversalCount() > 16) {
      $scope.terminate();
      return false;
    } else if (isNaN(n) || isNaN(m) || n>m || n<0 || m<=0) {
      $scope.flash('Please fix the Response input.', 3000);
      return false;
    } else if (isNaN(SL)) {
      $scope.flash('Please fix the Speech Level.', 3000);
      return false;
    } else {
      return true;
    }
  };

  $scope.updateInputElements = function() {
    var snrArray = track.getSnrArray();
    var newSnr = snrArray[snrArray.length - 1];
    var SL = parseFloat($scope.speechLevel.val);
    if (newSnr === 9999) {
      $scope.maskerLevel = 'OFF';
    } else {
      $scope.maskerLevel = SL - newSnr;
    }

    $scope.nElem = '';
  };

  $scope.terminate = function() {
    $window.alert('Experiment finished! Continue to the Graph tab.');
  };

  $scope.flash = function(givenMessage, timeLength) {
    $scope.flasher.message = givenMessage;
    $scope.flasher.isVisible = true;
    $timeout(function() {
      $scope.flasher.isVisible = false;
    }, timeLength);
  };

});