# Day 03 — Accessing and Modifying Properties — Theory & Concept Breakdown

## 1. What and Why
Master dot notation vs bracket notation, reading/updating/adding properties, the delete operator, and dynamic property access obj[key]. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Dot notation obj.prop
Detailed breakdown of Dot notation obj.prop...

### Bracket notation obj["prop"]
Detailed breakdown of Bracket notation obj["prop"]...

### Adding & Updating properties
Detailed breakdown of Adding & Updating properties...

### delete operator & return value
Detailed breakdown of delete operator & return value...

### Dynamic variable key access
Detailed breakdown of Dynamic variable key access...

## 3. Practical Usage & Code Snippets
```js
// Day 03 Examples
const user = { name: "Alex", age: 22 };

// Dot vs Bracket notation
console.log("Dot access:", user.name);
console.log("Bracket access:", user["name"]);

// Adding and Updating
user.age = 23;
user.city = "Hyderabad";
console.log("After update & add:", user);

// Delete operator
const deleted = delete user.city;
console.log("Delete return value:", deleted); // true
console.log("After delete:", user);

// Dynamic key access via variable
const propKey = "name";
console.log("Dynamic user[propKey]:", user[propKey]); // "Alex"

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
