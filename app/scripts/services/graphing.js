'use strict';

/**
 * @ngdoc service
 * @name sinpfApp.graphing
 * @description
 * # graphing
 * Factory in the sinpfApp.
 */
angular.module('sinpfApp').factory('graphing', function() {

  // Private graphing functions
  var computeY = function(x,a,b,g,l) {
    l = 1 - l;
    return g + ((l - g) / (1 + Math.pow(Math.E, -b * (x - a))));
  };

  // Public API to be returned
  var graphing = {};

  graphing.getPoints = function(phi, minX, maxX, step) {
    var points = { xPoints: [], yPoints: [] };

    var x = minX, y, yData = [];
    while (x <= maxX) {
      y = computeY(x,phi.alpha,phi.beta,phi.gamma,phi.lambda);
      points.xPoints.push(x);
      yData.push(100*y); // multiplied by 100 to convert to percentage
      x += step;
    }
    
    points.yPoints.push(yData);
    return points;
  };

  graphing.calculateSlope = function(beta, gamma) {
    return (((1.0 / 4.0) * beta) * (1.0 - gamma)) * 100.0;
  };

  return graphing;

});
