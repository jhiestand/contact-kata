'use strict';

/* Controllers */

angular.module('contactApp.controllers', ['contactApp.services']).
  controller('userListCtrl', ['$scope', '$location', '$window', 'contactStorage', function($scope, $location, $window, contactStorage) {
	$scope.contacts = contactStorage.contacts;
	$scope.changeContact = function(){
	    $location.path('/edit/' + id);
	}
	$scope.addContact = function(){
	    var addBox = $window.open('/#/add', 'addBox', 'width=400,height=500');
	    }
  }]).
  controller('userEditCtrl', ['$scope', '$location','$routeParams', 'contactStorage', function($scope, $location, $routeParams, contactStorage){
    $scope.id = $routeParams.id || null;
    $scope.contact = {name: 'should not be blank'};
    if ($scope.id){
        $scope.contact = contactStorage.retrieve($scope.id);
    }
    
    $scope.save = function(){
        contactStorage.create($scope.contact.name, $scope.contact.address, $scope.contact.number);
        $location.path('/edit/' + $scope.contact.name);
        
        
    };
    
  }]);
