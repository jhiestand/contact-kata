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
                
                if (contact.name == undefined){
                    throw "Empty value for contact name";
                }
                
                contact['url'] = slugify(contact.name);
                
                this.contacts.push(contact);
                storageService.set('contacts', this.contacts);
                return contact;
            }, 
            
            delete: function(nameKey){
                if (nameKey){
                    var index = this.retrieve(nameKey);
                    if (!(index == undefined)){
                        this.contacts.splice(index, 1);
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
                contact['url'] = slugify(contact.name);
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
            
            deleteAll: function(){
                this.contacts = [];
                storageService.set('contacts', this.contacts);
                return true;
            },
            
        };
}]);
