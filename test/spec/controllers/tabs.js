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
    expect(TabsCtrl.input.isVisible).toBe(true);
    expect(TabsCtrl.graph.isVisible).toBe(false);
    expect(TabsCtrl.instructions.isVisible).toBe(false);
  });

  it('should toggle between the three views', function() {
    TabsCtrl.toggle('graphView');
    expect(TabsCtrl.input.isVisible).toBe(false);
    expect(TabsCtrl.graph.isVisible).toBe(true);
    expect(TabsCtrl.instructions.isVisible).toBe(false);

    TabsCtrl.toggle('instructionsView');
    expect(TabsCtrl.input.isVisible).toBe(false);
    expect(TabsCtrl.graph.isVisible).toBe(false);
    expect(TabsCtrl.instructions.isVisible).toBe(true);
  });

  it('should toggle to the input tab by default', function() {
    TabsCtrl.toggle('graphView');
    expect(TabsCtrl.graph.isVisible).toBe(true);
    TabsCtrl.toggle('foobar');
    expect(TabsCtrl.input.isVisible).toBe(true);
  });

});
