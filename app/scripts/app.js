'use strict';

/**
 * @ngdoc overview
 * @name localAngularDocsApp
 * @description
 * # localAngularDocsApp
 *
 * Main module of the application.
 */
angular
  .module('localAngularDocsApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/schemas', {
        templateUrl: 'views/schemas.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/giftcards', {
        templateUrl: 'views/giftcards.html',
        controller: 'GitcardsCtrl',
        controllerAs: 'gitcards'
      })
      .when('/locations', {
        templateUrl: 'views/locations.html',
        controller: 'LocationsCtrl',
        controllerAs: 'locations'
      })
      .when('/owners', {
        templateUrl: 'views/owners.html',
        controller: 'OwnersCtrl',
        controllerAs: 'owners'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
