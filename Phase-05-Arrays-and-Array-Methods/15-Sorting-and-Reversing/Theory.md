# Day 15 — Sorting and Reversing — Theory & Concept Breakdown

## 1. What and Why
Master sort(), reverse(), ES2023 non-mutating toSorted(), toReversed(), numeric comparator (a, b) => a - b, and object property sorting. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### sort() mutation trap
Detailed breakdown of sort() mutation trap...

### Numeric comparator (a, b) => a - b
Detailed breakdown of Numeric comparator (a, b) => a - b...

### reverse()
Detailed breakdown of reverse()...

### toSorted() & toReversed()
Detailed breakdown of toSorted() & toReversed()...

### Object sorting
Detailed breakdown of Object sorting...

## 3. Practical Usage & Code Snippets
```js
// Day 15 Examples
const numbers = [10, 2, 35, 4];

// WRONG: numbers.sort() sorts alphabetically -> [10, 2, 35, 4]
// RIGHT: Pass numeric comparator function:
numbers.sort((a, b) => a - b);
console.log("Ascending sort:", numbers); // [2, 4, 10, 35]

// Non-mutating ES2023 toSorted():
const original = [3, 1, 2];
const sorted = original.toSorted((a, b) => a - b);
console.log("original:", original, "| toSorted:", sorted);

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
