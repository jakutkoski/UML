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

  it('should have the input tab visible at the start', function () {
    expect(scope.input.isVisible).toBe(true);
    expect(scope.graph.isVisible).toBe(false);
    expect(scope.instructions.isVisible).toBe(false);
  });

  it('should toggle between the three views', function() {
    scope.toggle('graphView');
    expect(scope.input.isVisible).toBe(false);
    expect(scope.graph.isVisible).toBe(true);
    expect(scope.instructions.isVisible).toBe(false);

    scope.toggle('instructionsView');
    expect(scope.input.isVisible).toBe(false);
    expect(scope.graph.isVisible).toBe(false);
    expect(scope.instructions.isVisible).toBe(true);
  });

  it('should toggle to the input tab by default', function() {
    scope.toggle('graphView');
    expect(scope.graph.isVisible).toBe(true);
    scope.toggle('foobar');
    expect(scope.input.isVisible).toBe(true);
  });

});
