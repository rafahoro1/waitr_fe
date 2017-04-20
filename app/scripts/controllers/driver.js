(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name waitrFeApp.controller:DriverCtrl
   * @description
   * # DriverCtrl
   * Controller of the waitrFeApp
   */
  angular.module('waitrFeApp')
    .controller('DriverCtrl', ['$scope', '$routeParams', 'networkService', 'toaster',DriverCtrl]);

  function DriverCtrl($scope, $routeParams, networkService, toast) {
    const URI = 'http://localhost:8000/drivers/'+$routeParams.driverId;
    angular.extend($scope, {
      init: init
    });

    ////////////

    function init() {
      console.log('In DriverCtrl');
      getDrivers(URI);
    }

    function getDrivers(uri) {
      networkService.get(uri)
        .then(function (response) {
          $scope.driver = response;
        })
        .catch(function (err) {
          toast.pop('error',err.data.message);
          console.error(JSON.stringify(err));
        });
    }
  }
})();
