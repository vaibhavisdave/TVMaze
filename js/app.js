'use strict';

angular.module('app', ['app.services', 'app.controllers', 'ui.bootstrap']).
  config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
      template: '/views/home.html',
      title: 'Home',
    });

    $routeProvider.when('/genres/:genres', {
      template: '/views/genres.html',
      title: 'Bio'
    });

    $routeProvider.when('/showDetail/:genres/:id', {
      template: '/views/showDetail.html',
      title: 'ShowDetail'
    });

    $routeProvider.otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
  }]);