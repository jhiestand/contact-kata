'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('contactApp.services', ['cai.services']).
    factory('contactStorage', ['storageService', function(storageService){
        var contacts = storageService.get('contacts') || [];
        
        return {
            contacts: contacts, 
            create: function(name, address, number){
                
                var contact = {};
                
                contact = {
                    name: name,
                    address: address,
                    number: number
                };
                contacts.push(contact);
                storageService.set('contacts', contacts);
                return contact;
            }, 
            
            delete: function(nameKey){
                if (nameKey){
                    var index = this.retrieve(nameKey);
                    if (!(index == undefined)){
                    contacts.splice(index, 1);
                    return true;
                    }
                }
                return false;
            },
            
            update: function(name, address, number){
                var index = this.retrieve(name);
                var contact = {};
                contact = {
                    name: name,
                    address: address,
                    number: number
                    }
                
                contacts[index] = contact;
                  
                storageService.set('contacts', contacts);
                return contact;
            },
            
            retrieve: function retrieve(nameKey){
                if (nameKey) {
                    for (var i = 0; i < contacts.length; i++){
                        if (nameKey == contacts[i]['name']){
                            return contacts[i];
                        }
                    }
                    return undefined;
                }
                return undefined;
            },
        getAll: function(){
            return contacts;
            }
        };
}]);
