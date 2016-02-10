'use strict';

describe('Controller: InstructionsCtrl', function () {

  // load the controller's module
  beforeEach(module('sinpfApp'));

  var InstructionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstructionsCtrl = $controller('InstructionsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should be static', function () {
    expect(InstructionsCtrl.isStatic).toBe(true);
  });
});
