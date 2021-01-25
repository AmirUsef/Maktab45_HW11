const fs = require('fs');
let data = fs.readFileSync('files/from.txt', 'utf8');
fs.writeFileSync('files/to.txt', data);
let data2 = fs.readFileSync('files/append.txt', 'utf8');
fs.appendFileSync('files/to.txt', data2);