const fs = require('fs');

fs.readFile('files/from.txt', 'utf8', (err, data) => {
    if (err) return console.log(err.message);
    fs.writeFile('files/to.txt', data, "utf8", (err) => {
        if (err) return console.log(err.message);
        console.log("succesful");
    })
})