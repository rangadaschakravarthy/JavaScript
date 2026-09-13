# Day 01 — Array Fundamentals — Theory & Concept Breakdown

## 1. What and Why
Master array creation, literals, empty/mixed arrays, typeof [] === "object", Array.isArray(), .length, and zero-indexing. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### What is an array
Detailed breakdown of What is an array...

### Array literals []
Detailed breakdown of Array literals []...

### Empty & mixed arrays
Detailed breakdown of Empty & mixed arrays...

### typeof [] === "object"
Detailed breakdown of typeof [] === "object"...

### Array.isArray()
Detailed breakdown of Array.isArray()...

### .length property
Detailed breakdown of .length property...

### Zero-based positions
Detailed breakdown of Zero-based positions...

## 3. Practical Usage & Code Snippets
```js
// Day 01 Examples
console.log("=== Array Literals & Creation ===");
const numbers = [10, 20, 30];
const names = ["Alex", "John", "Sam"];
const mixed = [1, "two", true, null, { key: "val" }];

console.log("numbers:", numbers);
console.log("numbers.length:", numbers.length);
console.log("Array.isArray(numbers):", Array.isArray(numbers));
console.log("typeof numbers:", typeof numbers); // "object"

console.log("\n=== Edge Case Checking ===");
console.log("Array.isArray({}):", Array.isArray({})); // false
console.log("Array.isArray('hello'):", Array.isArray("hello")); // false

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
