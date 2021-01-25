const fs = require('fs');
fs.writeFileSync('files/newFile.txt', "");
let data = fs.readFileSync('files/newFile.txt', 'utf8');
console.log("file exist");