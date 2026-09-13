# Day 07 — Case and Basic Transformation — Theory & Concept Breakdown

## 1. What and Why
Use toUpperCase() and toLowerCase() for case normalization, case-insensitive comparison, and title casing. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### toUpperCase()
Detailed breakdown of toUpperCase()...

### toLowerCase()
Detailed breakdown of toLowerCase()...

### Immutability check
Detailed breakdown of Immutability check...

### Case-insensitive equality
Detailed breakdown of Case-insensitive equality...

### Title case
Detailed breakdown of Title case...

### Input sanitization
Detailed breakdown of Input sanitization...

## 3. Practical Usage & Code Snippets
```js
// Day 07 Examples
const text = "JavaScript Mastery";
console.log("Original:", text);
console.log("Upper:", text.toUpperCase());
console.log("Lower:", text.toLowerCase());

function equalsIgnoreCase(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
console.log("Case insensitive check:", equalsIgnoreCase("hello", "HELLO")); // true

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
