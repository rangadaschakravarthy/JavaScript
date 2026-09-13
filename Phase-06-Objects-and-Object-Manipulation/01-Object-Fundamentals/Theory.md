# Day 01 — Object Fundamentals — Theory & Concept Breakdown

## 1. What and Why
Master object definition, key-value pairs, real-world data modeling, typeof {} === "object", typeof null === "object", and basic object references. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### What is an object
Detailed breakdown of What is an object...

### Object literals {}
Detailed breakdown of Object literals {}...

### Key-value pairs
Detailed breakdown of Key-value pairs...

### typeof {} === "object"
Detailed breakdown of typeof {} === "object"...

### typeof null === "object"
Detailed breakdown of typeof null === "object"...

### Primitive vs Object comparison
Detailed breakdown of Primitive vs Object comparison...

### Basic object reference concept
Detailed breakdown of Basic object reference concept...

## 3. Practical Usage & Code Snippets
```js
// Day 01 Examples
console.log("=== Object Literals & Structure ===");
const user = {
  name: "Alex",
  age: 22,
  city: "Hyderabad"
};

console.log("user object:", user);
console.log("typeof user:", typeof user); // "object"
console.log("typeof null (historical quirk):", typeof null); // "object"

const emptyObj = {};
console.log("typeof emptyObj:", typeof emptyObj); // "object"

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
