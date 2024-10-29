import { EventEmitter } from "events";

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

const greetHandler = (name) => {
  console.log(`Hello ${name}`);
};

const goodbyeHandler = (name) => {
  console.log(`Goodbye ${name}`);
};

// Bind event listeners
myEmitter.on("hello", greetHandler);
myEmitter.on("goodbye", goodbyeHandler);

// Emit events
myEmitter.emit("hello", "John");
myEmitter.emit("goodbye", "Jane");

// Error handlers
myEmitter.on("error", (err) => {
  console.log(`An Error has occurred: ${err}`);
});

// Simulate error
myEmitter.emit("error", new Error("Something just happend"));
