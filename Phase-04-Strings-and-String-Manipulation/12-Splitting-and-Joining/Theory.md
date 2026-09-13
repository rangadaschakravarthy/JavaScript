# Day 12 — Splitting and Joining — Theory & Concept Breakdown

## 1. What and Why
Transform strings into arrays using split() and rebuild strings using Array.prototype.join(). In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### split(delimiter)
Detailed breakdown of split(delimiter)...

### split("") character array
Detailed breakdown of split("") character array...

### Array.prototype.join(delimiter)
Detailed breakdown of Array.prototype.join(delimiter)...

### Word reversal
Detailed breakdown of Word reversal...

### CSV parsing
Detailed breakdown of CSV parsing...

## 3. Practical Usage & Code Snippets
```js
// Day 12 Examples
const sentence = "JavaScript is awesome";
const words = sentence.split(" ");
console.log("Words array:", words);

const rejoined = words.join("-");
console.log("Rejoined with hyphen:", rejoined);

const reversedWords = words.reverse().join(" ");
console.log("Reversed sentence:", reversedWords);

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
