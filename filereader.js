// Working with files 
const fs = require('fs');

// Asynchronous method (preferred method);
var err_handler = function(err, files) {
    if (err) {
        console.log('Error', err)
    }
    else {
        console.log(files)
    }
}
var filesA = fs.readdir('./', err_handler);

// Synchronous method
var filesS = fs.readdirSync('./');
console.log('Synchronous', filesS);


