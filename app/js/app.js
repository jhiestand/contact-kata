'use strict';


// Declare app level module which depends on filters, and services
angular.module('contactApp', [
'ngRoute',
'contactApp.services',
'contactApp.controllers',
]).
    controller('sharedUtilityCtrl', ['$scope','$route', 'contactStorage', function($scope, $route, contactStorage){
        $scope.deleteAll = function(){
            contactStorage.deleteAll();
            $route.reload();
            };  
    }]).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      $routeProvider.when('/', {
      templateUrl: 'partials/list.html', 
      controller: 'contactListCtrl'
      });
      
      $routeProvider.when('/add/', {
      templateUrl: 'partials/edit.html', 
      controller: 'contactEditCtrl'
      });
      
      $routeProvider.when('/edit/:id', {
      templateUrl: 'partials/edit.html', 
      controller: 'contactEditCtrl'
      });
      
}]);

