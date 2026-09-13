/**
 * Day 13 — Example 01: Block Scope vs Function Scope
 */

// 1. Function Scope Demo
function demonstrateFunctionScope() {
  var funcVar = "I am function-scoped (var)";
  let funcLet = "I am function-scoped (let)";
  const funcConst = "I am function-scoped (const)";
  console.log("Inside function:", funcVar, funcLet, funcConst);
}

demonstrateFunctionScope();
// console.log(funcVar); // ReferenceError: funcVar is not defined

// 2. Block Scope Demo (if block)
console.log("\n--- Block Scope Leakage Demonstration ---");
if (true) {
  var varLeaked = "var IGNORES block scope";
  let letProtected = "let RESPECTS block scope";
  const constProtected = "const RESPECTS block scope";
}

console.log("varLeaked outside block:", varLeaked); // Output: "var IGNORES block scope"
// console.log(letProtected); // ReferenceError!
