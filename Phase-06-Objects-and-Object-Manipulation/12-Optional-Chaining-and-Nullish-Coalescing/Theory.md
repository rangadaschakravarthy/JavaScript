# Day 12 — Optional Chaining and Nullish Coalescing — Theory & Concept Breakdown

## 1. What and Why
Master optional chaining ?. for property/method/array access and nullish coalescing ?? vs logical OR ||. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Optional chaining ?.
Detailed breakdown of Optional chaining ?....

### Optional method calls
Detailed breakdown of Optional method calls...

### Nullish coalescing ??
Detailed breakdown of Nullish coalescing ??...

### ?? vs || comparison
Detailed breakdown of ?? vs || comparison...

### Falsy vs nullish rules
Detailed breakdown of Falsy vs nullish rules...

## 3. Practical Usage & Code Snippets
```js
// Day 12 Examples
const user = { name: "Alex" };

// Safe nested property access with ?.
console.log("user?.address?.city:", user?.address?.city); // undefined (No crash!)

// Nullish coalescing ?? vs Logical OR ||
const count = 0;
console.log("count || 10:", count || 10); // 10 (0 is falsy!)
console.log("count ?? 10:", count ?? 10); // 0  (0 is NOT null/undefined!)

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
