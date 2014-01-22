'use strict';

/* jasmine specs for controllers go here */
describe('The controller', function(){
    var scope = {};
    var ctrl = undefined;
    
    beforeEach(module('contactApp.controllers'));
    beforeEach(module('contactApp'));
    
    describe('contactlistCtrl', function(){
        beforeEach(inject(function($location, $controller, $rootScope){
            scope = $rootScope.$new();
            ctrl = $controller('contactListCtrl', {
                $location: location,
                $scope: scope
            });   
        }));
        
        it('should exist', function(){
            expect(ctrl).toBeDefined();
        });
        
        it('should contain contacts on its scope', function(){
            expect(scope.contacts).toBeDefined();
        });
        
        describe('viewContact method', function(){
            it('should redirect to id passed to it', function(){
                scope.contacts = {
                name: 'Bob',
                address: 'Village Town',
                number: '12345'
                };
                // pass
            });
        });
            
        describe('editContact method', function(){
            //pass
        });
        
        describe('addContact method', function(){
            // pass
        });
        
        describe('deleteContact method', function(){
            it('should delete specified contact along name', function(){
                var contactsLength;
                var info = {
                name: 'Rob',
                address: 'Village Town',
                number: '12345'
                };
                scope.save(info.name, info.address, info.number);
                contactsLength = scope.contacts.length;
                scope.deleteContact(info.name);
                expect(scope.contacts.length).toBe(contactsLength -1);
            });
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
