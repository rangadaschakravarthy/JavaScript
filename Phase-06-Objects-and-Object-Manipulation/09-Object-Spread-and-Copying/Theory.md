# Day 09 — Object Spread and Copying — Theory & Concept Breakdown

## 1. What and Why
Master object spread { ...obj }, combining objects, property overwriting precedence, shallow copying, and Object.assign(). Objects are fundamental key-value data structures in JavaScript used to represent structured entities, entities with attributes, records, and configuration maps.

## 2. Core Concepts & Syntax
### Object spread { ...obj }
Detailed breakdown of Object spread { ...obj }...

### Combining objects
Detailed breakdown of Combining objects...

### Property overwriting rules
Detailed breakdown of Property overwriting rules...

### Shallow copying mechanics
Detailed breakdown of Shallow copying mechanics...

### Object.assign()
Detailed breakdown of Object.assign()...

## 3. Practical Usage & Code Snippets
```js
// Day 09 Examples
const defaults = { theme: "light", showSidebar: true };
const userSettings = { theme: "dark" };

// Later properties overwrite earlier properties!
const finalConfig = { ...defaults, ...userSettings };
console.log("Combined Config:", finalConfig);
// Output: { theme: 'dark', showSidebar: true }

const copy = { ...finalConfig };
copy.theme = "blue";
console.log("Original theme:", finalConfig.theme); // "dark" (Unmodified!)

```

## 4. Key Rules to Remember
1. Object keys are string-based identifiers (or Symbols).
2. Dot notation `obj.key` accesses literal property names; Bracket notation `obj[varKey]` evaluates expressions/variables.
3. Objects are reference types stored on the heap; `const` prevents reassignment but allows property mutation.
