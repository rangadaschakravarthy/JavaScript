/**
 * Day 12 — Exercise 03 (Challenge): Refactoring Impure Functions to Pure Functions
 */

// IMPURE SOURCE TO REFACTOR:
let globalTaxRate = 0.08;
let globalShippingFee = 10;

function calculateOrderTotalImpure(items) {
  let subtotal = 0;
  for (let item of items) {
    subtotal += item.price;
  }
  return subtotal + (subtotal * globalTaxRate) + globalShippingFee;
}

/**
 * Task: Implement Pure Order Total Calculator
 * Refactor calculateOrderTotalImpure into a 100% pure function:
 * - Accept items array, taxRate, and shippingFee as explicit arguments.
 * - Do not read or mutate global variables.
 * - Return final rounded number to 2 decimal places.
 * 
 * @param {Array<{name: string, price: number}>} items 
 * @param {number} taxRate 
 * @param {number} shippingFee 
 * @returns {number}
 */
function calculateOrderTotalPure(items, taxRate, shippingFee) {
  // TODO: Implement as a pure function
  return 0;
}

module.exports = { calculateOrderTotalPure };
