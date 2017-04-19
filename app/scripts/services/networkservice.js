(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name waitrFeApp.networkService
   * @description
   * # networkService
   * Service in the waitrFeApp.
   */
  angular.module('waitrFeApp')
    .service('networkService', ['$q', '$http', networkService]);

  function networkService($q, $http) {
    var service = {
      'get': get,
      'post': post
    };
    return service;

    /////////////////////////////////

    function get(uri) {
      var delay = $q.defer();
      $http.get(uri).then(
        function (response) {
          delay.resolve(response.data);
        },
        function (response) {
          delay.reject(response);
        });
      return delay.promise;
    }

    function post(uri, obj, params) {
      var delay = $q.defer();
      if (params) {
        uri = uri + '?';
        angular.forEach(params, function (param) {
          uri = uri + (param.name + '=' + param.value) + '&';
        });
        uri = uri.slice(0, -1);
      }
      $http.post(uri, obj).then(
        function (response) {
          delay.resolve(response.data);
        },
        function (response) {
          delay.reject(response);
        });
      return delay.promise;
    }
  }

}());
