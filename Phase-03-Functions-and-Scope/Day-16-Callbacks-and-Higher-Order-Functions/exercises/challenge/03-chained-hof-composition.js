/**
 * Day 16 — Exercise 03 (Challenge): Pipe HOF Constructor
 */

/**
 * Task: Implement `pipe(...fns)`
 * Accepts variable number of single-argument functions `...fns`.
 * Returns a new function `runPipe(initialValue)` that passes initialValue
 * through each function left-to-right.
 * 
 * Example:
 * const add2 = x => x + 2;
 * const mult3 = x => x * 3;
 * const calc = pipe(add2, mult3);
 * calc(5) => (5 + 2) * 3 = 21
 * 
 * @param  {...Function} fns 
 * @returns {Function}
 */
function pipe(...fns) {
  return function(initialValue) {
    let result = initialValue;
    for (let i = 0; i < fns.length; i++) {
      if (typeof fns[i] === 'function') {
        result = fns[i](result);
      }
    }
    return result;
  };
}

module.exports = { pipe };
