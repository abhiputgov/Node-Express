const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('load', () => {
    console.log('the event emitter is on');
});

customEmitter.emit('load');