# Day 02 — Array Indexing and Access — Theory & Concept Breakdown

## 1. What and Why
Understand zero-based indexing, first/last elements, [] vs at(), negative indexes, updating elements, and mutation. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### 0-based indexing
Detailed breakdown of 0-based indexing...

### First & last element
Detailed breakdown of First & last element...

### [] bracket access
Detailed breakdown of [] bracket access...

### at() with negative index
Detailed breakdown of at() with negative index...

### Updating elements in-place
Detailed breakdown of Updating elements in-place...

### Nested element access
Detailed breakdown of Nested element access...

## 3. Practical Usage & Code Snippets
```js
// Day 02 Examples
const arr = [10, 20, 30, 40, 50];

console.log("=== Indexing & Access ===");
console.log("First element [0]:", arr[0]); // 10
console.log("Third element [2]:", arr[2]); // 30
console.log("Last element [len-1]:", arr[arr.length - 1]); // 50
console.log("at(-1):", arr.at(-1)); // 50
console.log("at(-2):", arr.at(-2)); // 40

console.log("\n=== In-Place Element Updating ===");
const fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log("Updated fruits:", fruits); // ["apple", "blueberry", "cherry"]

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
