/**
 * Day 17 — Exercise 02 (Medium): Recursive String and Array Operations
 */

/**
 * Task 1: Recursive Array Sum
 * Calculates total sum of numeric elements in array recursively.
 * @param {number[]} arr 
 * @returns {number}
 */
function sumArrayRecursive(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArrayRecursive(arr.slice(1));
}

/**
 * Task 2: Recursive Character Count
 * Counts occurrences of target character in string recursively.
 * @param {string} str 
 * @param {string} target 
 * @returns {number}
 */
function countCharRecursive(str, target) {
  if (str.length === 0) return 0;
  const match = str[0] === target ? 1 : 0;
  return match + countCharRecursive(str.slice(1), target);
}

module.exports = {
  sumArrayRecursive,
  countCharRecursive
};
