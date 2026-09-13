# Day 16 — Object Problem-Solving Patterns — Theory & Concept Breakdown

## 1. What and Why
Master 15 core object patterns including lookup tables, frequency counting, category grouping, object merging, and data normalization. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### 15 Object Patterns
Detailed breakdown of 15 Object Patterns...

### Lookup tables O(1)
Detailed breakdown of Lookup tables O(1)...

### Frequency counter pattern
Detailed breakdown of Frequency counter pattern...

### Category grouping
Detailed breakdown of Category grouping...

### Data normalization
Detailed breakdown of Data normalization...

## 3. Practical Usage & Code Snippets
```js
// Day 16 Examples
// Pattern: Grouping objects by category
function groupByCategory(items) {
  return items.reduce((grouped, item) => {
    const cat = item.category;
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(item);
    return grouped;
  }, {});
}

const items = [
  { name: "Apple", category: "Fruit" },
  { name: "Carrot", category: "Vegetable" },
  { name: "Banana", category: "Fruit" }
];
console.log("Grouped by category:", groupByCategory(items));

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
