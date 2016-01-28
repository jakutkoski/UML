'use strict';

describe('Controller: InputCtrl', function () {

  // load the controller's module
  beforeEach(module('sinpfApp'));

  var InputCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InputCtrl = $controller('InputCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should only accept real numbers for the Speech Level', function() {
    scope.nElem = '1';
    scope.mElem = '5';

    scope.speechLevel.val = '-20';
    expect(scope.verifyInput()).toBe(true);

    scope.speechLevel.val = '3.14159';
    expect(scope.verifyInput()).toBe(true);

    scope.speechLevel.val = '0';
    expect(scope.verifyInput()).toBe(true);

    scope.speechLevel.val = 'abc';
    expect(scope.verifyInput()).toBe(false);
  });

  it('should only accept positive numbers N of M such that N <= M and M > 0', function() {
    scope.speechLevel.val = '20';

    scope.nElem = '0';
    scope.mElem = '5';
    expect(scope.verifyInput()).toBe(true);

    scope.nElem = '5';
    scope.mElem = '5';
    expect(scope.verifyInput()).toBe(true);

    scope.nElem = '25';
    scope.mElem = '13';
    expect(scope.verifyInput()).toBe(false);

    scope.nElem = '0';
    scope.mElem = '0';
    expect(scope.verifyInput()).toBe(false);

    scope.nElem = '-1';
    scope.mElem = '5';
    expect(scope.verifyInput()).toBe(false);

    scope.nElem = '-3';
    scope.mElem = '-1';
    expect(scope.verifyInput()).toBe(false);

    scope.nElem = 'abc';
    scope.mElem = '4';
    expect(scope.verifyInput()).toBe(false);

    scope.nElem = '3';
    scope.mElem = 'e2wqs+';
    expect(scope.verifyInput()).toBe(false);
  });

});
