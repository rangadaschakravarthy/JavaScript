/**
 * Day 15 — Example 01: Basic Closure Counter
 */

function createCounter(initialValue = 0) {
  let count = initialValue; // Retained in Heap Lexical Environment

  return function() {
    count++;
    return count;
  };
}

console.log("--- Counter A Execution ---");
const counterA = createCounter(0);
console.log("counterA():", counterA()); // 1
console.log("counterA():", counterA()); // 2
console.log("counterA():", counterA()); // 3

console.log("\n--- Counter B Execution (Independent Environment) ---");
const counterB = createCounter(100);
console.log("counterB():", counterB()); // 101
console.log("counterB():", counterB()); // 102

console.log("\n--- counterA remains unchanged ---");
console.log("counterA():", counterA()); // 4
