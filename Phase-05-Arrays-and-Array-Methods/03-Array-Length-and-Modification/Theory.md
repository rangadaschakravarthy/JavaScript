# Day 03 — Length and Array Modification — Theory & Concept Breakdown

## 1. What and Why
Master .length reading/writing, array truncation, sparse arrays vs undefined, and assigning beyond current bounds. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### length property mechanics
Detailed breakdown of length property mechanics...

### Truncating arrays (len = 2)
Detailed breakdown of Truncating arrays (len = 2)...

### Expanding arrays
Detailed breakdown of Expanding arrays...

### Sparse arrays (empty slots)
Detailed breakdown of Sparse arrays (empty slots)...

### Assingment beyond bounds
Detailed breakdown of Assingment beyond bounds...

## 3. Practical Usage & Code Snippets
```js
// Day 03 Examples
let arr = [1, 2, 3, 4, 5];
console.log("Original length:", arr.length);

// Truncating array
arr.length = 3;
console.log("After length = 3:", arr); // [1, 2, 3]

// Expanding array (creates sparse holes)
arr.length = 5;
console.log("After length = 5:", arr); // [1, 2, 3, empty x 2]
console.log("Index 3 access:", arr[3]); // undefined

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
