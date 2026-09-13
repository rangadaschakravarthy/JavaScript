/**
 * Day 10 — Exercise 02 (Medium): Validation and Utility Helpers
 */

/**
 * Task 1: Find Maximum of Three Numbers
 * Returns the largest of three numbers without using Math.max.
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number}
 */
function findMaxOfThree(a, b, c) {
  // TODO: Implement using conditionals
  return 0;
}

/**
 * Task 2: Grade Classifier
 * Converts numeric score (0-100) to Letter Grade ("A", "B", "C", "D", "F").
 * Score >= 90: "A", >= 80: "B", >= 70: "C", >= 60: "D", else "F".
 * Return "INVALID" if score < 0 or score > 100.
 * @param {number} score 
 * @returns {string}
 */
function calculateGrade(score) {
  // TODO: Implement using guard clauses
  return '';
}

/**
 * Task 3: Format Temperature
 * Converts Celsius to Fahrenheit if unit === "F", or Fahrenheit to Celsius if unit === "C".
 * Formula: C = (F - 32) * 5/9, F = (C * 9/5) + 32. Round to 2 decimal places.
 * @param {number} val 
 * @param {string} unit 
 * @returns {number}
 */
function convertTemperature(val, unit) {
  // TODO: Implement
  return 0;
}

module.exports = {
  findMaxOfThree,
  calculateGrade,
  convertTemperature
};
