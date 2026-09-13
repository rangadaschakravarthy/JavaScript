# Day 09 — Array Destructuring — Theory & Concept Breakdown

## 1. What and Why
Master array destructuring, rest operator ...rest, default values, skipping elements, variable swapping, and rest vs spread. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### Basic destructuring
Detailed breakdown of Basic destructuring...

### Default values
Detailed breakdown of Default values...

### Rest operator ...rest
Detailed breakdown of Rest operator ...rest...

### Skipping elements
Detailed breakdown of Skipping elements...

### Variable swapping [a, b] = [b, a]
Detailed breakdown of Variable swapping [a, b] = [b, a]...

## 3. Practical Usage & Code Snippets
```js
// Day 09 Examples
const point = [10, 20, 30];
const [x, y, z = 0] = point;
console.log("x, y, z:", x, y, z); // 10 20 30

// Variable swapping without temp variable
let a = 1, b = 2;
[a, b] = [b, a];
console.log("Swapped a, b:", a, b); // 2 1

const [head, ...tail] = [100, 200, 300, 400];
console.log("head:", head, "| tail:", tail); // 100 | [200, 300, 400]

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
