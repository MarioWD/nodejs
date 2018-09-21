// HTTP Class
// capitalized words naming convention for classes pascal cased 
const EventEmitter = require('events');

//register a listener
var messageLogged = (e) => {
    console.log('Listened', e);
}

// emit means making a noise 
// or producing something 
// event has been raised
//emitter.emit('messageLogged', {id: 1, url: 'http://'});

//doing emitting and listening with new created Logger class in logger file
const Logger = require('./logger');
const logger2  = new Logger();
logger2.on('messageLogged', messageLogged);
logger2.log('Mario is testing this', 'http', 5);
