(function () {
  'use strict';


  /**
   * @ngdoc function
   * @name waitrFeApp.controller:ReviewCtrl
   * @description
   * # ReviewCtrl
   * Controller of the waitrFeApp
   */
  angular.module('waitrFeApp')
    .controller('ReviewCtrl', ['$scope', '$routeParams', 'networkService', 'constants', 'toaster', ReviewCtrl]);

  function ReviewCtrl($scope, $routeParams, networkService, constants, toast) {
    const URI = constants.API_URL + '/drivers/' + $routeParams.driverId + '/reviews';

    angular.extend($scope, {
      init: init
    });

    ////////////

    function init() {
      console.log('In ReviewCtrl');
      $scope.driverId = $routeParams.driverId;
      getReviews(URI);
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
