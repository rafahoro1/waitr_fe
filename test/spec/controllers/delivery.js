'use strict';

describe('Controller: DeliveryCtrl', function () {

  // load the controller's module
  beforeEach(module('waitrFeApp'));

  var DeliveryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeliveryCtrl = $controller('DeliveryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DeliveryCtrl.awesomeThings.length).toBe(3);
  });
});
