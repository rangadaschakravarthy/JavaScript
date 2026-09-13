/**
 * Day 11 — Output Prediction Questions
 */

// Q1: Arrow implicit object return without parentheses
const q1Fn = id => { id: id };
console.log("Q1 Output:", q1Fn(101));

// Q2: Default parameters with undefined vs null
const q2Fn = (name = "Guest") => `Hello ${name}`;
console.log("Q2a Output:", q2Fn(undefined));
console.log("Q2b Output:", q2Fn(null));

// Q3: Arguments object in arrow function vs standard function
function stdFn() {
  return arguments.length;
}
console.log("Q3 Output:", stdFn(1, 2, 3));

// Q4: IIFE return value
const q4Val = (function(a, b) {
  return a * b;
})(4, 5);
console.log("Q4 Output:", q4Val);
