# Day 13 — Array Searching and Testing — Theory & Concept Breakdown

## 1. What and Why
Master find(), findIndex(), findLast(), findLastIndex(), some(), and every() for condition-based searching and testing. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### find() & findIndex()
Detailed breakdown of find() & findIndex()...

### findLast() & findLastIndex()
Detailed breakdown of findLast() & findLastIndex()...

### some() at least one
Detailed breakdown of some() at least one...

### every() all elements
Detailed breakdown of every() all elements...

### Value vs condition testing
Detailed breakdown of Value vs condition testing...

## 3. Practical Usage & Code Snippets
```js
// Day 13 Examples
const scores = [65, 80, 92, 45, 78];

console.log("First score > 80:", scores.find(s => s > 80)); // 92
console.log("Any failed (< 50)?:", scores.some(s => s < 50)); // true
console.log("All passed (>= 50)?:", scores.every(s => s >= 50)); // false

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
