'use strict';
angular.module('app.controllers', []).
  controller('app', ['$scope', '$route', function ($scope, $route) {

    //Listener for route change. Here I am dynamically setting title and template.
    $scope.$on("$routeChangeSuccess", function ($currentRoute, $previousRoute) {
      $scope.title = $route.current.title;
      $scope.template = $route.current.template;
    });
  }]).
  controller('tvMazeController', ['$scope', 'tvMazeFactory', '$location', function ($scope, tvMazeFactory, $location) {

    //Sync search params and values with cookie.


    //Toggle on/off tag values.
    function showGenreTVshaows(genre) {
      $location.path("/genres/" + genre);
    };

  }]).
  controller('Header', ['$scope', function ($scope) {

    //Used for Bootstrap to make navbar default closed when viewport shrinks.
    $scope.isCollapsed = true;
  }]).
  controller('showGenresController', ['$scope', 'tvMazeFactory', '$routeParams', '$location', function ($scope, tvMazeFactory, $routeParams, $location) {
    $scope.genres = $routeParams.genres;
    function getShows() {
      $scope.tvShows = tvMazeFactory.searchShows($scope.genres);
    };
    getShows();

    $scope.getShowDetail = function (showId) {
      $location.path("/showDetail/" + $scope.genres + "/" + showId);
    };
  }]).
  controller('showDetailsController', ['$scope', 'tvMazeFactory', '$routeParams', '$location', function ($scope, tvMazeFactory, $routeParams, $location) {
    var id = $routeParams.id;
    var genres = $routeParams.genres;
    function getShowDetail() {
      $scope.showDetail = tvMazeFactory.getShowDetail(id);
    };
    getShowDetail();

    $scope.back = function () {
      $location.path("/genres/" + genres);
    };
  }]);