'use strict';
//config.js is a file (module) that has properties set to the strings that will
// be passed to the event emitter (like "greet")
module.exports = {
  events: {
    GREET: 'greet',
    FILE_SAVED: 'file_saved'
  }
}