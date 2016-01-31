'use strict';

/**
 * @ngdoc service
 * @name sinpfApp.iteration
 * @description
 * # iteration
 * Factory in the sinpfApp.
 */
angular.module('sinpfApp').factory('iteration', function(track, UMLtable) {
  
  // Private iteration functions
  var psychometric = function(x, mAlpha, mBeta, mLambda) {
    var phi   = track.getPhi(),
        gamma = phi.gamma;
    return gamma+(1.0-mLambda-gamma)/(1.0+Math.exp(-mBeta*(x-mAlpha)));
  };

  var updateLogL = function(n, m) {
    var snrArray = track.getSnrArray(),
    currentSnr   = snrArray[snrArray.length-1],
    alpha        = track.getAlpha(),
    beta         = track.getBeta(),
    lambda       = track.getLambda(),
    LogL         = track.getLogL(),
    len          = LogL.length;

    for(var i = 0; i < len; i++) {
      LogL[i] = LogL[i] +
                (n*Math.log(psychometric(currentSnr, alpha[i], beta[i], lambda[i]))) +
                ((m-n)*Math.log(1.0-psychometric(currentSnr, alpha[i], beta[i], lambda[i])));
    }
  };

  var sumArray = function(array) {
    var count = array[0];
    for (var i = 1; i < array.length; i++) {
      count += array[i];
    }
    return count;
  };

  var getMean = function(L, alpha, beta, lambda) {
    var p = [],
    A     = [],
    B     = [],
    len   = L.length,
    total,
    currentLambda,
    i;

    for(i = 0; i < len; i++) {
      p[i] = Math.exp(L[i]);
    }

    total = sumArray(p);
    var newL = track.getLogL();
    for(i = 0; i < len; i++){
      p[i] = p[i] / total;
      newL[i] = Math.log(p[i]);
    }

    currentLambda = [];
    for(i = 0; i < len; i++){
      A[i] = alpha[i] * p[i];
      B[i] = beta[i] * p[i];
      currentLambda[i] = lambda[i] * p[i];
    }

    var phi = track.getPhi();
    phi.alpha  = sumArray(A);
    phi.beta   = sumArray(B);
    phi.lambda = sumArray(currentLambda);
  };

  var updateSweetPoint = function(n, m) {
    var isIncreasing = track.getIsIncreasing();
    if (n/m > 1/2) {
      if (isIncreasing === 1) { 
        track.setReversalCount(track.getReversalCount() + 1);
      }
      track.setIsIncreasing(-1);
      return Math.max(track.getSweetPoint() - 1, 1);
    } else if (n/m < 1/2) {
      if (isIncreasing === -1) {
        track.setReversalCount(track.getReversalCount() + 1);
      }
      track.setIsIncreasing(1);
      return Math.min(track.getSweetPoint() + 1, 4); 
    }
  };

  // Public API to be returned
  var iteration = {};

  iteration.run = function(nInput, mInput) {
    var i      = track.getIterationCount(),
        LogL   = track.getLogL(),
        alpha  = track.getAlpha(),
        beta   = track.getBeta(),
        lambda = track.getLambda(),
        phi    = track.getPhi(),
        n      = track.getNarray(),
        m      = track.getMarray();

    n[i] = nInput;
    m[i] = mInput;
    updateLogL(nInput, mInput);
    getMean(LogL, alpha, beta, lambda);
    track.setSweetPoint(updateSweetPoint(nInput, mInput));
    track.inversePsychometric(track.getSweetPoint(), phi, UMLtable);
    track.setIterationCount(track.getIterationCount() + 1);
  };

  return iteration;

});
