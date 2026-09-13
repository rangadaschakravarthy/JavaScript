# Day 02 — Properties, Keys and Values — Theory & Concept Breakdown

## 1. What and Why
Understand property key names (string vs numeric-looking), values (primitives, arrays, objects, functions), duplicate key resolution, and property ordering. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Property name rules
Detailed breakdown of Property name rules...

### Property value types
Detailed breakdown of Property value types...

### Numeric keys in objects
Detailed breakdown of Numeric keys in objects...

### Duplicate key resolution
Detailed breakdown of Duplicate key resolution...

### Property key-value pairs
Detailed breakdown of Property key-value pairs...

### Property ordering
Detailed breakdown of Property ordering...

## 3. Practical Usage & Code Snippets
```js
// Day 02 Examples
const student = {
  name: "Sam",
  score: 95,
  isPassed: true,
  subjects: ["Math", "JS"],
  "1stPlace": true
};

console.log("=== Keys & Values ===");
console.log("student name key:", student.name);
console.log("student 1stPlace key:", student["1stPlace"]);

// Duplicate key overwrites earlier key:
const obj = { key: "first", key: "second" };
console.log("Duplicate key result:", obj.key); // "second"

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
