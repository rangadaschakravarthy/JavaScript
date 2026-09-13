# Day 01 — String Fundamentals — Theory & Concept Breakdown

## 1. What and Why
Master string literal creation, single/double quotes, backticks, typeof string, empty string truthiness, and explicit String() conversion. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### What is a string
Detailed breakdown of What is a string...

### Quotes & Backticks
Detailed breakdown of Quotes & Backticks...

### typeof string
Detailed breakdown of typeof string...

### String vs Number/Char
Detailed breakdown of String vs Number/Char...

### String() conversion
Detailed breakdown of String() conversion...

### Implicit coercion
Detailed breakdown of Implicit coercion...

### Truthiness
Detailed breakdown of Truthiness...

## 3. Practical Usage & Code Snippets
```js
// Day 01 Examples
console.log("=== String Literals & Types ===");
const single = 'Hello Single';
const double = "Hello Double";
const template = `Hello Template`;

console.log("typeof single:", typeof single);
console.log("typeof '' (empty):", typeof "");
console.log("typeof '123':", typeof "123");
console.log("typeof 123:", typeof 123);

console.log("\n=== Explicit String() Conversion ===");
console.log("String(123):", String(123));
console.log("String(true):", String(true));
console.log("String(null):", String(null));
console.log("String(undefined):", String(undefined));

console.log("\n=== Truthiness ===");
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(' '):", Boolean(" ")); // true
console.log("Boolean('hello'):", Boolean("hello")); // true

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
