/**
 * Day 14 — Example 01: Function Declaration Hoisting
 */

// 1. Invoking Function Declarations BEFORE Definition Line
console.log("--- Function Declaration Hoisting Demo ---");
console.log("Sum:", add(10, 20));       // Works! Output: 30
console.log("Product:", multiply(4, 5)); // Works! Output: 20

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// 2. Declaration vs Var Priority Collision
console.log("\n--- Declaration vs Var Priority ---");
console.log("Type of sample:", typeof sample); // Output: "function"

var sample = "I am a String";

function sample() {
  return "I am a Function";
}

console.log("Type of sample after string assignment:", typeof sample); // Output: "string"
