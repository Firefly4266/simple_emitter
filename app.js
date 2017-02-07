'use strict';

var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('A greeting has been made.');
  });

emtr.on('greet', function(){
  console.log('Second listener firing!');
});

emtr.emit('greet');
