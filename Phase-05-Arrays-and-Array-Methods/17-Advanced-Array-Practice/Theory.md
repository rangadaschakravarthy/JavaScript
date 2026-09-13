# Day 17 — Advanced Array Practice — Theory & Concept Breakdown

## 1. What and Why
Solve foundational DSA array problems including Two Sum, Second Largest, Move Zeroes, Rotate Array, and Merge Sorted Arrays. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### Two Sum problem
Detailed breakdown of Two Sum problem...

### Second Largest element
Detailed breakdown of Second Largest element...

### Move Zeroes to end
Detailed breakdown of Move Zeroes to end...

### Rotate Array
Detailed breakdown of Rotate Array...

### Merge Sorted Arrays
Detailed breakdown of Merge Sorted Arrays...

## 3. Practical Usage & Code Snippets
```js
// Day 17 Examples
// Two Sum problem: Find indexes of two numbers that add up to target
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

console.log("twoSum([2, 7, 11, 15], 9):", twoSum([2, 7, 11, 15], 9)); // [0, 1]

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
