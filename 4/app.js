const fs = require('fs');

function User(id, name) {
    this.name = name;
    this.id = id;
    this.numbers = [];
}
let users = [];
let names = fs.readFileSync('files/names.txt', 'utf8').split('\r\n');
names.forEach(element => {
    let id = element.split(" - ")[0];
    let name = element.split(" - ")[1];
    users.push(new User(id, name));
});

let numbers = fs.readFileSync('files/numbers.txt', 'utf8').split('\r\n');
numbers.forEach(element => {
    let id = element.split(" - ")[0];
    let number = element.split(" - ")[1];
    users.find(item => item.id === id).numbers.push(number);
});