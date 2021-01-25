const fs = require('fs');
let data = fs.readFileSync('files/from.txt', 'utf8');
fs.writeFileSync('files/to.txt', data);