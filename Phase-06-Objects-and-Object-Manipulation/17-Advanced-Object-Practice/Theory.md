# Day 17 — Advanced Object Practice — Theory & Concept Breakdown

## 1. What and Why
Solve advanced object algorithms including character/word frequency, highest-paid employee per department, deduplication by ID, and index map building. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Word frequency counter
Detailed breakdown of Word frequency counter...

### Department salary analysis
Detailed breakdown of Department salary analysis...

### Deduplication by ID
Detailed breakdown of Deduplication by ID...

### Indexing arrays by ID
Detailed breakdown of Indexing arrays by ID...

### Object deep key search
Detailed breakdown of Object deep key search...

## 3. Practical Usage & Code Snippets
```js
// Day 17 Examples
// Pattern: Indexing an array of objects by ID into a fast lookup table
function indexById(items) {
  return items.reduce((lookup, item) => {
    lookup[item.id] = item;
    return lookup;
  }, {});
}

const users = [
  { id: "u101", name: "Alice" },
  { id: "u102", name: "Bob" }
];
const userIndex = indexById(users);
console.log("Lookup u101:", userIndex["u101"]); // { id: 'u101', name: 'Alice' }

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
