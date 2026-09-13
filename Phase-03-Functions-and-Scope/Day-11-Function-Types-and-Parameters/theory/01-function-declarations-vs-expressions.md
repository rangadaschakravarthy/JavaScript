# 01 — Function Declarations vs Function Expressions

## 1. What is this?
- **Function Declaration**: Defines a named function as a standalone statement (`function add() {}`).
- **Function Expression**: Creates a function as part of a variable assignment expression (`const add = function() {};`).

## 2. Why does it exist?
Function expressions allow functions to be treated as **first-class values**: assigned to variables, stored inside object properties, passed into other functions as arguments, or conditionally defined.

## 3. Basic Syntax & Grammar Rules
```javascript
// Function Declaration
function addDecl(a, b) {
  return a + b;
}

// Function Expression (Anonymous)
const addExpr = function(a, b) {
  return a + b;
};
```

## 4. Simple Starter Example
```javascript
// Calling before definition:
console.log(addDecl(5, 5)); // 10 (Hoisting works!)

// console.log(addExpr(5, 5)); // TypeError: addExpr is not a function (TDZ / uninitialized!)

function addDecl(a, b) { return a + b; }
const addExpr = function(a, b) { return a + b; };
```

## 5. Key Differences Matrix

| Feature | Function Declaration | Function Expression |
|---------|-----------------------|---------------------|
| **Syntax** | `function name() {}` | `const name = function() {};` |
| **Hoisting** | Hoisted completely (can call before declaration line) | Variable hoisted, function uninitialized (TDZ) |
| **First-Class Value Use** | Standalone statement | Can be assigned, stored, passed, or returned |

## 6. More Examples & Conditional Definition
```javascript
let selectOperation;
const isAddition = true;

if (isAddition) {
  selectOperation = function(a, b) { return a + b; };
} else {
  selectOperation = function(a, b) { return a - b; };
}

console.log(selectOperation(10, 4)); // Output: 14
```

## 7. Common Pitfalls & Anti-Patterns
- Invoking a function expression variable before its assignment line in code.

## 8. Edge Cases & Modern JavaScript Gotchas
- Semicolons: Function declarations do NOT require trailing semicolons `;`, whereas function expressions (being variable assignments) SHOULD end with `;`.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "Why can function declarations be called before their definition line, but function expressions cannot?"
  - *Answer*: Function declarations undergo function hoisting (identifier and body hoisted during creation phase). Function expressions follow variable binding rules (`const`/`let` stay in TDZ until assignment).

## 10. Practice Exercises & Self-Check
1. Convert `function multiply(a, b) { return a * b; }` into a `const` function expression.
2. Demonstrate hoisting difference between declaration and expression.

## 11. Summary & Key Takeaways
- Declarations stand alone; expressions assign functions to variables.
- Declarations hoist body completely; expressions stay in TDZ.
