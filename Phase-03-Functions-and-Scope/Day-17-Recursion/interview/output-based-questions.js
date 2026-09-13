/**
 * Day 17 — Interview Output-Based Questions
 */

// Q1: Recursive accumulator trace
function recAcc(n, acc = 1) {
  if (n <= 1) return acc;
  return recAcc(n - 1, acc * n);
}
console.log("Q1 Output:", recAcc(4)); // 4 * 3 * 2 * 1 = 24

// Q2: Recursive string head-tail swap
function recSwap(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + recSwap(str.slice(1, -1)) + str[0];
}
console.log("Q2 Output:", recSwap("abcd")); // "dbca"
