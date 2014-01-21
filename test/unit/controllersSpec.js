'use strict';

/* jasmine specs for controllers go here */
describe('The Contacts List', function(){
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
    
    it('should have contacts in its scope', function(){
        expect(scope).toBeDefined();
    });
});
