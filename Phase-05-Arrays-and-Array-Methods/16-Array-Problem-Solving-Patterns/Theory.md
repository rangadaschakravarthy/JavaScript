# Day 16 — Array Problem-Solving Patterns — Theory & Concept Breakdown

## 1. What and Why
Master 14 core DSA array problem-solving patterns including linear traversal, two-pointer, running max/min, frequency maps, and prefix sum. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### 14 DSA Patterns
Detailed breakdown of 14 DSA Patterns...

### Linear traversal
Detailed breakdown of Linear traversal...

### Two-pointer technique
Detailed breakdown of Two-pointer technique...

### Running max/min
Detailed breakdown of Running max/min...

### Frequency maps
Detailed breakdown of Frequency maps...

### Prefix sum concept
Detailed breakdown of Prefix sum concept...

## 3. Practical Usage & Code Snippets
```js
// Day 16 Examples
// Pattern: Two-pointer technique for reversing array in-place
function reverseInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

console.log("Reversed in-place:", reverseInPlace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
