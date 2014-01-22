'use strict';

/* jasmine specs for controllers go here */

describe('storage', function(){
    beforeEach(module('contactApp.services'));
    
    beforeEach(module('contactApp'));
    
    var log;
    beforeEach(inject(function($log){
        log = $log;    
    }));
    
    var storage = {};
    beforeEach(function(){
        inject(function($injector){
            storage = $injector.get('contactStorage');       
        });
    });
   
    it('should exist', function(){
        expect('storage').toBeDefined;
    });
    
    describe('methods', function(){ 
        
        it('should own contacts object', function(){
            expect(storage.contacts).toBeDefined();  
        });
   
        it('should return undefined if key is not passed', function(){
            expect(storage.retrieve()).toBeUndefined();
        });
        
        it('should return undefined if there is no match for key passed', function(){
            expect(storage.retrieve(undefined)).toBeUndefined();
        });
        
        it('should return index if key matches', function(){
            storage.create('Sal', '123', 'ValleyDrive');
            expect(storage.retrieve('Sal')).toBeDefined();
        });
        
        it('should have a different value', function(){
            storage.create('Sal', 'ValleyDrive', '123');
            storage.update('Sal', 'ValleyDrive', '321');
            var index = storage.retrieve('Sal');
            expect(storage.contacts[index]['number']).toEqual('321');
        });
        
        it('should return true upon deleting an object', function(){
            storage.create('Sal', 'ValleyDrive', '123');
            var index = storage.retrieve('Sal');
            expect(storage.delete('Sal')).toEqual(true);
        });
        
        it('should return false if argument is missing or index is missing', function(){
            storage.create('Sal', 'ValleyDrive', '123');
            expect(storage.delete('Pal')).toEqual(false);
        });
        
        it('should empty contacts using deleteAll', function(){
            storage.create('Sal', 'ValleyDrive', '123');
            storage.create('Pal', 'ValleyDrive', '123');
            storage.deleteAll();
            expect(storage.contacts.length).toEqual(0);
            });
            
        it('should have a normalized slug after creation', function(){
            var testContact = storage.create('Sal is the best', 'ValleyDrive', '123');
            expect(testContact.url).toEqual('sal-is-the-best');
            
        });
    });
});
