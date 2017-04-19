'use strict';

describe('Controller: DriverCtrl', function () {

  // load the controller's module
  beforeEach(module('waitrFeApp'));

  var DriverCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DriverCtrl = $controller('DriverCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DriverCtrl.awesomeThings.length).toBe(3);
  });
});
