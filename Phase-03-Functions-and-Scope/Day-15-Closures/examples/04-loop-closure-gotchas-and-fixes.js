/**
 * Day 15 — Example 04: Loop Closure Gotcha and Fixes
 */

// 1. BROKEN LOOP using `var`
console.log("--- Broken Loop with var ---");
const brokenHandlers = [];
for (var i = 0; i < 3; i++) {
  brokenHandlers.push(function() {
    return `Index: ${i}`;
  });
}
console.log("brokenHandlers[0]():", brokenHandlers[0]()); // "Index: 3"
console.log("brokenHandlers[1]():", brokenHandlers[1]()); // "Index: 3"

// 2. FIXED LOOP using ES6 `let`
console.log("\n--- Fixed Loop with let ---");
const fixedHandlers = [];
for (let j = 0; j < 3; j++) { // `let` creates new block binding per iteration!
  fixedHandlers.push(function() {
    return `Index: ${j}`;
  });
}
console.log("fixedHandlers[0]():", fixedHandlers[0]()); // "Index: 0"
console.log("fixedHandlers[1]():", fixedHandlers[1]()); // "Index: 1"
console.log("fixedHandlers[2]():", fixedHandlers[2]()); // "Index: 2"
