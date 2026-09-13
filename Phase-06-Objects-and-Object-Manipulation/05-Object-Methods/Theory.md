# Day 05 — Object Methods — Theory & Concept Breakdown

## 1. What and Why
Learn functions as object properties, method syntax shorthand, method invocations, and introductory method this context. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Object methods
Detailed breakdown of Object methods...

### Method shorthand syntax
Detailed breakdown of Method shorthand syntax...

### Calling object methods
Detailed breakdown of Calling object methods...

### Method return values
Detailed breakdown of Method return values...

### Introductory method this
Detailed breakdown of Introductory method this...

### Context basics
Detailed breakdown of Context basics...

## 3. Practical Usage & Code Snippets
```js
// Day 05 Examples
const calculator = {
  brand: "Casio",
  // Method shorthand syntax
  add(a, b) {
    return a + b;
  },
  describe() {
    return `Calculator Brand: ${this.brand}`;
  }
};

console.log("Method add(10, 20):", calculator.add(10, 20)); // 30
console.log("Method describe():", calculator.describe()); // "Calculator Brand: Casio"

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
