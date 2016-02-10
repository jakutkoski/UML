'use strict';

describe('Constant: UMLtable', function () {

  // load the service's module
  beforeEach(module('sinpfApp'));

  // instantiate service
  var UMLtable;
  beforeEach(inject(function (_UMLtable_) {
    UMLtable = _UMLtable_;
  }));

  it('should be an object', function () {
    expect(typeof UMLtable).toBe('object');
  });

});
