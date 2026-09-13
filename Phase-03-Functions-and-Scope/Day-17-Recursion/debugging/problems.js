/**
 * Day 17 — Debugging Exercises
 */

// BUG 1: Infinite recursion due to missing parameter progression
function countToZeroBuggy(n) {
  if (n <= 0) return 0;
  // BUG: Passing `n` instead of `n - 1` causes infinite recursion!
  // return countToZeroBuggy(n);
}

// BUG 2: Missing base case check
function factorialBuggy(n) {
  // BUG: Missing base case `if (n <= 1) return 1;`
  return n * factorialBuggy(n - 1);
}

module.exports = {
  countToZeroBuggy,
  factorialBuggy
};
