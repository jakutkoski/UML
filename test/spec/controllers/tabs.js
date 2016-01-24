'use strict';

describe('Controller: TabsCtrl', function () {

  // load the controller's module
  beforeEach(module('sinpfApp'));

  var TabsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabsCtrl = $controller('TabsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should have more tests written', function () {
    expect(3).toBe(3);
  });
});
