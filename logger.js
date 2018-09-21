//adding class to be extended later
const EventEmitter = require('events');

// Extending EventEmitter to allow logger class to emit events
class Logger extends EventEmitter {
     log(msg, url, number) {
        console.log(msg);
        //raise event  
        this.emit('messageLogged', arguments); 
    }
}
//export whatever you want to be available when required by another module
//
//cant re-initialize the variable exports
//belongs to the module
module.exports = Logger;

//filename const
//__filename
//
//directory name const
//__dirname
