/**
 * Day 16 — Exercise 02 (Medium): Custom Array Processing HOFs
 */

/**
 * Task 1: Implement Custom myFilter
 * Filters array items returning new array where predicateFn(item, index) === true.
 * @param {Array} arr 
 * @param {Function} predicateFn 
 * @returns {Array}
 */
function myFilter(arr, predicateFn) {
  const result = [];
  if (typeof predicateFn !== 'function') return result;
  for (let i = 0; i < arr.length; i++) {
    if (predicateFn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

/**
 * Task 2: Implement Custom myReduce
 * Aggregates array items starting with initialValue.
 * Invokes reducerFn(accumulator, currentItem, index).
 * @param {Array} arr 
 * @param {Function} reducerFn 
 * @param {*} initialValue 
 * @returns {*}
 */
function myReduce(arr, reducerFn, initialValue) {
  let acc = initialValue;
  let startIdx = 0;
  if (acc === undefined) {
    acc = arr[0];
    startIdx = 1;
  }
  for (let i = startIdx; i < arr.length; i++) {
    acc = reducerFn(acc, arr[i], i, arr);
  }
  return acc;
}

module.exports = {
  myFilter,
  myReduce
};
