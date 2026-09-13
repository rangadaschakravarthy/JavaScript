# 05 — Function Expression Hoisting Gotchas

## 1. What is this?
Function expressions (and arrow functions) assigned to variables (`var`, `let`, or `const`) follow **variable hoisting rules**, NOT function declaration hoisting rules!

## 2. Why does it exist?
Because function expressions are variable assignments, the function body object is not assigned to the variable identifier until the assignment line is reached during the Execution Phase.

## 3. Comparing Declaration vs Expression Hoisting

```javascript
// 1. FUNCTION DECLARATION: Full body hoisted!
greetDeclaration(); // ✅ Output: "Hello Declaration!"

function greetDeclaration() {
  console.log("Hello Declaration!");
}

// 2. VAR FUNCTION EXPRESSION: Variable hoisted as `undefined`!
// greetVar(); // ❌ TypeError: greetVar is not a function!

var greetVar = function() {
  console.log("Hello Var Expression!");
};

// 3. LET/CONST ARROW FUNCTION: Variable in TDZ!
// greetArrow(); // ❌ ReferenceError: Cannot access 'greetArrow' before initialization!

const greetArrow = () => {
  console.log("Hello Arrow!");
};
```

## 4. Why `TypeError` vs `ReferenceError`?

| Expression Type | Invocation Before Assignment Result | Reason |
|-----------------|--------------------------------------|--------|
| `var fn = function() {}` | `TypeError: fn is not a function` | `fn` is hoisted as `undefined`. Calling `undefined()` is a `TypeError`. |
| `const fn = () => {}` | `ReferenceError: Cannot access 'fn'` | `fn` is in TDZ. Reading `fn` before line assignment throws `ReferenceError`. |

## 5. Code Execution Trace for `var` Expression Trap

```text
Source Code:
  greetVar(); // Line 1
  var greetVar = function() { console.log("Hi"); };

Phase 1 (Creation):
  - Allocation: `greetVar` = undefined

Phase 2 (Execution):
  - Line 1: Tries to invoke `greetVar()`. Evaluates `undefined()`.
  - Throws TypeError: greetVar is not a function!
```

## 6. Common Pitfalls & Anti-Patterns
- Attempting to call arrow functions or function expressions before their definition line.

## 7. Best Practices
- Always place function expressions and arrow functions at the **top** of their scope block before invoking them.
- Prefer `const` for function expressions to prevent accidental re-assignment.

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "Why does calling a `var` function expression before its definition throw `TypeError` instead of `ReferenceError`?"
  - *Answer*: `var` hoists the variable identifier and initializes it to `undefined`. Invoking `undefined()` throws a `TypeError` (attempting to call a non-function value).

## 9. Practice Exercises & Self-Check
1. Predict the exact error type for invoking `var fn = function() {}` vs `const fn = () => {}` before assignment.
2. Refactor a script with function expressions so all calls occur after definition lines.

## 10. Summary & Key Takeaways
- Function expressions follow variable hoisting rules, NOT function declaration rules.
- `var` expressions yield `TypeError` when called early (`undefined()`).
- `let`/`const` arrow expressions yield `ReferenceError` when called early (TDZ).
