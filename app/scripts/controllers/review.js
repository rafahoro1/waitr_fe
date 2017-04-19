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
    .controller('ReviewCtrl', ['$scope', '$routeParams', 'networkService', ReviewCtrl]);

  function ReviewCtrl($scope, $routeParams, networkService) {
    const URI = 'http://localhost:8000/drivers/' + $routeParams.driverId + '/reviews';

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
          console.error(err);
        });
    }
  }
})();
