'use strict';

/**
 * @ngdoc service
 * @name sinpfApp.utility
 * @description
 * # utility
 * Factory in the sinpfApp. Pure functions independent of app-specific data.
 */
angular.module('sinpfApp').factory('utility', function () {
  
  // Private utility functions
  var getKeys = function(num,table) {
    var keys = [],
    i = 0,
    lower,
    upper,
    key;
    for (key in table) 
    {
        keys[i] = key;
        i++;
    }
    i = 0;
    while(keys[i] < num) {
      i+=1; 
    }

    lower = keys[i-1];
    upper = keys[i];
    if(num < 0) { // Lowest value in table
      lower = 0;
      upper = 0.01; 
    }
    if(num > 0.25) { // Highest value in table
      lower = 0.24;
      upper = 0.25;
    }
    return {'lower value' : lower, 'upper value' : upper};
  };

  var interpolate = function(x,x0,y0,x1,y1) {
    var y = y0+(x-x0)*(y1-y0)/(x1-x0);
    return y;
  };

  // Public API to be returned
  var utility = {};

  utility.probabilityDensity = function(x, mu, sigma) {   
    return (1.0/(sigma*Math.sqrt(2.0*Math.PI)))*Math.exp((-1.0*Math.pow((x-mu),2))/
           (2.0*Math.pow(sigma,2))); 
  };

  utility.lambdaLookup = function(lambda, swpt, table) {
    swpt -= 1;  
    if(lambda in table) {
      return table[lambda][swpt];
    } else {
      var keys = getKeys(lambda,table);
      var x0   = parseFloat(keys['lower value']);
      var y0   = table[x0][swpt];
      var x1   = keys['upper value'];
      var y1   = table[x1][swpt];
      return interpolate(lambda,x0,y0,x1,y1);
    }
  };

  utility.roundToHundredth = function(num) {
    return Math.round(num * 100)/100;
  };

  utility.initArray = function(type, initVal, increment) {
    var alphaSize = 61, betaSize = 23, lambdaSize = 5;
    var array = []; //output
    var val = initVal; //initial value
    var i = 0, x, y, z; // indeces

    switch(type) {

      case 'alpha':
        for(x = 0; x < lambdaSize; x++) {
          for(y = 0; y < alphaSize; y++) {
            for(z = 0; z < betaSize; z++) {
              array[i] = this.roundToHundredth(val);
              i++;
            }
            val += increment;
          }
          val = initVal;
        } break;

      case 'beta':
        for(x = 0; x < alphaSize; x++) {
          for(y = 0; y < betaSize; y++) {
            for(z = 0; z < lambdaSize; z++) {
              array[i] = this.roundToHundredth(val);
              i++;
            }
            val += increment;
          }
          val = initVal;
        } break;

      case 'lambda':
        for(x = 0; x < alphaSize; x++) {
          for(y = 0; y < betaSize; y++) {
            for(z = 0; z < lambdaSize; z++) {
              array[i] = this.roundToHundredth(val);
              i++;
              val += increment;
            }
          val = initVal;
          } 
        } break;
      
      default: console.error('Cannot initialize ' + type + ' array.');
    }
    return array;
  };

  return utility;

});
