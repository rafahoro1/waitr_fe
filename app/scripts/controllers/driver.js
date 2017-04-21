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
    .controller('DriverCtrl', ['$scope', '$routeParams', 'networkService', 'constants', 'toaster',DriverCtrl]);

  function DriverCtrl($scope, $routeParams, networkService, constants, toast) {
    var URI_DRIVERS = constants.API_URL + '/drivers/'+$routeParams.driverId;
    var URI_REVIEWS = constants.API_URL + '/drivers/' + $routeParams.driverId + '/reviews';

    angular.extend($scope, {
      init: init
    });

    ////////////

    function init() {
      //console.log('In DriverCtrl');
      $scope.driverId = $routeParams.driverId;
      getDrivers(URI_DRIVERS);
      getReviews(URI_REVIEWS);

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

    function getReviews(uri) {
      networkService.get(uri)
        .then(function (response) {
          $scope.reviews = response;
        })
        .catch(function (err) {
          toast.pop('error',err.data.message);
          console.error(err);
        });
    }
  }
})();
