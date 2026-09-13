/**
 * Day 12 — Example 02: Functions Calling Functions and Chaining
 */

function double(n) {
  return n * 2;
}

function addTen(n) {
  return n + 10;
}

function square(n) {
  return n * n;
}

console.log("--- Nested Function Execution ---");
// double(5) = 10 -> addTen(10) = 20 -> square(20) = 400
const result = square(addTen(double(5)));
console.log("square(addTen(double(5))):", result);

// Helper function reusing other helpers
function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return !isEven(n); // Reuses isEven
}

console.log("\nIs 9 odd?:", isOdd(9));
