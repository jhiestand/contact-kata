'use strict';

/* Controllers */

angular.module('contactApp.controllers', ['contactApp.services']).
  controller('contactListCtrl', ['$scope', '$location', '$window', 'contactStorage', function($scope, $location, $window, contactStorage) {
	$scope.contacts = contactStorage.contacts;
	
	$scope.viewContact = function(id){
	    $location.path('/contact/' + id);
	};
	$scope.editContact = function(id){
	    $location.path('/edit/' + id);
	};
	
	$scope.addContact = function(){
	    $location.path('/add');
	    };
	    
	$scope.deleteContact = function(name){
	      contactStorage.delete(name);
	      };
	      
    $scope.save = function(name, address, number){
        contactStorage.create(name, address, number);
        return true;
        };
        
  }]).
  controller('contactEditCtrl', ['$scope', '$location','$routeParams', 'contactStorage', function($scope, $location, $routeParams, contactStorage){
    $scope.contact = {};
    
    $scope.id = $routeParams.id || null;
    this.id = $scope.id;
    
    if (this.id){
        $scope.contact = contactStorage.retrieve(this.id);
        $scope.contacts = contactStorage.contacts;
        if ($location.path().split('/')[1] == 'contact'){
            $scope.view = {};
            $scope.pageName = "View contact";
            }
        
    }
    
    $scope.save = function(){
        contactStorage.create($scope.contact.name, $scope.contact.address, $scope.contact.number);
        $location.path('/edit/' + $scope.contact.name);
        return true;
    };
    
    $scope.cancel = function(){
        $location.path('/');
        return true;
        }
  }]);
