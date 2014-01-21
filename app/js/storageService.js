angular.module('cai.services', [])
    .factory('storageService', ['$log', function ($log) {
        var service = {
            get: function(key) {
                var value = localStorage.getItem(key);
                $log.debug('Local Storage: Retrieved key: ' + key + ', value: ' + value);
                if (value && value != 'undefined') {
                    return angular.fromJson(value);
                }
                return null;
            },

            set: function(key,value) {
                var storeValue = angular.toJson(value);
                localStorage.setItem(key, storeValue);
                $log.debug('Local Storage: Stored key: ' + key + ', value: ' + storeValue);
            },

            remove: function(key) {
                localStorage.removeItem(key);
                $log.debug('Local Storage: Removed key: ' + key);
            },

            has: function(key) {
                var hasItem = localStorage.getItem(key);
                $log.debug('Local Storage: Contains key: ' + key + ', result: ' + hasItem);
                return (hasItem) ? true : false;
            }
        };

        return service;
    }]);
