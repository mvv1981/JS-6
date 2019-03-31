var phoneBook = {
    contacts: [],
};

function addContact(name, phones) {
    var elem = phoneBook.contacts.find(elem => elem.name == name);
    if(elem == undefined) {
        phoneBook.contacts.push({
            name: name,
            phones: phones
        });
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
            return 0;
        }
    );
}

function showPhoneBook(){

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

function removePhone(phones){    
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
    var slova = command.split(" ");
    if (slova[0] == "ADD"){
        var name = slova[1];
        var phones  = slova[2].split(',');
        return addContact(name, phones);
    }

    if(slova[0] == 'SHOW'){
        return showPhoneBook();
    }

    if (slova[0] == "REMOVE_PHONE"){
        return removePhone(slova[1]);

    }
};


