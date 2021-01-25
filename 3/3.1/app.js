const fs = require('fs');
fs.writeFile('files/newFile.txt', "", "utf8", (err) => {
    if (err) return console.log(err.message);
    fs.readFile('files/newFile.txt', 'utf8', (err, data) => {
        if (err) return console.log(err.message);
        console.log("file exist");
    })

})