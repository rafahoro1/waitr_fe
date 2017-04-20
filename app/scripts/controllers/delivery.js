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
    .controller('DeliveryCtrl', ['$scope', '$routeParams', 'networkService', 'constants', 'toaster',DeliveryCtrl]);

  function DeliveryCtrl($scope, $routeParams, networkService, constants, toast) {
    const URI = constants.API_URL + '/drivers/' + $routeParams.driverId + '/deliveries/' + $routeParams.deliveryId + '/review';
    angular.extend($scope, {
      init: init,
      createDeliveryReview: createDeliveryReview
    });

    ////////////

    function init() {
      //console.log('In DeliveryCtrl');
      $scope.deliveryId= $routeParams.deliveryId;
      $scope.driverId= $routeParams.driverId;
    }

    function createDeliveryReview() {
      var data={
        rating: $scope.review.rating,
        description:$scope.review.description
      };
      networkService.post(URI, data)
        .then(function (/*response*/) {
          $scope.review = {};
          toast.pop('info','DeliveryReview successfully created');
        })
        .catch(function (err) {
          toast.pop('error',err.data.message);
          console.error(JSON.stringify(err));
        });
    }
  }
})();
