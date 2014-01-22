'use strict';


// Declare app level module which depends on filters, and services
angular.module('contactApp', [
'ngRoute',
'contactApp.services',
'contactApp.controllers',
]).

    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
      templateUrl: 'partials/list.html', 
      controller: 'userListCtrl'
      });
      
      $routeProvider.when('/add/', {
      templateUrl: 'partials/edit.html', 
      controller: 'userEditCtrl'
      });
      
      $routeProvider.when('/edit/:id', {
      templateUrl: 'partials/edit.html', 
      controller: 'userEditCtrl'
      });
      
}]);

