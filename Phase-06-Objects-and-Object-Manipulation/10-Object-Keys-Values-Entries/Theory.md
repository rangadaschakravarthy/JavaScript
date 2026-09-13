# Day 10 — Object Keys, Values & Entries — Theory & Concept Breakdown

## 1. What and Why
Master Object.keys(), Object.values(), Object.entries(), Object.fromEntries(), and iterating key-value pairs. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Object.keys()
Detailed breakdown of Object.keys()...

### Object.values()
Detailed breakdown of Object.values()...

### Object.entries()
Detailed breakdown of Object.entries()...

### Object.fromEntries()
Detailed breakdown of Object.fromEntries()...

### Iteration via for...of entries
Detailed breakdown of Iteration via for...of entries...

### Own enumerable properties
Detailed breakdown of Own enumerable properties...

## 3. Practical Usage & Code Snippets
```js
// Day 10 Examples
const user = { name: "Alex", age: 22, city: "Hyderabad" };

console.log("Keys:", Object.keys(user)); // ["name", "age", "city"]
console.log("Values:", Object.values(user)); // ["Alex", 22, "Hyderabad"]
console.log("Entries:", Object.entries(user)); // [["name", "Alex"], ["age", 22], ...]

// Converting entries array back to object:
const entries = [["a", 1], ["b", 2]];
const rebuiltObj = Object.fromEntries(entries);
console.log("Rebuilt Object:", rebuiltObj); // { a: 1, b: 2 }

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
