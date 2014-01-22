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
            storage.deleteAll();      
        });
    });
   
    it('should exist', function(){
        expect('storage').toBeDefined;
    });
    
    describe('method', function(){ 
        
        it('should own contacts object', function(){
            expect(storage.contacts).toBeDefined();  
        });
        
        describe('retrieve', function(){
            it('should return undefined if key is not passed', function(){
                expect(storage.retrieve()).toBeUndefined();
            });
            
            it('should return undefined if there is no match for key passed', function(){
                expect(storage.retrieve(undefined)).toBeUndefined();
            });
        });
        
        describe('create', function(){
            it('should create object by passing parameters and return that object', function(){
                expect(storage.create('Sal', '123', 'ValleyDrive')).not.toBe(undefined);
                expect(storage.retrieve('Sal')).toBeDefined();
            });
        
            it('should throw an error if no data is passed', function(){
                expect(function(){
                    storage.create('', '', '')}).toThrow(new Error("Empty values"));
                });
            
            it('should throw an error if name already exists', function(){
                expect(function(){
                    storage.create('Sally', 'Valley Park', '1234');
                    storage.create('Sally', 'Valley Drive', '4321');
                }).toThrow(new Error("This contact already exists"));
            });
        });
        
        describe('update', function (){
            it('should have different values if updated', function(){
                storage.create('Sal', 'ValleyDrive', '123');
                storage.update('Sal', 'ValleyDrive', '321');
                var index = storage.retrieve('Sal');
                expect(storage.contacts[index]['number']).toEqual('321');
            });
            
            it('should throw an error if updating a nonexistent contact', function(){
                expect(function(){
                    storage.update('Nobody', 'Valley Park', '1234')
                }).toThrow();
            });
        });
        
        describe('delete', function(){
            it('should return true upon deleting an object', function(){
                storage.create('Sal', 'ValleyDrive', '123');
                var index = storage.retrieve('Sal');
                expect(storage.delete('Sal')).toEqual(true);
            });
            
            it('should return throw an error if argument is missing or object does not exist', function(){
                storage.create('Sal', 'ValleyDrive', '123');
                expect(function(){
                    storage.delete('Pal');
                    }).toThrow();
                expect(function(){
                    storage.delete('');
                    }).toThrow();
            });
        });
        it('should empty contacts using deleteAll', function(){
            storage.create('Sal', 'ValleyDrive', '123');
            storage.create('Pal', 'ValleyDrive', '123');
            storage.deleteAll();
            expect(storage.contacts.length).toEqual(0);
            });
            
        /* it('should have a normalized slug after creation', function(){
            var testContact = storage.create('Sal is the best', 'ValleyDrive', '123');
            expect(testContact.url).toEqual('sal-is-the-best'); 
            
        }); */
    });
});
