/**
 * Day 12 — Interview Output-Based Questions
 */

// Q1: Composition with array mutation
function addTag(item) {
  item.tagged = true;
  return item;
}

const original = { name: "Widget" };
const result = addTag(original);
console.log("Q1 Output:", original === result); // true (Same object reference mutated!)

// Q2: Pure array append check
function pureAppend(arr, val) {
  return [...arr, val];
}

const list = [1, 2];
const newList = pureAppend(list, 3);
console.log("Q2 Output:", list.length === newList.length); // false (list length 2, newList length 3)
