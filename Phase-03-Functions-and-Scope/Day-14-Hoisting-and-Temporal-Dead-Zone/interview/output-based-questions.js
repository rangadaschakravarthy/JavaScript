/**
 * Day 14 — Interview Output-Based Questions
 */

// Q1: TDZ with parameter defaults
function testTDZParam(x = y, y = 2) {
  return x + y;
}
try {
  testTDZParam();
} catch(err) {
  console.log("Q1 Output:", err.name); // ReferenceError (y in TDZ when evaluated in x = y)
}

// Q2: Local var shadowing global var hoisting check
var val = 10;
function shadowCheck() {
  console.log("Q2 Output:", val);
  var val = 20;
}
shadowCheck(); // undefined
