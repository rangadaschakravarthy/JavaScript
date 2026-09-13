/**
 * Day 14 — Example 04: Function Expression & Arrow Function Hoisting Traps
 */

console.log("--- Function Expression Hoisting Behavior ---");

// 1. var function expression: Calling early produces TypeError!
try {
  exprVar(); // Attempts undefined() -> TypeError
} catch (err) {
  console.log("var expression early call error:", err.name, "-", err.message);
}

var exprVar = function() {
  console.log("Expression Body");
};

// 2. const arrow function: Calling early produces ReferenceError!
try {
  arrowConst(); // Reads TDZ variable -> ReferenceError
} catch (err) {
  console.log("const arrow early call error:", err.name, "-", err.message);
}

const arrowConst = () => {
  console.log("Arrow Body");
};
