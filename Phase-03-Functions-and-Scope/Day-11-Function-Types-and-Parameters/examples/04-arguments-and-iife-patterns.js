/**
 * Day 11 — Example 04: Arguments Object and IIFE Scope Isolation
 */

// 1. Arguments Object (Standard Function Only)
function legacySum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log("--- Legacy arguments Object ---");
console.log("Sum of 5 numbers:", legacySum(10, 20, 30, 40, 50));

// 2. IIFE (Immediately Invoked Function Expression)
console.log("\n--- IIFE Execution ---");

const result = (function(appVersion) {
  const secretKey = "API_SECRET_998";
  console.log(`IIFE Initialized App v${appVersion}`);
  return `Config Loaded (Key Length: ${secretKey.length})`;
})("2.5.0");

console.log("Returned from IIFE:", result);
