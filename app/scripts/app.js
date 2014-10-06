'use strict';

/**
 * @ngdoc overview
 * @name iloverandomcatgifsApp
 * @description
 * # iloverandomcatgifsApp
 *
 * Main module of the application.
 */
angular
  .module('iloverandomcatgifsApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
