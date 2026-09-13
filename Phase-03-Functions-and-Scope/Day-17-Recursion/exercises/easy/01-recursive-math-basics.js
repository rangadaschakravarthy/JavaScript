/**
 * Day 17 — Exercise 01 (Easy): Recursive Math Basics
 */

/**
 * Task 1: Recursive Sum from 1 to N
 * Returns 1 + 2 + ... + n recursively.
 * Base case: n <= 1 returns 1.
 * @param {number} n 
 * @returns {number}
 */
function sumToN(n) {
  if (n <= 1) return 1;
  return n + sumToN(n - 1);
}

/**
 * Task 2: Recursive Power Calculation
 * Returns base^exp recursively (assume exp >= 0).
 * @param {number} base 
 * @param {number} exp 
 * @returns {number}
 */
function recursivePower(base, exp) {
  if (exp === 0) return 1;
  return base * recursivePower(base, exp - 1);
}

module.exports = {
  sumToN,
  recursivePower
};
