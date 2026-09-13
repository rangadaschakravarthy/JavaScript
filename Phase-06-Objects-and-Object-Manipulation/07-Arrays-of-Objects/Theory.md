# Day 07 — Arrays of Objects — Theory & Concept Breakdown

## 1. What and Why
Master real-world data structures by iterating, mapping, filtering, finding, and reducing arrays of objects. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Arrays of objects structure
Detailed breakdown of Arrays of objects structure...

### Looping with for...of
Detailed breakdown of Looping with for...of...

### map() over object arrays
Detailed breakdown of map() over object arrays...

### filter() matching objects
Detailed breakdown of filter() matching objects...

### find() by ID/key
Detailed breakdown of find() by ID/key...

### reduce() aggregations
Detailed breakdown of reduce() aggregations...

## 3. Practical Usage & Code Snippets
```js
// Day 07 Examples
const students = [
  { id: 1, name: "Alice", score: 95 },
  { id: 2, name: "Bob", score: 78 },
  { id: 3, name: "Charlie", score: 88 }
];

// Extracting names via map
const names = students.map(s => s.name);
console.log("Student names:", names); // ["Alice", "Bob", "Charlie"]

// Filtering high scorers (>= 80)
const topStudents = students.filter(s => s.score >= 80);
console.log("Top students:", topStudents);

// Finding student by ID
const student2 = students.find(s => s.id === 2);
console.log("Found student 2:", student2);

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
