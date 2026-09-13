/**
 * Day 17 — Output Prediction Questions
 */

// Q1: Simple countdown return check
function fn1(n) {
  if (n <= 0) return 0;
  return n + fn1(n - 2);
}
console.log("Q1 Output:", fn1(5)); // 5 + 3 + 1 = 9

// Q2: Missing return on recursive call
function fn2(n) {
  if (n <= 1) return 1;
  n * fn2(n - 1); // Missing return keyword!
}
console.log("Q2 Output:", fn2(3)); // undefined

// Q3: Recursive string slice
function fn3(str) {
  if (str.length === 0) return "";
  return fn3(str.slice(1)) + str[0];
}
console.log("Q3 Output:", fn3("ABC")); // "CBA"
