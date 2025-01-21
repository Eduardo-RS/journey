const EventEmitter = require('node:events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (data) => {
    console.log(data);
})

customEmitter.emit('response', 'Hello World from Events!');
customEmitter.emit('response', ['The Killers', 'Bad Bunny']);
customEmitter.emit('response', { name: 'Lalo RS', age: 29 });

const secondCustomEmitter = new EventEmitter();

secondCustomEmitter.on('service', (data, secondData) => {
    console.log(data);
    console.log(secondData);
})

secondCustomEmitter.emit('service', 'Hello World', 20);