// Телефонная книга


/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
var phoneBook = {};
module.exports = function (command) {
    var commandList = command.split(" ");
    var commandName = commandList.shift();

    switch (commandName) {
        case 'ADD':
            return addContact(commandList);
        case 'REMOVE_PHONE':
            return removePhone(commandList);
        case 'SHOW':
            return showContacts();
        default:
            break;
    }
}
function addContact(parametr) {
    var key = parametr.shift();

    if (!phoneBook[key]) {
        phoneBook[key] = {};
    }
    var stringNumbers = parametr.toString();
    var arrayNumbers = stringNumbers.split(",");
    for (i = 0; i < arrayNumbers.length; i++) {
        var phoneNumber = arrayNumbers[i];
        if (phoneNumber != "") {
            phoneBook[key][phoneNumber] = true;
        }
    }
    return true;
}
function removePhone(parametr) {
    var removePhone = false;
    for (let key in phoneBook) {
        if (parametr[0] in phoneBook[key]) {
            delete phoneBook[key][parametr[0]];
            removePhone = true;
        }
    }
    return removePhone;
}
function showContacts() {
    var finalPhoneBook = [];
    var tempPhoneBook = Object.keys(phoneBook).sort();
    for (i = 0; i < tempPhoneBook.length; i++) {
        var tZ = tempPhoneBook[i];
        var tempValue = Object.keys(phoneBook[tZ]);
        if (tempValue.toString().length > 1) {
            finalPhoneBook.push(tempPhoneBook[i] + ": " + tempValue.join(', '));
        } else {
            tempPhoneBook.splice(i, 1);
            i--;
        }
    }
    return finalPhoneBook;
}    
