# Day 16 — String Problem-Solving Patterns — Theory & Concept Breakdown

## 1. What and Why
Master 15 core string problem-solving patterns including character traversal, two-pointer, early termination, frequency maps, and sliding window basics. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### 15 String Patterns
Detailed breakdown of 15 String Patterns...

### Character traversal
Detailed breakdown of Character traversal...

### Two-pointer technique
Detailed breakdown of Two-pointer technique...

### Frequency map concept
Detailed breakdown of Frequency map concept...

### Early termination
Detailed breakdown of Early termination...

### Accumulator pattern
Detailed breakdown of Accumulator pattern...

## 3. Practical Usage & Code Snippets
```js
// Day 16 Examples
function isPalindromeTwoPointer(str) {
  const clean = str.toLowerCase().replaceAll(" ", "");
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log("isPalindrome('racecar'):", isPalindromeTwoPointer("racecar")); // true
console.log("isPalindrome('hello'):", isPalindromeTwoPointer("hello")); // false

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
