/**
 * Day 13 — Output Prediction Questions
 */

// Q1: var leakage out of if block
if (true) {
  var q1Var = "Leaked";
  let q1Let = "Protected";
}
console.log("Q1 Output:", q1Var);

// Q2: Lexical scope vs call site
const q2Val = "Global";
function printVal() {
  console.log("Q2 Output:", q2Val);
}
function caller() {
  const q2Val = "Local";
  printVal();
}
caller();

// Q3: Variable shadowing in nested block
let x = 10;
if (true) {
  let x = 20;
  console.log("Q3a Output:", x);
}
console.log("Q3b Output:", x);
