/**
 * Day 11 — Exercise 03 (Challenge): Flexible Variadic Math Dispatcher
 */

/**
 * Task: Execute Math Operation on Variable Inputs
 * Function `dispatchMath(operation = "sum", ...numbers)`:
 * - Default operation is "sum".
 * - Operation "sum": returns sum of numbers.
 * - Operation "product": returns product of numbers (1 if empty).
 * - Operation "max": returns max number (-Infinity if empty).
 * - Operation "min": returns min number (Infinity if empty).
 * - Unknown operation: returns null.
 * 
 * @param {string} operation 
 * @param  {...number} numbers 
 * @returns {number|null}
 */
function dispatchMath(operation = "sum", ...numbers) {
  // TODO: Implement using rest parameter and switch
  return null;
}

module.exports = { dispatchMath };
