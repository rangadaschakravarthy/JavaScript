# Day 08 — Searching Strings — Theory & Concept Breakdown

## 1. What and Why
Master includes(), startsWith(), endsWith(), indexOf(), lastIndexOf(), and search() for inspecting string content. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### includes()
Detailed breakdown of includes()...

### startsWith()
Detailed breakdown of startsWith()...

### endsWith()
Detailed breakdown of endsWith()...

### indexOf()
Detailed breakdown of indexOf()...

### lastIndexOf()
Detailed breakdown of lastIndexOf()...

### search()
Detailed breakdown of search()...

### indexOf() === -1 check
Detailed breakdown of indexOf() === -1 check...

## 3. Practical Usage & Code Snippets
```js
// Day 08 Examples
const sentence = "The quick brown fox jumps over the lazy dog";

console.log("includes('fox'):", sentence.includes("fox")); // true
console.log("startsWith('The'):", sentence.startsWith("The")); // true
console.log("endsWith('dog'):", sentence.endsWith("dog")); // true
console.log("indexOf('o'):", sentence.indexOf("o")); // 12
console.log("lastIndexOf('o'):", sentence.lastIndexOf("o")); // 41

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
