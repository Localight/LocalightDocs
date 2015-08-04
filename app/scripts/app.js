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
      .when('/docs/schemas', {
        templateUrl: 'views/docs/schemas.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/docs/routes/giftcards', {
        templateUrl: 'views/docs/routes/giftcards.html',
        controller: 'GiftcardsCtrl',
        controllerAs: 'giftcards'
      })
      .when('/docs/routes/locations', {
        templateUrl: 'views/docs/routes/locations.html',
        controller: 'LocationsCtrl',
        controllerAs: 'locations'
      })
      .when('/docs/routes/owners', {
        templateUrl: 'views/docs/routes/owners.html',
        controller: 'OwnersCtrl',
        controllerAs: 'owners'
      })
      .when('/docs/routes/users', {
        templateUrl: 'views/docs/routes/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/docs/routes', {
        templateUrl: 'views/docs/routes/routes.html',
        controller: 'RoutespageCtrl',
        controllerAs: 'routesPage'
      })
      .when('/docs/triconcodes', {
        templateUrl: 'views/docs/triconcodes.html',
        controller: 'TriconcodesCtrl',
        controllerAs: 'triconCodes'
      })
      .when('/manuals/ngrok', {
        templateUrl: 'views/manuals/ngrok.html',
        controller: 'NgrokCtrl',
        controllerAs: 'ngrok'
      })
      .when('/docs', {
        templateUrl: 'views/docs/docs.html',
        controller: 'DocsCtrl',
        controllerAs: 'docs'
      })
      .when('/manuals', {
        templateUrl: 'views/manuals/manuals.html',
        controller: 'ManualsCtrl',
        controllerAs: 'manuals'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
