(function () {

'use strict';


  angular.module('teaApp', ['ngRoute', 'ngAnimate'])

  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/", {
          templateUrl: "./partials/partial1.html",
          controller: "MainController"
        })
        .otherwise({
           redirectTo: '/'
        });
    }
  ]);

  //Load controller
  angular.module('teaApp')

  .controller('MainController', [
    '$scope',
    function($scope) {
      $scope.test = "Testing...";
    }
  ]);

}());
