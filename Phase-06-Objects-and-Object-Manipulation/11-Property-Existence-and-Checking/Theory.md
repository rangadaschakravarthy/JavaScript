# Day 11 — Property Existence and Checking — Theory & Concept Breakdown

## 1. What and Why
Check property existence using "key" in obj and Object.hasOwn(obj, key). Differentiate undefined property values from non-existent keys. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### in operator check
Detailed breakdown of in operator check...

### Object.hasOwn() method
Detailed breakdown of Object.hasOwn() method...

### hasOwnProperty() legacy note
Detailed breakdown of hasOwnProperty() legacy note...

### undefined value vs non-existent property
Detailed breakdown of undefined value vs non-existent property...

### Safety checks
Detailed breakdown of Safety checks...

## 3. Practical Usage & Code Snippets
```js
// Day 11 Examples
const user = { name: "Alex", status: undefined };

console.log("in operator check ('name'):", "name" in user); // true
console.log("in operator check ('status'):", "status" in user); // true
console.log("in operator check ('age'):", "age" in user); // false

console.log("Object.hasOwn(user, 'status'):", Object.hasOwn(user, "status")); // true
console.log("Object.hasOwn(user, 'age'):", Object.hasOwn(user, "age")); // false

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
