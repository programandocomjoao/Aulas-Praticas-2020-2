var events = require('events');
var eventEmitter = new events.EventEmitter();

var meuManipuladorEvento = function() {
    console.log('Aprender programação é construir o futuro!');
}

eventEmitter.on('mensagem', meuManipuladorEvento);
eventEmitter.emit('mensagem');