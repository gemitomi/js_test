import EventEmitter from 'events';

const emitter = new EventEmitter();
emitter.on('alma', function (p1) {
    console.log('alma!', p1);
});
emitter.once('korte', function (p2) {
    console.log('oh korte', p2);
});
emitter.emit('alma',"parameter1");
emitter.emit('korte',"parameter2");