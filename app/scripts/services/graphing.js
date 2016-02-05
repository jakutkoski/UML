'use strict';

/**
 * @ngdoc service
 * @name sinpfApp.graphing
 * @description
 * # graphing
 * Factory in the sinpfApp.
 */
angular.module('sinpfApp').factory('graphing', function(utility) {

  // Private graphing functions
  var computeY = function(x,a,b,g,l) {
    l = 1 - l;
    return g + ((l - g) / (1 + Math.pow(Math.E, -b * (x - a))));
  };

  var calculateSlope = function(beta, gamma) {
    return (((1.0 / 4.0) * beta) * (1.0 - gamma)) * 100.0;
  };

  // Public API to be returned
  var graphing = {};

  graphing.getPoints = function(phi, minX, maxX, step) {
    var points = { xPoints: [], yPoints: [] };

    var x = minX, y, yData = [];
    while (x <= maxX) {
      y = computeY(x,phi.alpha,phi.beta,phi.gamma,phi.lambda);
      points.xPoints.push(x);
      yData.push(100*y);
      x += step;
    }
    
    points.yPoints.push(yData);
    return points;
  };

  graphing.getFormula = function(phi) {
    var formula = {};
    formula.alpha = utility.roundToHundredth(phi.alpha);
    formula.beta = utility.roundToHundredth(phi.beta);
    formula.lambda = utility.roundToHundredth(1 - phi.lambda);
    formula.gamma = phi.gamma;
    formula.slope = calculateSlope(phi.beta, phi.gamma).toPrecision(2);
    return formula;
  };

  return graphing;

});
