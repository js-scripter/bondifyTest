// event-listner.js
var emitter = require('./firstEventEmitter.js');

// register event listener
emitter.on("dataReceived", function(data) {
    console.log(`event data received by TM-1111  Name: ${data.name} and Age: ${data.age} and ts: ${data.ts}`)
});