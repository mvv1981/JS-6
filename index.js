// Телефонная книга


/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
var phoneBook = {};
module.exports = function (command) {
    var commandList = command.split(" ");
    var commandName = commandList.shift();

    // Обработка команды ADD
    if (commandName == 'ADD') {
        var key = commandList.shift();

        if (!phoneBook[key]) {
            phoneBook[key] = {};
        }
        var stringNumbers = commandList.toString();
        var arrayNumbers = stringNumbers.split(",");
        for (i = 0; i < arrayNumbers.length; i++) {
            var phoneNumber = arrayNumbers[i];
            if (phoneNumber != "") {
                phoneBook[key][phoneNumber] = true;
            }
        }
        return true;
    }

    // Обработка команды REMOVE_PHONE
    if (commandName == 'REMOVE_PHONE') {
        var removePhone = false;
        for (let key in phoneBook) {

            if (commandList[0] in phoneBook[key]) {
                delete phoneBook[key][commandList[0]];
                removePhone = true;
            }
        }
        return removePhone;
    }

    // Обработка команды SHOW
    if (commandName === 'SHOW') {
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


}

