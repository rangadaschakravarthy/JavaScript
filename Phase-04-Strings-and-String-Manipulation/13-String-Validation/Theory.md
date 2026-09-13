# Day 13 — String Validation — Theory & Concept Breakdown

## 1. What and Why
Write robust boolean string validation functions for empty checks, length boundaries, username rules, and file extension checks. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### isEmpty()
Detailed breakdown of isEmpty()...

### isBlank()
Detailed breakdown of isBlank()...

### hasMinimumLength()
Detailed breakdown of hasMinimumLength()...

### isValidUsername()
Detailed breakdown of isValidUsername()...

### hasExtension()
Detailed breakdown of hasExtension()...

### Boolean validation patterns
Detailed breakdown of Boolean validation patterns...

## 3. Practical Usage & Code Snippets
```js
// Day 13 Examples
function isEmpty(str) {
  return typeof str === "string" && str.length === 0;
}

function isBlank(str) {
  return typeof str === "string" && str.trim().length === 0;
}

function isValidUsername(username) {
  if (typeof username !== "string") return false;
  const trimmed = username.trim();
  return trimmed.length >= 3 && trimmed.length <= 15 && !trimmed.includes(" ");
}

console.log("isEmpty(''):", isEmpty("")); // true
console.log("isBlank('   '):", isBlank("   ")); // true
console.log("isValidUsername('alex_dev'):", isValidUsername("alex_dev")); // true

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
