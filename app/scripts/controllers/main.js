(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name waitrFeApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the waitrFeApp
   */
  angular.module('waitrFeApp')
    .controller('MainCtrl', ['$scope', MainCtrl]);


  function MainCtrl($scope) {

    angular.extend($scope, {
      init: init
    });

    //////////

    function init(){
      //console.log('in MainCtrl');
      $scope.deliveryId=Math.floor((Math.random() * 10000) + 1);
      $scope.drivers = [
        'dr_1',
        'dr_2',
        'dr_3',
        'dr_4',
        'dr_5',
        'dr_6',
        'dr_nr'
      ];
    }
  }

})();
