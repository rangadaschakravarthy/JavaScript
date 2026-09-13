/**
 * Day 16 — Example 01: Passing Functions as Arguments (First-Class Functions)
 */

function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

// Higher-Order Function accepting a operation callback
function executeMath(a, b, operationCallback) {
  console.log(`Executing math on ${a} and ${b}...`);
  if (typeof operationCallback === 'function') {
    return operationCallback(a, b);
  }
  return null;
}

console.log("--- Executing HOF with Function References ---");
console.log("Add Result:", executeMath(10, 5, add));          // 15
console.log("Multiply Result:", executeMath(10, 5, multiply)); // 50

// Passing Inline Arrow Callback
console.log("Power Result:", executeMath(2, 3, (x, y) => Math.pow(x, y))); // 8
