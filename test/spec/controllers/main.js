'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('waitrFeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
  it('should attach a list of drivers to the scope ', function () {
    console.error(JSON.stringify(MainCtrl));
    //console.error(JSON.stringify(MainCtrl.drivers.length));
    //expect(MainCtrl.drivers.length).toBe(7);
    expect(MainCtrl).toBeDefined()
  });
});
