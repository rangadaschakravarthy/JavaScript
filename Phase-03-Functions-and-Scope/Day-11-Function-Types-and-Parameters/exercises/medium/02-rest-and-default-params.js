/**
 * Day 11 — Exercise 02 (Medium): Rest and Default Parameters
 */

/**
 * Task 1: Create Custom Message Formatter
 * Accepts prefix with default "INFO", and rest parameter messages.
 * Returns string: "[PREFIX] msg1 | msg2 | msg3"
 * @param {string} prefix 
 * @param  {...string} messages 
 * @returns {string}
 */
function formatLogs(prefix = "INFO", ...messages) {
  // TODO: Implement
  return '';
}

/**
 * Task 2: Calculate Average of Variable Arguments
 * Accepts variable numbers using rest parameter ...numbers.
 * Returns numerical average (0 if no numbers passed).
 * @param  {...number} numbers 
 * @returns {number}
 */
function calculateAverage(...numbers) {
  // TODO: Implement
  return 0;
}

module.exports = {
  formatLogs,
  calculateAverage
};
