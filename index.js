// Телефонная книга
var phoneBook = {
	contacts: []
};


function addContact(name, phone) {
	var element = phoneBook.contacts.find(element => element.name === name);
	if (element === undefined) {
		phoneBook.contacts.push({
			name: name,
			phone: phone
		});
	}
	else {
		element.phone = element.phone > 0 ? element.phone.concat(", " + phone) : element.phone.concat(phone);
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

function showPhoneBook() {
	var result = [];
	for (var i = 0; i < phoneBook.contacts.length; i++) {
		if (phoneBook.contacts[i].phone.length > 0) {
			result.push(
				phoneBook.contacts[i].name + ": " + phoneBook.contacts[i].phone.join(", ")
			)
		}
	}
	return result;
}



function delPhone(phone) {
	var element = phoneBook.contacts.find(element => element.phone.includes(phone));
	if (element !== undefined) {
		var idx = element.phone.indexOf(phone);
		if (idx !== -1) {
			element.phone.splice(idx, 1);
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
	var info = command.split(" ");
	if (info[0] === "ADD") {
		var name = info[1];
		var phone = info[2].split(',');
		return addContact(name, phone);
	}
	if (info[0] === "SHOW") {
		return showPhoneBook();
	}
	if (info[0] === "REMOVE_PHONE") {
		return delPhone(info[1]);
	}
};


