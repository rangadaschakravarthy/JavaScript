# Day 06 — Nested Objects — Theory & Concept Breakdown

## 1. What and Why
Manipulate objects inside objects, multi-level dot/bracket access, nested updates, objects with arrays, and arrays with objects. Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Nested object structure
Detailed breakdown of Nested object structure...

### Multi-level dot access
Detailed breakdown of Multi-level dot access...

### Updating nested properties
Detailed breakdown of Updating nested properties...

### Objects containing arrays
Detailed breakdown of Objects containing arrays...

### Arrays containing objects
Detailed breakdown of Arrays containing objects...

## 3. Practical Usage & Code Snippets
```js
// Day 06 Examples
const user = {
  name: "Alex",
  contact: {
    email: "alex@example.com",
    address: {
      city: "Hyderabad",
      zip: "500081"
    }
  },
  skills: ["JS", "Node"]
};

console.log("Nested city:", user.contact.address.city); // "Hyderabad"
console.log("First skill:", user.skills[0]); // "JS"

user.contact.address.city = "Bangalore";
console.log("Updated nested city:", user.contact.address.city);

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
