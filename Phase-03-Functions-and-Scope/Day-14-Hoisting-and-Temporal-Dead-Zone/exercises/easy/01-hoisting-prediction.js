/**
 * Day 14 — Exercise 01 (Easy): Hoisting Output Prediction
 */

/**
 * Task 1: Safe Hoisted Call
 * Implement a function declaration `getSystemStatus()` at the BOTTOM of file
 * and call it at top of function `testSafeHoisting()`. Return result.
 * @returns {string} "OPERATIONAL"
 */
function testSafeHoisting() {
  // Call getSystemStatus() here before its definition
  return getSystemStatus();
}

function getSystemStatus() {
  return "OPERATIONAL";
}

/**
 * Task 2: var Hoisting Inspector
 * Inspects value of `localVal` before assignment inside function.
 * Returns array: [valueBeforeAssignment, valueAfterAssignment]
 * @returns {Array} [undefined, "DONE"]
 */
function inspectVarHoisting() {
  // TODO: Use var localVal to return [undefined, "DONE"]
  let before = undefined;
  var localVal = "DONE";
  return [before, localVal];
}

module.exports = {
  testSafeHoisting,
  inspectVarHoisting
};
