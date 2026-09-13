/**
 * Day 16 — Interview Output-Based Questions
 */

// Q1: Custom map with index transformation
function mapIndex(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i], i));
  }
  return res;
}
console.log("Q1 Output:", mapIndex(["a", "b"], (val, idx) => `${val}${idx}`)); // ["a0", "b1"]

// Q2: Higher-order filter predicate
const isPositive = x => x > 0;
function countMatching(arr, predicate) {
  let count = 0;
  for (const item of arr) {
    if (predicate(item)) count++;
  }
  return count;
}
console.log("Q2 Output:", countMatching([-2, -1, 3, 5], isPositive)); // 2
