'use strict';

/* jasmine specs for controllers go here */
describe('The controller', function(){
    var scope = {};
    var ctrl = undefined;
    
    beforeEach(module('contactApp.controllers'));
    beforeEach(module('contactApp'));
    
    describe('listCtrl', function(){
        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('contactListCtrl', {
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
    
    describe('editCtrl', function(){
        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('contactEditCtrl', {
                $scope: scope
            });   
        })); 
        
        it('should save a contact on save()', function(){
            scope.contact = {name:'Bob', address:'Valley Park', number:'123456'};
            expect(scope.save()).toEqual(true);
        });          
    });
    
});
