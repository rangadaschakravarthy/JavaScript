# Day 02 — String Indexing and Access — Theory & Concept Breakdown

## 1. What and Why
Understand zero-based indexing, .length property, [] character lookup, charAt(), and at() with negative index support. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### 0-based indexing
Detailed breakdown of 0-based indexing...

### First & last character
Detailed breakdown of First & last character...

### .length property
Detailed breakdown of .length property...

### [] bracket notation
Detailed breakdown of [] bracket notation...

### charAt()
Detailed breakdown of charAt()...

### at() with negative index
Detailed breakdown of at() with negative index...

### Access comparison matrix
Detailed breakdown of Access comparison matrix...

## 3. Practical Usage & Code Snippets
```js
// Day 02 Examples
const word = "JavaScript";
console.log("=== String Indexing ===");
console.log("word:", word);
console.log("length:", word.length);
console.log("First char [0]:", word[0]);
console.log("Fifth char [4]:", word[4]);
console.log("Last char [len-1]:", word[word.length - 1]);

console.log("\n=== Out of Range & Methods ===");
console.log("word[99]:", word[99]); // undefined
console.log("word.charAt(99):", word.charAt(99)); // "" (empty string)
console.log("word.at(-1):", word.at(-1)); // "t"
console.log("word.at(-2):", word.at(-2)); // "p"

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
