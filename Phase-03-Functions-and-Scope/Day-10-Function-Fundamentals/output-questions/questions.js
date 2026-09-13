/**
 * Day 10 — Output Prediction Questions
 */

// Q1: Function without return statement
function sayHello() {
  console.log("Hello World");
}
const q1 = sayHello();
console.log("Q1 Output:", q1);

// Q2: Missing arguments behavior
function add(a, b) {
  return a + b;
}
console.log("Q2 Output:", add(10));

// Q3: Extra arguments passed
function getFirst(a) {
  return a;
}
console.log("Q3 Output:", getFirst(100, 200, 300));

// Q4: Code after return
function checkValue(x) {
  if (x > 5) return "Greater";
  console.log("Checking completed");
  return "Smaller";
}
console.log("Q4 Output:", checkValue(10));
