/**
 * Day 10 — Interview Output-Based Questions
 */

// Q1: Function invocation assignment
function calc(x) {
  return x * 2;
}
const res1 = calc;
console.log("Q1 Output:", typeof res1); // "function"

// Q2: ASI return trap
function getObj() {
  return 
  {
    status: 200
  }
}
console.log("Q2 Output:", getObj()); // undefined

// Q3: Positional argument mapping
function order(first, second) {
  return `${first}-${second}`;
}
console.log("Q3 Output:", order("B", "A")); // "B-A"
