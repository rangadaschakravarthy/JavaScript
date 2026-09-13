# Day 14 — Array Reduction — Theory & Concept Breakdown

## 1. What and Why
Master reduce() accumulator mechanics, initial value requirement, sum/product/max/min calculation, and frequency counting. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### reduce() accumulator
Detailed breakdown of reduce() accumulator...

### Initial value importance
Detailed breakdown of Initial value importance...

### Sum & Product
Detailed breakdown of Sum & Product...

### Finding Max/Min via reduce
Detailed breakdown of Finding Max/Min via reduce...

### Frequency map counting
Detailed breakdown of Frequency map counting...

## 3. Practical Usage & Code Snippets
```js
// Day 14 Examples
const nums = [5, 10, 15, 20];
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Total sum:", total); // 50

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequency = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("Fruit frequency:", frequency); // { apple: 3, banana: 2, orange: 1 }

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
