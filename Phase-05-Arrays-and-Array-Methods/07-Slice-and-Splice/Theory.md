# Day 07 — Slice and Splice — Theory & Concept Breakdown

## 1. What and Why
Master non-mutating slice() vs mutating splice() for extracting, inserting, deleting, and replacing array elements. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### slice(start, end) non-mutating
Detailed breakdown of slice(start, end) non-mutating...

### splice(start, delCount, ...items) mutating
Detailed breakdown of splice(start, delCount, ...items) mutating...

### Deletion & Insertion matrix
Detailed breakdown of Deletion & Insertion matrix...

### Negative indexes
Detailed breakdown of Negative indexes...

## 3. Practical Usage & Code Snippets
```js
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

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
