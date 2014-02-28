'use strict';

angular.module('pyramidApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/game', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
