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
        controller: 'GiftcardsCtrl',
        controllerAs: 'giftcards'
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
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/routes', {
        templateUrl: 'views/routes.html',
        controller: 'RoutespageCtrl',
        controllerAs: 'routesPage'
      })
      .when('/triconcodes', {
        templateUrl: 'views/triconcodes.html',
        controller: 'TriconcodesCtrl',
        controllerAs: 'triconCodes'
      })
      .when('/ngrok', {
        templateUrl: 'views/ngrok.html',
        controller: 'NgrokCtrl',
        controllerAs: 'ngrok'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
