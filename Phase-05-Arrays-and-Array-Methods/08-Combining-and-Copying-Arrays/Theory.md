# Day 08 — Combining and Copying Arrays — Theory & Concept Breakdown

## 1. What and Why
Master concat(), spread [...a, ...b], shallow copying, reference assignment, Array.from(), and Array.of(). Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### concat()
Detailed breakdown of concat()...

### Spread operator [...]
Detailed breakdown of Spread operator [...]...

### Shallow copying
Detailed breakdown of Shallow copying...

### Reference assignment
Detailed breakdown of Reference assignment...

### Array.from()
Detailed breakdown of Array.from()...

### Array.of()
Detailed breakdown of Array.of()...

## 3. Practical Usage & Code Snippets
```js
// Day 08 Examples
const arr1 = [1, 2];
const arr2 = [3, 4];

console.log("concat():", arr1.concat(arr2)); // [1, 2, 3, 4]
console.log("spread:", [...arr1, ...arr2]); // [1, 2, 3, 4]

// Array.from with map function
const squares = Array.from([1, 2, 3], x => x * x);
console.log("Array.from squares:", squares); // [1, 4, 9]

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
