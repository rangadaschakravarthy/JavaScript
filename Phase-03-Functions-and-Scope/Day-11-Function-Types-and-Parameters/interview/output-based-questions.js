/**
 * Day 11 — Interview Output-Based Questions
 */

// Q1: Default parameters with expression initializers
let count = 0;
function getVal() {
  count++;
  return count;
}
function test(x = getVal()) {
  return x;
}
console.log("Q1a:", test(10)); // 10 (getVal not called!)
console.log("Q1b:", test());   // 1 (getVal called!)
console.log("Q1c:", count);    // 1

// Q2: Rest parameter array instance check
function checkRest(...args) {
  return Array.isArray(args);
}
console.log("Q2 Output:", checkRest(1, 2, 3)); // true
