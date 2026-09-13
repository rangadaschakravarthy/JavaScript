# Day 04 — Dynamic and Computed Properties — Theory & Concept Breakdown

## 1. What and Why
Master computed property names {[key]: value}, template literal dynamic keys, dynamic property updates, and configuration builders. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Computed property names {[key]: val}
Detailed breakdown of Computed property names {[key]: val}...

### Expressions in []
Detailed breakdown of Expressions in []...

### Template literal dynamic keys
Detailed breakdown of Template literal dynamic keys...

### Dynamic object builders
Detailed breakdown of Dynamic object builders...

### Dynamic counter objects
Detailed breakdown of Dynamic counter objects...

## 3. Practical Usage & Code Snippets
```js
// Day 04 Examples
const dynamicKey = "score";
const prefix = "user";

const student = {
  name: "Alex",
  [dynamicKey]: 95,
  [`${prefix}Id`]: 1001
};

console.log("Computed property object:", student);
// Output: { name: 'Alex', score: 95, userId: 1001 }

function buildConfig(key, value) {
  return {
    [key]: value,
    timestamp: Date.now()
  };
}
console.log("Config built:", buildConfig("env", "production"));

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
