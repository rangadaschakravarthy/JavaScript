/**
 * Day 12 — Output Prediction Questions
 */

// Q1: Nested composition order
const add3 = x => x + 3;
const mult2 = x => x * 2;
console.log("Q1 Output:", add3(mult2(5))); // (5 * 2) + 3 = 13

// Q2: Return value in boolean condition
function checkLength(str) {
  return str.length;
}
if (checkLength("hi")) {
  console.log("Q2 Output: True Branch");
} else {
  console.log("Q2 Output: False Branch");
}

// Q3: Impure mutation check
const nums = [1, 2];
function addMutate(arr) {
  arr.push(3);
  return arr.length;
}
console.log("Q3a Output:", addMutate(nums));
console.log("Q3b Output:", nums.length);
