/**
 * Day 17 — Exercise 03 (Challenge): Recursive Flatten Array
 */

/**
 * Task: Deeply Flatten Nested Array Recursively
 * Function `flattenArrayRecursive(arr)`:
 * Converts nested arrays `[1, [2, [3, 4]], 5]` into `[1, 2, 3, 4, 5]`.
 * Must use recursion.
 * 
 * @param {Array} arr 
 * @returns {Array}
 */
function flattenArrayRecursive(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat = flat.concat(flattenArrayRecursive(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}

module.exports = { flattenArrayRecursive };
