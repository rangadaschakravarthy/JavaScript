// Day 07 Examples
const original = ["a", "b", "c", "d", "e"];

// slice() extracts without mutating original
const sliced = original.slice(1, 4);
console.log("sliced:", sliced); // ["b", "c", "d"]
console.log("original after slice:", original); // ["a", "b", "c", "d", "e"]

// splice() mutates original in-place!
const items = [1, 2, 3, 4, 5];
const removed = items.splice(1, 2, 99, 88); // Delete 2 items at index 1, insert 99, 88
console.log("removed via splice:", removed); // [2, 3]
console.log("items after splice:", items); // [1, 99, 88, 4, 5]
