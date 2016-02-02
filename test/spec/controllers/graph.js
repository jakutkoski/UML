'use strict';

describe('Controller: GraphCtrl', function () {

  // load the controller's module
  beforeEach(module('sinpfApp'));

  var GraphCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GraphCtrl = $controller('GraphCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have more tests', function () {
    expect(3).toBe(3);
  });
});
