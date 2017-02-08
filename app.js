'use strict';

var configEvent = require('./config').events

var Emitter = require('events');

var emtr = new Emitter();

emtr.on('configEvent', function(){
    console.log('A greeting has been made.');
  });

emtr.on('configEvent', function(){
  console.log('Second listener firing!');
});

emtr.emit('configEvent');
