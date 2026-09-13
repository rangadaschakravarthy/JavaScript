# 02 — Function Scope vs Block Scope

## 1. What is this?
- **Function Scope**: Scope boundary defined by function declarations/expressions. Variables declared inside a function body cannot be accessed outside that function.
- **Block Scope**: Scope boundary defined by curly brace blocks `{}` in `if` statements, `for` loops, `while` loops, or standalone `{}` blocks.

## 2. Why does it exist?
Prior to ES6 (2015), JavaScript only had Global and Function scope. ES6 introduced Block Scope with `let` and `const` to allow tighter variable scoping inside loops and conditional statements.

## 3. Basic Syntax & Comparison

```javascript
// FUNCTION SCOPE (Applies to var, let, const inside functions)
function testFunctionScope() {
  var funcVar = "Function Scope";
  let funcLet = "Function Scope";
}
// console.log(funcVar); // ReferenceError!

// BLOCK SCOPE (Applies ONLY to let and const inside {})
if (true) {
  var leakedVar = "var ignores block scope!"; // LEAKS to parent scope!
  let blockLet = "let respects block scope";
  const blockConst = "const respects block scope";
}

console.log(leakedVar); // Output: "var ignores block scope!"
// console.log(blockLet); // ReferenceError: blockLet is not defined!
```

## 4. Loop Block Scoping Difference

```javascript
// USING var IN FOR LOOP (Leaks iterator to outer scope!)
for (var i = 0; i < 3; i++) {
  // ...
}
console.log("Outer i:", i); // Output: Outer i: 3 (Leaked!)

// USING let IN FOR LOOP (Scoped strictly inside loop!)
for (let j = 0; j < 3; j++) {
  // ...
}
// console.log(j); // ReferenceError: j is not defined!
```

## 5. Code Execution Trace & Mental Model

```text
{ Block Boundary }
├── var leaked    ──► Escapes block boundary into outer function/global scope!
├── let block     ──► Trapped inside block boundary!
└── const block   ──► Trapped inside block boundary!
```

## 6. Standalone Block Scoping
You can create standalone block scope using curly braces `{}` anywhere in JavaScript:

```javascript
{
  const tempSecret = "ABC-123";
  console.log("Inside block:", tempSecret);
}
// console.log(tempSecret); // ReferenceError! Cleanly garbage collected!
```

## 7. Common Pitfalls & Anti-Patterns
- Using `var` inside `for` loops or `if` statements, causing accidental variable leakage to outer function/global scope.

## 8. Edge Cases & Modern JavaScript Gotchas
- `switch` statements share a single block scope across all `case` clauses unless explicit `{}` braces wrap individual case blocks.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "What is the difference between Function Scope and Block Scope?"
  - *Answer*: Function scope bounds variables within a function body (var, let, const). Block scope bounds variables within any `{}` block (let, const only). `var` ignores block boundaries.

## 10. Practice Exercises & Self-Check
1. Predict output of `if (true) { var a = 1; let b = 2; } console.log(a, typeof b);`.
2. Wrap a `switch` case in `{}` block scope to allow local variable redeclaration.

## 11. Summary & Key Takeaways
- `var` is function-scoped (ignores `{}` block boundaries).
- `let` and `const` are block-scoped (respect `{}` boundaries).
- Modern JS prefers block-scoped `const` and `let` exclusively.
