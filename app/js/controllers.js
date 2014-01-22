'use strict';

/* Controllers */

angular.module('contactApp.controllers', ['contactApp.services']).
  controller('userListCtrl', ['$scope', '$location', 'contactStorage', function($scope, $location, contactStorage) {
	$scope.contacts = contactStorage.contacts;
	$scope.changeUser = function(){
	    $location.path('/edit/' + id);
	}
  }]).
  controller('userEditCtrl', ['$scope', '$routeParams', 'contactStorage', function($scope, $routeParams, contactStorage){
    var id = $routeParams.id || null;
    $scope.contact = {};
    
    if (id){
        $scope.contact = contactStorage.contacts[contactStorage.retrieve(id)];
    }
    
    $scope.save = function(){
        contactStorage.create($scope.contact);
    };
    
  }]);
