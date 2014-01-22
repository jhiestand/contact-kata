'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('contactApp.services', ['cai.services']).
    factory('contactStorage', ['storageService', function(storageService){
        var contacts = storageService.get('contacts') || [];
        var slugify = function(words){
            return words.toLowerCase().replace(/\s+/g, '-');
        };
        
        return {
            contacts: contacts, 
            
            create: function(name, address, number){
                var contact = {};
                
                contact = {
                    name: name,
                    address: address,
                    number: number
                };
                
                if ((contact.name.length && contact.address.length && contact.number.length) == 0){
                    throw "Empty values";
                }
                
                if (this.retrieve(contact['name']) != undefined) {
                    throw "This contact already exists";
                }
                 
                // contact['url'] = slugify(contact.name);
                
                this.contacts.push(contact);
                storageService.set('contacts', this.contacts);
                return contact;
            }, 
            
            delete: function(nameKey){
                    var _contact, index = this.retrieve(nameKey);
                    
                    if (nameKey.length == 0 || nameKey == undefined){
                        throw "Missing name to delete";
                    }
                    
                    if (index == undefined){
                        throw "No contact by that name";   
                    }
                this.contacts.splice(index, 1);
                return true;
            },
            
            update: function(name, address, number){
                var _contact, index = this.retrieve(name);
                var contact = {
                    name: name,
                    address: address,
                    number: number
                    }
                
                if (index == undefined){
                    throw "Contact does not exist yet";
                    }
                    
                // contact['url'] = slugify(contact.name);
                this.contacts[index] = contact;
                 
                storageService.set('contacts', this.contacts);
                return contact;
            },
            
            retrieve: function retrieve(nameKey){
                if (nameKey) {
                    for (var i = 0; i < this.contacts.length; i++){
                        if (nameKey == this.contacts[i]['name']){
                            return this.contacts[i];
                        }
                    }
                    return undefined;
                }
                return undefined;
            },
            
            retrieveAll: function(){
                return this.contacts
                },
            
            deleteAll: function(){
                this.contacts = [];
                storageService.set('contacts', this.contacts);
                return true;
            },
            
        };
}]);
