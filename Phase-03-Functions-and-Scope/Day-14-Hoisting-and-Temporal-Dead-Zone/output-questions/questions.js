/**
 * Day 14 — Output Prediction Questions
 */

// Q1: Function declaration hoisting call
console.log("Q1 Output:", hoistedFn());
function hoistedFn() { return "Hoisted!"; }

// Q2: var variable hoisting
console.log("Q2 Output:", q2Var);
var q2Var = "Assigned";

// Q3: Function expression var call trap
try {
  q3Expr();
} catch(err) {
  console.log("Q3 Output:", err.name); // TypeError
}
var q3Expr = function() {};

// Q4: Function vs var precedence
console.log("Q4 Output:", typeof q4Collision);
var q4Collision = 50;
function q4Collision() {}
