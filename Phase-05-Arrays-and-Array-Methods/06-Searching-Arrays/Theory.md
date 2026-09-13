# Day 06 — Searching Arrays — Theory & Concept Breakdown

## 1. What and Why
Master includes(), indexOf(), lastIndexOf(), find(), and findIndex() for value-based and condition-based searching. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### includes() check
Detailed breakdown of includes() check...

### indexOf() & lastIndexOf()
Detailed breakdown of indexOf() & lastIndexOf()...

### find() predicate
Detailed breakdown of find() predicate...

### findIndex() predicate
Detailed breakdown of findIndex() predicate...

### Value vs condition searching
Detailed breakdown of Value vs condition searching...

## 3. Practical Usage & Code Snippets
```js
// Day 06 Examples
const numbers = [10, 20, 30, 40, 50, 30];

console.log("includes(30):", numbers.includes(30)); // true
console.log("indexOf(30):", numbers.indexOf(30)); // 2
console.log("lastIndexOf(30):", numbers.lastIndexOf(30)); // 5

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const user = users.find(u => u.id === 2);
console.log("Found user:", user); // { id: 2, name: "Bob" }

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
