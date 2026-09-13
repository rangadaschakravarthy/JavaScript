# Day 04 — Array Traversal — Theory & Concept Breakdown

## 1. What and Why
Iterate over arrays using for, while, for...of, and forEach(). Find maximum/minimum, count elements, and accumulate sums. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### for loop traversal
Detailed breakdown of for loop traversal...

### while loop
Detailed breakdown of while loop...

### for...of loop
Detailed breakdown of for...of loop...

### forEach() callback
Detailed breakdown of forEach() callback...

### Accumulating sum
Detailed breakdown of Accumulating sum...

### Finding max and min
Detailed breakdown of Finding max and min...

## 3. Practical Usage & Code Snippets
```js
// Day 04 Examples
const nums = [12, 45, 7, 89, 23];

function findMax(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log("Max in [12, 45, 7, 89, 23]:", findMax(nums)); // 89

let sum = 0;
nums.forEach(n => sum += n);
console.log("Sum via forEach:", sum); // 176

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
