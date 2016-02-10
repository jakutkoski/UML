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

  it('should update the points when the tab is activated', function() {
    var expectedX = []; // [-20, -19, ... , 9, 10]
    for (var i = 0; i <= 30; i++) {
      expectedX[i] = i-20;
    }
    var expectedYfirst = 0.0106;
    var expectedYlast = 49.5;

    scope.lastIterationUpdated = 'zero iterations';
    scope.$broadcast('updateGraphView');

    expect(scope.xPoints).toEqual(expectedX);
    expect(parseFloat(scope.yPoints[0][0].toPrecision(3))).toEqual(expectedYfirst);
    expect(parseFloat(scope.yPoints[0][30].toPrecision(3))).toEqual(expectedYlast);
  });

  it('should update the formula when the tab is activated', function() {
    var expectedFormula = {
      alpha: 10,
      beta: 0.4,
      lambda: 0.99,
      gamma: 0.0001,
      slope: '10'
    };

    scope.lastIterationUpdated = 'zero iterations';
    scope.$broadcast('updateGraphView');

    expect(scope.formula).toEqual(expectedFormula);
  });

});
