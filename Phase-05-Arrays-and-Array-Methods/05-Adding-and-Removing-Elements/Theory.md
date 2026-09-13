# Day 05 — Adding and Removing Elements — Theory & Concept Breakdown

## 1. What and Why
Master push(), pop(), shift(), unshift(), mutation behavior, time complexity (O(1) end vs O(N) start), and const array mutation. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### push() add to end
Detailed breakdown of push() add to end...

### pop() remove from end
Detailed breakdown of pop() remove from end...

### shift() remove from start
Detailed breakdown of shift() remove from start...

### unshift() add to start
Detailed breakdown of unshift() add to start...

### O(1) vs O(N) complexity
Detailed breakdown of O(1) vs O(N) complexity...

### const array mutation
Detailed breakdown of const array mutation...

## 3. Practical Usage & Code Snippets
```js
// Day 05 Examples
const stack = [1, 2, 3];

// Add to end - O(1)
stack.push(4, 5);
console.log("After push(4, 5):", stack); // [1, 2, 3, 4, 5]

// Remove from end - O(1)
const popped = stack.pop();
console.log("Popped:", popped, "| Stack:", stack); // 5 | [1, 2, 3, 4]

// Add/Remove from start - O(N) because indexes re-shift
stack.unshift(0);
console.log("After unshift(0):", stack); // [0, 1, 2, 3, 4]
stack.shift();
console.log("After shift():", stack); // [1, 2, 3, 4]

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
