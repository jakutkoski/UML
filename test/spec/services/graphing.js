'use strict';

describe('Service: graphing', function () {

  // load the service's module
  beforeEach(module('sinpfApp'));

  // instantiate service
  var graphing;
  beforeEach(inject(function (_graphing_) {
    graphing = _graphing_;
  }));

  it('should provide a working getPoints function', function() {
    var minX = -2, maxX = 2, step = 1;
    var phi = {
      alpha  : 10,
      beta   : 0.4,
      gamma  : 1e-4,
      lambda : 0.01
    };

    var points = graphing.getPoints(phi, minX, maxX, step);
    expect(points.xPoints.length).toBe(5);
    expect(points.xPoints).toEqual([-2, -1, 0, 1, 2]);
    expect(points.yPoints.length).toBe(1);
    expect(points.yPoints[0].length).toBe(5);
    expect(parseFloat(points.yPoints[0][4].toPrecision(3))).toBe(3.89);
  });

  it('should provide a working getFormula function', function() {
    var phi = {
      alpha  : 10,
      beta   : 0.4,
      gamma  : 1e-4,
      lambda : 0.01
    };

    var expectedFormula = {
      alpha: 10,
      beta: 0.4,
      lambda: 0.99,
      gamma: 0.0001,
      slope: '10'
    };
    
    expect(graphing.getFormula(phi)).toEqual(expectedFormula);
  });

});
