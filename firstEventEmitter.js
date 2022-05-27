const { EventEmitter } = require("events");

const firstEmitter = new EventEmitter();

setInterval(function() {
    firstEmitter.emit("dataReceived",{name:"Sachin",age:46, ts:new Date()});
}, 5000);


module.exports = firstEmitter