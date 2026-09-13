/**
 * Day 16 — Output Prediction Questions
 */

// Q1: Passing function reference vs execution
function greet() { return "Hello"; }
function run(fn) {
  return typeof fn === 'function' ? fn() : fn;
}
console.log("Q1a:", run(greet));   // "Hello"
console.log("Q1b:", run(greet())); // "Hello" (fn() returns string "Hello")

// Q2: HOF return execution
function createScaler(factor) {
  return x => x * factor;
}
console.log("Q2 Output:", createScaler(3)(4)); // 12

// Q3: Synchronous callback order
console.log("Q3: Start");
[10].forEach(n => console.log("Q3: Item", n));
console.log("Q3: End");
