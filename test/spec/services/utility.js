'use strict';

describe('Service: utility', function () {

  // load the service's module
  beforeEach(module('sinpfApp'));

  // instantiate service
  var utility;
  beforeEach(inject(function (_utility_) {
    utility = _utility_;
  }));

  it('should provide a working Probability Density function', function() {
    expect(parseFloat(utility.probabilityDensity(1, 2, 3).toPrecision(3))).toBe(0.126);
  });

  it('should provide a Lambda Lookup function', function() {
    expect(!!utility.lambdaLookup).toBe(true);
  });

  it('should provide a function that rounds to the nearest hundredth', function() {
    expect(utility.roundToHundredth(3.14159)).toBe(3.14);
  });

  it('should provide an initArray function that takes a type and returns a large array', function() {
    var alpha  = utility.initArray('alpha' , -15.0, 0.5);
    var beta   = utility.initArray('beta'  , 0.1  , 0.05);
    var lambda = utility.initArray('lambda', 0.01 , 0.0625);
    expect(alpha.length).toBe(7015);
    expect(beta.length).toBe(7015);
    expect(lambda.length).toBe(7015);
  });

});
