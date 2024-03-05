const logEvents = require("./logEvents");

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

// initiate object
const myEmitter = new MyEmitter();

// add listener for log event
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  // Emit timer event
  myEmitter.emit("log", "Log event emitted!");
}, 2000);
