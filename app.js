var phoneBook = require('./index.js');
phoneBook('ADD Ivan 555-10-01,555-10-03');
phoneBook('ADD Ivan 555-10-02');
console.log(phoneBook('SHOW'));
// Вывод: // ["Ivan: 555-10-01, 555-10-03, 555-10-02"]

phoneBook('REMOVE_PHONE 555-10-03');
phoneBook('ADD Alex 555-20-01');
console.log(phoneBook('SHOW'));
// Вывод: // ["Alex: 555-20-01", "Ivan: 555-10-01, 555-10-02"]

phoneBook('REMOVE_PHONE 555-20-01');
console.log(phoneBook('SHOW'));
// Вывод: // ["Ivan: 555-10-01, 555-10-02"]