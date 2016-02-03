'use strict';

describe('Service: graphing', function () {

  // load the service's module
  beforeEach(module('sinpfApp'));

  // instantiate service
  var graphing;
  beforeEach(inject(function (_graphing_) {
    graphing = _graphing_;
  }));

  it('should do something', function () {
    expect(!!graphing).toBe(true);
  });

});
