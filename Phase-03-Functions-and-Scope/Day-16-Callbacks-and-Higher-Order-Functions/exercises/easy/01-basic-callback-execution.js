/**
 * Day 16 — Exercise 01 (Easy): Basic Callback Execution
 */

/**
 * Task 1: Execute Callback on String
 * Accepts string `str` and `callback` function.
 * If callback is valid function, returns callback(str), else returns str.
 * @param {string} str 
 * @param {Function} callback 
 * @returns {string}
 */
function processString(str, callback) {
  if (typeof callback === 'function') {
    return callback(str);
  }
  return str;
}

/**
 * Task 2: Repeat Action N Times
 * Invokes `actionCallback(index)` `times` number of times (0 to times - 1).
 * @param {number} times 
 * @param {Function} actionCallback 
 */
function repeatAction(times, actionCallback) {
  if (typeof actionCallback !== 'function') return;
  for (let i = 0; i < times; i++) {
    actionCallback(i);
  }
}

module.exports = {
  processString,
  repeatAction
};
