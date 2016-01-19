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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/input.html',
        controller: 'InputCtrl',
        controllerAs: 'input'
      })
      .when('/input', {
        templateUrl: 'views/input.html',
        controller: 'InputCtrl',
        controllerAs: 'input'
      })
      .when('/graph', {
        templateUrl: 'views/graph.html',
        controller: 'GraphCtrl',
        controllerAs: 'graph'
      })
      .when('/instructions', {
        templateUrl: 'views/instructions.html',
        controller: 'InstructionsCtrl',
        controllerAs: 'instructions'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
