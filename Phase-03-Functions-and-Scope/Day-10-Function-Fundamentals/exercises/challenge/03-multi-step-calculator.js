/**
 * Day 10 — Exercise 03 (Challenge): Multi-Step Financial Invoice Calculator
 */

/**
 * Task: Calculate Invoice Total
 * Given subtotal, taxRatePercent, and userTier:
 * 1. Validate inputs: if subtotal <= 0, return 0.
 * 2. Calculate tier discount: "VIP" -> 15%, "MEMBER" -> 5%, others -> 0%.
 * 3. Discounted Subtotal = subtotal - (subtotal * discountPercent).
 * 4. Apply tax: Tax Amount = Discounted Subtotal * (taxRatePercent / 100).
 * 5. Return object: { subtotal, discountAmount, taxAmount, finalTotal } rounded to 2 decimals.
 * 
 * @param {number} subtotal 
 * @param {number} taxRatePercent 
 * @param {string} userTier 
 * @returns {Object}
 */
function processInvoice(subtotal, taxRatePercent, userTier) {
  // TODO: Implement
  return {
    subtotal: 0,
    discountAmount: 0,
    taxAmount: 0,
    finalTotal: 0
  };
}

module.exports = { processInvoice };
