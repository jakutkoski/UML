'use strict';

/**
 * @ngdoc service
 * @name sinpfApp.track
 * @description
 * # track
 * Factory in the sinpfApp.
 * Variables to be tracked and modified.
 */
angular.module('sinpfApp').factory('track', function(utility, UMLtable) {

  // Variables to be tracked throughout the app (with their initial values assigned)
  var snrArray   = [9999],
  iterationCount = 0,
  nArray         = [],
  mArray         = [],
  sweetPoint     = 4,
  isIncreasing   = 0,
  reversalCount  = 0,
  phi            = {
    alpha  : 10,
    beta   : 0.4,
    gamma  : 1e-4,
    lambda : 0.01
  },

  alpha  = utility.initArray('alpha' , -15.0, 0.5),
  beta   = utility.initArray('beta'  , 0.1  , 0.05),
  lambda = utility.initArray('lambda', 0.01 , 0.0625);

  var LogL = [], alphaSize = 61, betaSize = 23, lambdaSize = 5;
  for(var i = 0; i < (alphaSize*betaSize*lambdaSize); i++) {
    LogL[i] = Math.log(utility.probabilityDensity(alpha[i],10.0,20.0)*
                       utility.probabilityDensity(beta[i],0.4,0.4));
  }

  // Public API to be returned
  var track = {};

  // getters
  track.getSnrArray       = function() { return snrArray; };
  track.getIterationCount = function() { return iterationCount; };
  track.getNarray         = function() { return nArray; };
  track.getMarray         = function() { return mArray; };
  track.getSweetPoint     = function() { return sweetPoint; };
  track.getIsIncreasing   = function() { return isIncreasing; };
  track.getReversalCount  = function() { return reversalCount; };
  track.getPhi            = function() { return phi; };
  track.getAlpha          = function() { return alpha; };
  track.getBeta           = function() { return beta; };
  track.getLambda         = function() { return lambda; };
  track.getLogL           = function() { return LogL; };

  // setters
  track.setSnrArray = function(percent,alpha,beta,lambda,gamma) {
    snrArray[snrArray.length] = Math.round(alpha-(1.0/beta)*
      Math.log((-1.0+lambda+percent)/(gamma-percent)),0);
  };

  track.setIterationCount = function(val) { iterationCount = val; };
  track.setNarray         = function(val) { nArray = val; };
  track.setMarray         = function(val) { mArray = val; };
  track.setSweetPoint     = function(val) { sweetPoint = val; };
  track.setIsIncreasing   = function(val) { isIncreasing = val; };
  track.setReversalCount  = function(val) { reversalCount = val; };
  track.setPhi            = function(val) { phi = val; };
  track.setAlpha          = function(val) { alpha = val; };
  track.setBeta           = function(val) { beta = val; };
  track.setLambda         = function(val) { lambda = val; };
  track.setLogL           = function(val) { LogL = val; };

  // inverse psychometric function sets the next snr in snrArray
  track.inversePsychometric = function(swpt, phi) {
    if (swpt >= 1 && swpt <= 3) {
      var alpha   = phi.alpha,
          beta    = phi.beta,
          lambda  = phi.lambda,
          gamma   = phi.gamma,
          percent = utility.lambdaLookup(lambda,swpt,UMLtable); 
      this.setSnrArray(percent,alpha,beta,lambda,gamma);
    } else {
      snrArray[snrArray.length] = 9999;
    }
  };
  
  return track;

});
