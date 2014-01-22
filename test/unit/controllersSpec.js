'use strict';

/* jasmine specs for controllers go here */
describe('The contact controller', function(){
    var scope = {};
    var ctrl = undefined;
    
    beforeEach(module('contactApp.controllers'));
    beforeEach(module('contactApp'));
    
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        ctrl = $controller('userListCtrl', {
            $scope: scope
        });   
    }));
    
    it('should exist', function(){
        expect(ctrl).toBeDefined();
    });
    
    it('should contain contacts', function(){
        expect(scope.contacts).toBeDefined();
    });
    
    
});

/* describe('The Contacts Editing', function(){
    var scope = {};
    var ctrl = undefined;
    
    beforeEach(module('contactApp.controllers'));
    beforeEach(module('contactApp'));
    
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        ctrl = $controller('userEditCtrl', {
            $scope: scope
        });   
    }));
    
     it('should create contacts from contactStorage', function(){
        var contact = scope.methods.create('Bob', 'Valley', '123');
        expect(contact.name).toEqual('Bob');
    });
    
}); */
