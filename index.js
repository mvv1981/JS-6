// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

module.exports = function (command) {
    
   var arr = command.split(' ');
    var commandName = arr[0];
    
    if(commandName === 'ADD') {
        var personName = arr[1];
        var phoneNumbers = arr[2].split(',');
        
        var addContact = function() {            
                for(var key in phoneBook) {
                if(key === personName) {
                   phoneBook[key] = phoneBook[key].concat(phoneNumbers);
                    return;    
                }
            } 
                 phoneBook[personName] = phoneNumbers;
                return;
            }
        
        return addContact();
            
    }
    
    if(commandName === 'REMOVE_PHONE') {
        var phoneNumber = arr[1];
        var removePhone = function() {
            for(var key in phoneBook) {
                if(phoneBook[key].indexOf(phoneNumber) !== -1) {
                    var index = phoneBook[key].indexOf(phoneNumber);
                    phoneBook[key].splice(index, 1);
                    return true;    
                }
            } 
                 
                return false;
            
        }
        
        return removePhone();
    }
    
    if(commandName === 'SHOW') {
        var showPhoneBook = function() {
            var strResult = [];
            for(var key in phoneBook) {
                if(phoneBook[key].length === 0) continue;
                strResult.push(key + ': ' + phoneBook[key].join(', '));
                
            }
            
            return strResult.sort();
        }
        
        return showPhoneBook();
    }
    
    
};
