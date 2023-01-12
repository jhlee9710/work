const EventEmitter = require('events');
var custom = new EventEmitter();

custom.on('tick', function(){
    console.log('tick이벤트 실행되어짐...');
});

custom.emit('tick');
