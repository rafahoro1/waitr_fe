(function () {
  'use strict';
  /**
   * @ngdoc function
   * @name waitrFeApp.controller:DeliveryCtrl
   * @description
   * # DeliveryCtrl
   * Controller of the waitrFeApp
   */
  angular.module('waitrFeApp')
    .controller('DeliveryCtrl', ['$scope', '$routeParams', 'networkService', DeliveryCtrl]);

  function DeliveryCtrl($scope, $routeParams, networkService) {
    const URI = 'http://localhost:8000/drivers/' + $routeParams.driverId + '/deliveries/' + $routeParams.deliveryId + '/review';
    angular.extend($scope, {
      init: init,
      createDeliveryReview: createDeliveryReview
    });

    ////////////

    function init() {
      console.log('In DeliveryCtrl');
    }

    function createDeliveryReview() {
      var data={
        rating: $scope.review.rating,
        description:$scope.review.description
      };
      networkService.post(URI, data)
        .then(function (response) {
          $scope.driver = response;
        })
        .catch(function (err) {
          console.error(err);
        });
    }
  }
})();
