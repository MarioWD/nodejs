// always set to constant to prevent overwriting 
const logger = require('./logger');

// built-in modules look on the site for further examples and 
// documentation
const path = require('path');
const os = require('os');

// Templates string
// concatenating string in ES6 / ES2015 : ECMAScript 6 / 2015
console.log(`Total memory: ${os.totalmem()}`);
console.log(`Free memory: ${os.freemem()}`);
