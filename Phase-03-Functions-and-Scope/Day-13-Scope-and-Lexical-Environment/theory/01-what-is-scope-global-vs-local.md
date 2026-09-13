# 01 — What is Scope? Global vs Local Scope

## 1. What is this?
**Scope** refers to the current context or region of execution in which values and expressions are "visible" or can be referenced. If a variable is not in the current scope, it cannot be accessed and attempting to do so results in a `ReferenceError`.

## 2. Why does it exist?
Scope prevents variable naming collisions, provides security by encapsulating internal data, and manages system memory by allowing the JavaScript engine to garbage collect unreferenced local variables when execution leaves a scope.

## 3. Global vs Local Scope Overview

```javascript
// GLOBAL SCOPE: Accessible anywhere in the application
const globalAppName = "JavaScript Mastery";

function displayAppInfo() {
  // LOCAL FUNCTION SCOPE: Accessible ONLY inside displayAppInfo()
  const localVersion = "3.0.0";
  console.log(`${globalAppName} v${localVersion}`);
}

displayAppInfo(); // Output: "JavaScript Mastery v3.0.0"

console.log(globalAppName); // Output: "JavaScript Mastery"
// console.log(localVersion); // ReferenceError: localVersion is not defined!
```

## 4. Scope Classification Matrix

| Scope Level | Where Defined | Accessibility Boundary |
|-------------|---------------|------------------------|
| **Global Scope** | Outside any function or block | Accessible everywhere in script |
| **Function Scope** | Inside a `function() {}` body | Accessible ONLY inside that function |
| **Block Scope** | Inside `{}` block (`if`, `for`, `while`) | Accessible ONLY inside `{}` block (for `let`/`const`) |

## 5. Code Execution Trace & Mental Model

```text
Global Execution Context
├── globalAppName: "JavaScript Mastery"
│
└── displayAppInfo() Scope Container
    ├── localVersion: "3.0.0"
    └── Can read: localVersion AND globalAppName
```

## 6. Global Variable Pollution Risk
Creating too many variables in global scope causes naming collisions where one function overwrites a global variable intended for another.

```javascript
// DANGEROUS: Accidental global variable pollution!
function calculateTotal() {
  total = 100; // Missing let/const/var creates an IMPLICIT GLOBAL variable in non-strict mode!
}
```

## 7. Common Pitfalls & Anti-Patterns
- Forgetting `const`/`let` inside a function, creating an accidental global variable.
- Attempting to access local function variables from the outer global scope.

## 8. Edge Cases & Modern JavaScript Gotchas
- **Strict Mode (`'use strict';`)**: Disables implicit global creation. Assigning to an undeclared variable (`total = 100`) throws a `ReferenceError`.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "Why is polluting global scope considered bad engineering practice?"
  - *Answer*: It leads to unpredictable naming collisions, tight coupling between independent modules, and security vulnerabilities.

## 10. Practice Exercises & Self-Check
1. Write a script with 1 global variable and 2 local function variables.
2. What error occurs when accessing a local variable outside its function?

## 11. Summary & Key Takeaways
- Scope controls variable visibility.
- Global scope is visible everywhere; local scope is restricted to its defining function/block.
- Always use `const` or `let` to prevent accidental global scope pollution.
