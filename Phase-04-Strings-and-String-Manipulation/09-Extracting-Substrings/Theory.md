# Day 09 — Extracting Substrings — Theory & Concept Breakdown

## 1. What and Why
Master slice() and substring(), compare negative index handling, and understand legacy substr(). In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### slice(start, end)
Detailed breakdown of slice(start, end)...

### substring(start, end)
Detailed breakdown of substring(start, end)...

### substr() legacy note
Detailed breakdown of substr() legacy note...

### Negative index support
Detailed breakdown of Negative index support...

### Comparison matrix
Detailed breakdown of Comparison matrix...

## 3. Practical Usage & Code Snippets
```js
// Day 09 Examples
const str = "JavaScript";

console.log("slice(0, 4):", str.slice(0, 4)); // "Java"
console.log("slice(-6):", str.slice(-6)); // "Script"
console.log("substring(0, 4):", str.substring(0, 4)); // "Java"
console.log("substring(4, 0) swap:", str.substring(4, 0)); // "Java"

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
