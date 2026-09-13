# Day 14 — Object Iteration and Problem Solving — Theory & Concept Breakdown

## 1. What and Why
Sum numeric properties, find max/min property values, invert objects, build frequency maps, and merge objects. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### for...in loop
Detailed breakdown of for...in loop...

### Iterating entries
Detailed breakdown of Iterating entries...

### Summing numeric values
Detailed breakdown of Summing numeric values...

### Inverting objects (key <-> value)
Detailed breakdown of Inverting objects (key <-> value)...

### Frequency maps
Detailed breakdown of Frequency maps...

## 3. Practical Usage & Code Snippets
```js
// Day 14 Examples
const salaries = { Alex: 50000, Sam: 60000, John: 55000 };

// Summing values using Object.values() and reduce
const totalSalary = Object.values(salaries).reduce((sum, sal) => sum + sal, 0);
console.log("Total salary:", totalSalary); // 165000

// Inverting key-value pairs
function invertObject(obj) {
  const inverted = {};
  for (const [k, v] of Object.entries(obj)) {
    inverted[v] = k;
  }
  return inverted;
}
console.log("Inverted object:", invertObject({ a: "1", b: "2" })); // { '1': 'a', '2': 'b' }

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
