# Day 15 — Sentence and Text Manipulation — Theory & Concept Breakdown

## 1. What and Why
Perform text transformations including title casing, URL slug generation, name initials extraction, and phone number formatting. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### Title case
Detailed breakdown of Title case...

### Slug generation
Detailed breakdown of Slug generation...

### Extract initials
Detailed breakdown of Extract initials...

### Mask sensitive data
Detailed breakdown of Mask sensitive data...

### Normalize whitespace
Detailed breakdown of Normalize whitespace...

## 3. Practical Usage & Code Snippets
```js
// Day 15 Examples
function toSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replaceAll(" ", "-");
}

function getInitials(fullName) {
  const parts = fullName.trim().split(" ");
  let initials = "";
  for (const part of parts) {
    if (part.length > 0) initials += part[0].toUpperCase();
  }
  return initials;
}

console.log("Slug:", toSlug("  JavaScript Fundamentals 2026  ")); // "javascript-fundamentals-2026"
console.log("Initials:", getInitials("John Ronald Reuel Tolkien")); // "JRR T"

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
