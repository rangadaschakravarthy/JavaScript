/**
 * Day 14 — Example 02: var Hoisting and undefined
 */

console.log("--- Global var Hoisting ---");
console.log("value before line:", value); // Output: undefined
var value = 99;
console.log("value after line:", value);   // Output: 99

// Function Scope var Shadowing Hoisting Trap
console.log("\n--- Function Scope var Hoisting Trap ---");
var outerVar = "GLOBAL_STATE";

function testHoisting() {
  console.log("outerVar inside function before local var:", outerVar); // Output: undefined!
  var outerVar = "LOCAL_STATE"; // Local var hoists to top of testHoisting!
  console.log("outerVar inside function after local var:", outerVar);  // Output: "LOCAL_STATE"
}

testHoisting();
