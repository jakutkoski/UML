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

  it('should have more tests written', function () {
    expect(3).toBe(3);
  });
});
