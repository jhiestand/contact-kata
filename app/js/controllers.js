'use strict';

/* Controllers */

angular.module('contactApp.controllers', ['contactApp.services']).
  controller('contactListCtrl', ['$scope', '$location', '$window', 'contactStorage', function($scope, $location, $window, contactStorage) {
	$scope.contacts = contactStorage.contacts;
	$scope.changeContact = function(){
	    $location.path('/edit/' + id);
	}
	$scope.addContact = function(){
	    $location.path('/add');
	    }
  }]).
  controller('contactEditCtrl', ['$scope', '$location','$routeParams', 'contactStorage', function($scope, $location, $routeParams, contactStorage){
    $scope.id = $routeParams.id || null;
    $scope.contact = {};
    
    if ($scope.id){
        $scope.contact = contactStorage.retrieve($scope.id);
    }
    
    $scope.save = function(){
        contactStorage.create($scope.contact.name, $scope.contact.address, $scope.contact.number);
        $location.path('/edit/' + $scope.contact.name);
        return true;
    };
    
  }]);
