'use strict';

/* jasmine specs for controllers go here */

describe('contactStorage Service', function(){
   beforeEach(module('contactApp.services'));
   beforeEach(module('contactApp'));
   
    describe('contactStorage Methods', function(){ 
        beforeEach(inject(function(contactStorage){}));
        
        it('should own contacts object', inject(function(contactStorage){
            expect(contactStorage.contacts).toBeDefined();  
        }));
   
        it('should return undefined if key is not passed', inject(function(contactStorage){
            expect(contactStorage.retrieve()).toBeUndefined();
        }));
        
        it('should return undefined if there is no match for key passed', inject(function(contactStorage){
            expect(contactStorage.retrieve(undefined)).toBeUndefined();
        }));
        
        it('should return index if key matches', inject(function(contactStorage){
            contactStorage.create('Sal', '123', 'ValleyDrive');
            expect(contactStorage.retrieve('Sal')).toBeDefined();
        }));
        
        it('should have a different value', inject(function(contactStorage){
            contactStorage.create('Sal', 'ValleyDrive', '123');
            contactStorage.update('Sal', 'ValleyDrive', '321');
            var index = contactStorage.retrieve('Sal');
            expect(contactStorage.contacts[index]['number']).toEqual('321');
        }));
        
        it('should return true upon deleting an object', inject(function(contactStorage){
            contactStorage.create('Sal', 'ValleyDrive', '123');
            var index = contactStorage.retrieve('Sal');
            expect(contactStorage.delete('Sal')).toEqual(true);
        }));
        
        it('should return false if argument is missing or index is missing', inject(function(contactStorage){
            contactStorage.create('Sal', 'ValleyDrive', '123');
            expect(contactStorage.delete('Pal')).toEqual(false);
        }));
        
    });
});
