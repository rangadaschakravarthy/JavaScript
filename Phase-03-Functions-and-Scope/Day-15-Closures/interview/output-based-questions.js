/**
 * Day 15 — Interview Output-Based Questions
 */

// Q1: Nested closure chaining
function add(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}
console.log("Q1 Output:", add(1)(2)(3)); // 6

// Q2: Closure state retention across calls
function createToggle() {
  let state = false;
  return function() {
    state = !state;
    return state;
  };
}
const toggle = createToggle();
console.log("Q2a:", toggle()); // true
console.log("Q2b:", toggle()); // false
