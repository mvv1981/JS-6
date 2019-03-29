// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
  function add(name, contacts) {
    if(!phoneBook[name]) {
      phoneBook[name] = {};
      for (let i = 0; i < contacts.length; i++) {
        phoneBook[name][i] = contacts[i];
      }
    } else {
      let start = Math.max.apply(
        null,
        Object.keys(phoneBook[name])
      ) + 1;

      for (let i = 0; i < contacts.length; i++) {
        phoneBook[name][i + start] = contacts[i];
      }
    }
  }

  function removePhone(contact) {
    for (let name in phoneBook) {
      for (let id in phoneBook[name]) {
        if (phoneBook[name][id] === contact) {
          delete phoneBook[name][id];
          if (Object.keys(phoneBook[name]).length < 1) {
            delete phoneBook[name];
          }
          return true;
        }
      }
    }
    return false;
  }

  function show() {
    let res = [];

    let names = Object.keys(phoneBook);
    for (let j = names.length - 1; j >= 0; j--) {
      let record = `${names[j]}: `;
      let ids = Object.keys(phoneBook[names[j]]);
      for (let i = 0; i < ids.length; i++) {
        record += phoneBook[names[j]][ids[i]];
        if (i !== ids.length - 1) {
          record += ', ';
        }
      }

      res.push(record);
    }

    return res;
  }

  let tokens = command.split(' ');

  if (tokens[0] === 'ADD') {
    return add(
      tokens[1],
      tokens[2].split(',')
    );
  } else if (tokens[0] === 'REMOVE_PHONE') {
    return removePhone(tokens[1]);
  } else if (tokens[0] === 'SHOW') {
    return show();
  }
};
