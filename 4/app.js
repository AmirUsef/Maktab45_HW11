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
let results = ""
for (let index = 0; index < users.length; index++) {
    const user = users[index];
    results += user.name;
    if (user.numbers.length == 0)
        results += " hasn’t any phone number.\n";
    else if (user.numbers.length == 1)
        results += `’s phone number is ${user.numbers[0]}.\n`;
    else {
        results += "’s phone numbers are ";
        user.numbers.forEach(element => results += `${element}, `);
        results = results.slice(0, -2).concat(".\n");
    }
}
fs.writeFileSync('files/results.txt', results);