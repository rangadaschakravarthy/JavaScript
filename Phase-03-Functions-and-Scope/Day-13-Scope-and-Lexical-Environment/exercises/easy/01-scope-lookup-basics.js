/**
 * Day 13 — Exercise 01 (Easy): Scope Lookup Basics
 */

const globalPrice = 100;

/**
 * Task 1: Calculate Final Price
 * Uses globalPrice and adds tax specified in parameter.
 * @param {number} taxRate 
 * @returns {number}
 */
function calculateFinalPrice(taxRate) {
  // TODO: Implement using globalPrice and taxRate parameter
  return 0;
}

/**
 * Task 2: Block Scope Variable Verification
 * Function checks if value > 10 in an if block.
 * Returns true if inside block variable is set, else false.
 * @param {number} val 
 * @returns {boolean}
 */
function testBlockScope(val) {
  let isPositive = false;
  if (val > 0) {
    let blockCheck = true;
    isPositive = blockCheck;
  }
  return isPositive;
}

module.exports = {
  calculateFinalPrice,
  testBlockScope
};
