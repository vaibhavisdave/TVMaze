'use strict';

angular.module('app.services', ['ngResource']).
  factory('tvMazeFactory', function ($location, $rootScope, $http, $q) {
    var searchUrl = 'https://api.tvmaze.com/search/shows?q='
    var detailsUrl = 'https://api.tvmaze.com/shows/'
    var deferred = $q.defer();

    return {


      searchShows: function (genres) {
        var deferred = $q.defer();
        var url = searchUrl + genres;
        if (angular.isDefined(genres)) {
          $http({
            method: 'GET',
            url: url
          })
            .then(function success(response) {
              return deferred.resolve(response);
            }, function error(response) {
            });
          return deferred.promise;
        }


      },

      getShowDetail: function (id) {
        var deferred = $q.defer();
        var url = detailsUrl + id;
        if (angular.isDefined(id)) {
          $http({
            method: 'GET',
            url: url
          })
            .then(function success(response) {
              return deferred.resolve(response);
            }, function error(response) {
            });
          return deferred.promise;
        }
      },

    }
  });