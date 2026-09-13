# Day 05 — String Concatenation and Template Literals — Theory & Concept Breakdown

## 1. What and Why
Master string concatenation using +, +=, template literals with ${expression}, multi-line formatting, and implicit coercion rules. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### + operator
Detailed breakdown of + operator...

### += operator
Detailed breakdown of += operator...

### Coercion rules
Detailed breakdown of Coercion rules...

### Template literals ${}
Detailed breakdown of Template literals ${}...

### Multiline strings
Detailed breakdown of Multiline strings...

### Performance & readability
Detailed breakdown of Performance & readability...

## 3. Practical Usage & Code Snippets
```js
// Day 05 Examples
const name = "Alex";
const age = 22;

console.log("=== Concatenation ===");
console.log("Name: " + name + ", Age: " + age);

console.log("\n=== Template Literals ===");
console.log(`Name: ${name}, Age: ${age}, Next Year: ${age + 1}`);

console.log("\n=== Coercion Rules ===");
console.log('"5" + 2:', "5" + 2); // "52"
console.log('5 + "2":', 5 + "2"); // "52"
console.log('"5" + true:', "5" + true); // "5true"

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
