'use strict';

/**
 * @ngdoc overview
 * @name waitrFeApp
 * @description
 * # waitrFeApp
 *
 * Main module of the application.
 */
angular
  .module('waitrFeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'toaster'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/drivers/:driverId', {
        templateUrl: 'views/driver.html',
        controller: 'DriverCtrl',
        controllerAs: 'driver'
      })
      .when('/drivers/:driverId/reviews', {
        templateUrl: 'views/review.html',
        controller: 'ReviewCtrl',
        controllerAs: 'review'
      })
      .when('/drivers/:driverId/deliveries/:deliveryId/review', {
        templateUrl: 'views/delivery.html',
        controller: 'DeliveryCtrl',
        controllerAs: 'delivery'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
