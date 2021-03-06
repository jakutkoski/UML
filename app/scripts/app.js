'use strict';

/**
 * @ngdoc overview
 * @name sinpfApp
 * @description
 * # sinpfApp
 *
 * Main module of the application.
 */
angular
  .module('sinpfApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/tabs.html',
        controller: 'TabsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
