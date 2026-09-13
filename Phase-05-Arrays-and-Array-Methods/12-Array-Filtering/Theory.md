# Day 12 — Array Filtering — Theory & Concept Breakdown

## 1. What and Why
Master filter() predicate callbacks, boolean filtering, selecting matching elements, and combining map() and filter(). Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### filter() predicate
Detailed breakdown of filter() predicate...

### Boolean conditions
Detailed breakdown of Boolean conditions...

### New array output
Detailed breakdown of New array output...

### Original array immutability
Detailed breakdown of Original array immutability...

### map() vs filter()
Detailed breakdown of map() vs filter()...

## 3. Practical Usage & Code Snippets
```js
// Day 12 Examples
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens); // [2, 4, 6, 8, 10]

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];
const cheap = products.filter(p => p.price < 100);
console.log("Cheap products:", cheap);

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
