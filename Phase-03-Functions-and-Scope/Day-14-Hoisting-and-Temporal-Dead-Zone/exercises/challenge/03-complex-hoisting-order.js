/**
 * Day 14 — Exercise 03 (Challenge): Complex Hoisting Order Simulation
 */

/**
 * Task: Simulate Hoisting Order Execution Trace
 * Return object detailing the execution trace of the following snippet:
 * ```javascript
 * var target = 100;
 * function target() { return 500; }
 * ```
 * Return:
 * {
 *   creationPhaseTypeOf: "function",
 *   executionPhaseValueAfterAssignment: 100
 * }
 * 
 * @returns {Object}
 */
function simulateHoistingCollisionTrace() {
  // TODO: Return trace analysis object
  return {
    creationPhaseTypeOf: "function",
    executionPhaseValueAfterAssignment: 100
  };
}

module.exports = { simulateHoistingCollisionTrace };
