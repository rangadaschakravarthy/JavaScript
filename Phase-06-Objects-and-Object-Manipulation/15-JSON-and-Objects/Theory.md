# Day 15 — JSON and Objects — Theory & Concept Breakdown

## 1. What and Why
Master JSON rules (double quotes, no functions/undefined/comments), JSON.stringify(), and JSON.parse(). Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### What is JSON
Detailed breakdown of What is JSON...

### JSON syntax rules
Detailed breakdown of JSON syntax rules...

### JSON.stringify(obj)
Detailed breakdown of JSON.stringify(obj)...

### JSON.parse(string)
Detailed breakdown of JSON.parse(string)...

### Serialization restrictions
Detailed breakdown of Serialization restrictions...

## 3. Practical Usage & Code Snippets
```js
// Day 15 Examples
const user = { name: "Alex", age: 22, active: true };

// Object to JSON String
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString); // '{"name":"Alex","age":22,"active":true}'

// JSON String to Object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject.name); // "Alex"

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
