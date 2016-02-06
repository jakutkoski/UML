'use strict';

describe('Service: track', function () {

  // load the service's module
  beforeEach(module('sinpfApp'));

  // instantiate service
  var track;
  beforeEach(inject(function (_track_) {
    track = _track_;
  }));

  it('should provide getters and setters', function() {
    expect(!!track.getSnrArray).toBe(true);
    expect(!!track.getIterationCount).toBe(true);
    expect(!!track.getNarray).toBe(true);
    expect(!!track.getMarray).toBe(true);
    expect(!!track.getSweetPoint).toBe(true);
    expect(!!track.getIsIncreasing).toBe(true);
    expect(!!track.getReversalCount).toBe(true);
    expect(!!track.getPhi).toBe(true);
    expect(!!track.getAlpha).toBe(true);
    expect(!!track.getBeta).toBe(true);
    expect(!!track.getLambda).toBe(true);
    expect(!!track.getLogL).toBe(true);

    expect(!!track.setSnrArray).toBe(true);
    expect(!!track.setIterationCount).toBe(true);
    expect(!!track.setNarray).toBe(true);
    expect(!!track.setMarray).toBe(true);
    expect(!!track.setSweetPoint).toBe(true);
    expect(!!track.setIsIncreasing).toBe(true);
    expect(!!track.setReversalCount).toBe(true);
    expect(!!track.setPhi).toBe(true);
    expect(!!track.setAlpha).toBe(true);
    expect(!!track.setBeta).toBe(true);
    expect(!!track.setLambda).toBe(true);
    expect(!!track.setLogL).toBe(true);
  });

  it('should have the correct initial values', function() {
    expect(track.getSnrArray()).toEqual([9999]);
    expect(track.getIterationCount()).toEqual(0);
    expect(track.getNarray()).toEqual([]);
    expect(track.getMarray()).toEqual([]);
    expect(track.getSweetPoint()).toEqual(4);
    expect(track.getIsIncreasing()).toEqual(0);
    expect(track.getReversalCount()).toEqual(0);
    expect(track.getPhi()).toEqual({ alpha: 10, beta: 0.4, gamma: 1e-4, lambda: 0.01 });
    expect(track.getAlpha().length).toEqual(7015);
    expect(track.getBeta().length).toEqual(7015);
    expect(track.getLambda().length).toEqual(7015);
    expect(track.getLogL().length).toEqual(7015);
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
