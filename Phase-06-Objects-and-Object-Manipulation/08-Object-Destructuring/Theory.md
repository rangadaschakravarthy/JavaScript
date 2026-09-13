# Day 08 — Object Destructuring — Theory & Concept Breakdown

## 1. What and Why
Master object destructuring syntax, renaming { key: newName }, default values, nested destructuring, and rest properties ...rest. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Basic object destructuring
Detailed breakdown of Basic object destructuring...

### Property renaming
Detailed breakdown of Property renaming...

### Default property values
Detailed breakdown of Default property values...

### Nested destructuring
Detailed breakdown of Nested destructuring...

### Rest properties ...rest
Detailed breakdown of Rest properties ...rest...

## 3. Practical Usage & Code Snippets
```js
// Day 08 Examples
const user = { name: "Alex", age: 22, role: "Admin" };

// Destructuring with renaming and rest
const { name: userName, age, ...rest } = user;
console.log("userName:", userName, "| age:", age); // "Alex" | 22
console.log("rest properties:", rest); // { role: "Admin" }

// Default value fallback
const { city = "Unknown" } = user;
console.log("city default:", city); // "Unknown"

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
