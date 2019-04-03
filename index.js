// Телефонная книга
var phoneBook = {
};

/**
 * Барабаш Максим Сергеевич
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var comandName = command.split(' ');
    var part1 = comandName[1],//name контакта, если ADD; номер, если REMOVE;
        part2 = comandName[2];//строка с номерами, если ADD;
    switch (comandName[0]) {
        case 'ADD': return addContact(part1, part2);
        case 'SHOW': return showContactList();
        case 'REMOVE_PHONE': return removeContact(part1);
    }
};
function addContact(name, phone) {
    var contactList = Object.getOwnPropertyNames(phoneBook);
    if ((contactList.indexOf(name) === -1) || (phoneBook === undefined)) {
        phoneBook[name] = phone;
    }
    else {
        phoneBook[name] = phoneBook[name] + ',' + phone;
    }
}
function showContactList() {
    var result = [];
    for (var key in phoneBook) {
        if (phoneBook[key] !== '') {
            var record = key + ": " + (phoneBook[key]).replace(/,/g,', ');
            result.push(record);
        }
    }
    return result.sort();
}
function removeContact(number) {
    var removeCount = 0;
    for (var key in phoneBook) {
        if (phoneBook[key].indexOf(number) !== -1) {
            if (phoneBook[key].indexOf(',') === -1) {
                phoneBook[key] = (phoneBook[key]).replace(number, '');
                removeCount++;
            }
            else {
                phoneBook[key] = (phoneBook[key]).replace(',' + number, '');
                removeCount++;
            }
        }
    }
    if (removeCount > 0) {
        return true;
    }
}
