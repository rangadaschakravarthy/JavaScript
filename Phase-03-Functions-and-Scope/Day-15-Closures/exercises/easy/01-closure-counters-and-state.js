/**
 * Day 15 — Exercise 01 (Easy): Closure Counters and State
 */

/**
 * Task 1: Create State Accumulator
 * Returns a function `accumulate(val)` that keeps a running total of all added numbers.
 * @param {number} startVal 
 * @returns {Function}
 */
function createAccumulator(startVal = 0) {
  let total = startVal;
  return function(val) {
    total += val;
    return total;
  };
}

/**
 * Task 2: Create Decrement Counter
 * Returns a function that starts at `start` and decreases by 1 on each call.
 * @param {number} start 
 * @returns {Function}
 */
function createDecrementer(start = 10) {
  let count = start;
  return function() {
    count--;
    return count;
  };
}

module.exports = {
  createAccumulator,
  createDecrementer
};
