# Day 13 — Object Transformation — Theory & Concept Breakdown

## 1. What and Why
Transform object shapes, select/remove properties, map arrays of objects, and create summary objects for real-world APIs. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Object reshaping
Detailed breakdown of Object reshaping...

### Selecting specific keys
Detailed breakdown of Selecting specific keys...

### Removing keys
Detailed breakdown of Removing keys...

### Mapping arrays of objects
Detailed breakdown of Mapping arrays of objects...

### Data pipeline transformation
Detailed breakdown of Data pipeline transformation...

## 3. Practical Usage & Code Snippets
```js
// Day 13 Examples
const rawUsers = [
  { id: 1, name: "Alex", passwordHash: "secret123", email: "alex@test.com" },
  { id: 2, name: "Sam", passwordHash: "secret456", email: "sam@test.com" }
];

// Sanitize user payload by picking selected keys
const sanitized = rawUsers.map(({ passwordHash, ...safeUser }) => safeUser);
console.log("Sanitized Users:", sanitized);
// Output: [ { id: 1, name: 'Alex', email: 'alex@test.com' }, ... ]

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
