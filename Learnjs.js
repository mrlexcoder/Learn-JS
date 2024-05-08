// JavaScript is single - threaded, meaning it can only execute one task at a time in a single call stack.
//  This is because JavaScript follows an event - driven programming model, where tasks are handled asynchronously through event loops.
// Example 1: Synchronous code execution
console.log("Hello");
console.log("World");

// Output:
// Hello
// World

// Example 2: Asynchronous code execution using setTimeout
console.log("Hello");

setTimeout(() => {
  console.log("World");
}, 1000); // Execute after 1 second

// Output:
// Hello
// (after 1 second) World
