// Телефонная книга
var phoneBook = {
    contacts: []
};

function addPhonebook(name, phones) {
    // console.info(name);
    // console.info(phones);
    var elem = phoneBook.contacts.find(elem => elem.name == name);
    if(elem == undefined) {
        phoneBook.contacts.push({
            name: name,
            phones: phones
        })
    }
    else {
        elem.phones = elem.phones.concat(phones);
    }
    phoneBook.contacts = phoneBook.contacts.sort(
        function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (a.name < b.name) {
              return -1;
            }
            // a должно быть равным b
            return 0;
        });
}

function showPhonebook(){

    var res = [];
    for (var i = 0; i < phoneBook.contacts.length; i++){
        if(phoneBook.contacts[i].phones.length > 0) {
            res.push(
                phoneBook.contacts[i].name + ": " + phoneBook.contacts[i].phones.join(", ")
            )
        }
    }    
    return res;
}

function removePhonebook(phones){    
    var elem = phoneBook.contacts.find(elem => elem.phones.includes(phones));
    if(elem != undefined){
        var index = elem.phones.indexOf(phones);        
        if (index != -1){
            elem.phones.splice(index, 1);
            return true;
        }
    }
    return false;
}


/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    // 'ADD Ivan 555-10-01,555-10-03'
    var slova = command.split(" ");
    if (slova[0] == "ADD"){
        var name = slova[1];
        var phones  = slova[2].split(',');
        return addPhonebook(name, phones);
    }

    if(slova[0] == 'SHOW'){
        return showPhonebook();
    }

    if (slova[0] == "REMOVE_PHONE"){
        return removePhonebook(slova[1]);
        
    }

};
