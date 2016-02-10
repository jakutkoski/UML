'use strict';

describe('Service: iteration', function () {

  // load the service's module
  beforeEach(module('sinpfApp'));

  // instantiate service
  var iteration;
  beforeEach(inject(function (_iteration_) {
    iteration = _iteration_;
  }));

  it('should provide a run function', function() {
    expect(iteration.run).toBeDefined();
  });

});
