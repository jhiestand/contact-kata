'use strict';

/* Controllers */

angular.module('contactApp.controllers', ['contactApp.services']).
  controller('userListCtrl', ['$scope', 'contactStorage', function($scope, contactStorage) {
	$scope.contacts = contactStorage.contacts;
  }])
