# Day 11 — Array Transformation — Theory & Concept Breakdown

## 1. What and Why
Master map() for element transformation, callback parameters (value, index, array), returning new arrays, and map vs for loop. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### map() transformation
Detailed breakdown of map() transformation...

### Callback parameters
Detailed breakdown of Callback parameters...

### Returning new arrays
Detailed breakdown of Returning new arrays...

### Original array immutability
Detailed breakdown of Original array immutability...

### map() vs for loop
Detailed breakdown of map() vs for loop...

## 3. Practical Usage & Code Snippets
```js
// Day 11 Examples
const prices = [10, 20, 30];
const taxPrices = prices.map(p => p * 1.1);
console.log("Taxed prices:", taxPrices);

const names = ["alice", "bob", "charlie"];
const capitalized = names.map(n => n[0].toUpperCase() + n.slice(1));
console.log("Capitalized:", capitalized); // ["Alice", "Bob", "Charlie"]

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
