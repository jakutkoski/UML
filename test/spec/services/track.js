'use strict';

describe('Service: track', function () {

  // load the service's module
  beforeEach(module('sinpfApp'));

  // instantiate service
  var track;
  beforeEach(inject(function (_track_) {
    track = _track_;
  }));

  it('should have the correct initial value for snrArray', function() {
    expect(track.getSnrArray()).toEqual([9999]);
  });

  it('should have the correct initial value for iterationCount', function() {
    expect(track.getIterationCount()).toEqual(0);
  });

  it('should have the correct initial value for nArray', function() {
    expect(track.getNarray()).toEqual([]);
  });

  it('should have the correct initial value for mArray', function() {
    expect(track.getMarray()).toEqual([]);
  });

  it('should have the correct initial value for sweetPoint', function() {
    expect(track.getSweetPoint()).toEqual(4);
  });

  it('should have the correct initial value for isIncreasing', function() {
    expect(track.getIsIncreasing()).toEqual(0);
  });

  it('should have the correct initial value for reversalCount', function() {
    expect(track.getReversalCount()).toEqual(0);
  });

  it('should have the correct initial value for phi', function() {
    expect(track.getPhi()).toEqual({ alpha: 10, beta: 0.4, gamma: 1e-4, lambda: 0.01 });
  });

  it('should have the correct initial value for alpha', function() {
    expect(track.getAlpha().length).toEqual(7015);
  });

  it('should have the correct initial value for beta', function() {
    expect(track.getBeta().length).toEqual(7015);
  });

  it('should have the correct initial value for lambda', function() {
    expect(track.getLambda().length).toEqual(7015);
  });

  it('should have the correct initial value for LogL', function() {
    expect(track.getLogL().length).toEqual(7015);
  });

  it('should provide setters for all variables', function() {
    expect(track.setSnrArray).toBeDefined();
    expect(track.setIterationCount).toBeDefined();
    expect(track.setNarray).toBeDefined();
    expect(track.setMarray).toBeDefined();
    expect(track.setSweetPoint).toBeDefined();
    expect(track.setIsIncreasing).toBeDefined();
    expect(track.setReversalCount).toBeDefined();
    expect(track.setPhi).toBeDefined();
    expect(track.setAlpha).toBeDefined();
    expect(track.setBeta).toBeDefined();
    expect(track.setLambda).toBeDefined();
    expect(track.setLogL).toBeDefined();
  });

  it('should provide an Inverse Psychometric that sets the next snr in snrArray', function() {
    track.inversePsychometric(0, 'phiObject');
    expect(track.getSnrArray()).toEqual([9999, 9999]);

    track.inversePsychometric(4, 'phiObject');
    expect(track.getSnrArray()).toEqual([9999, 9999, 9999]);

    track.inversePsychometric(2, track.getPhi());
    expect(track.getSnrArray()).toEqual([9999, 9999, 9999, 10]);
  });

});
