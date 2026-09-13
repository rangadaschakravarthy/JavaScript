# Day 11 — Trimming and Padding — Theory & Concept Breakdown

## 1. What and Why
Clean user input with trim(), trimStart(), trimEnd(), and format fixed-width strings with padStart() and padEnd(). In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### trim()
Detailed breakdown of trim()...

### trimStart()
Detailed breakdown of trimStart()...

### trimEnd()
Detailed breakdown of trimEnd()...

### padStart()
Detailed breakdown of padStart()...

### padEnd()
Detailed breakdown of padEnd()...

### Input sanitization
Detailed breakdown of Input sanitization...

### Formatting IDs & invoices
Detailed breakdown of Formatting IDs & invoices...

## 3. Practical Usage & Code Snippets
```js
// Day 11 Examples
const messy = "   Hello World!   ";
console.log("Trimmed:", `"${messy.trim()}"`);

const id = "42";
console.log("PadStart ID (5, '0'):", id.padStart(5, "0")); // "00042"
console.log("PadEnd Title (10, '.'):", "Title".padEnd(10, ".")); // "Title....."

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
