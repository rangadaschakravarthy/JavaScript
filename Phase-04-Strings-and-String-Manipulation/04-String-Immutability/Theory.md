# Day 04 — String Immutability — Theory & Concept Breakdown

## 1. What and Why
Deeply understand why JavaScript strings cannot be mutated character-by-character and how variable reassignment creates new string references. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### What is immutability
Detailed breakdown of What is immutability...

### Why str[0] = "X" fails
Detailed breakdown of Why str[0] = "X" fails...

### Reassignment vs mutation
Detailed breakdown of Reassignment vs mutation...

### Creating new strings
Detailed breakdown of Creating new strings...

### const bindings vs value immutability
Detailed breakdown of const bindings vs value immutability...

## 3. Practical Usage & Code Snippets
```js
// Day 04 Examples
let greeting = "hello";
console.log("Original:", greeting);

// Attempting character modification
greeting[0] = "H"; // Fails silently in non-strict mode
console.log("After str[0] = 'H':", greeting); // "hello"

// Correct way: Reassigning a NEW string
greeting = "H" + greeting.slice(1);
console.log("After reassignment:", greeting); // "Hello"

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
