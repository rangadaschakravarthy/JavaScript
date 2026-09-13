# 02 — Anonymous and Named Function Expressions

## 1. What is this?
- **Anonymous Function Expression**: A function defined without an internal identifier name (`const fn = function() {};`).
- **Named Function Expression (NFE)**: A function expression that includes an explicit name after the `function` keyword (`const fn = function myName() {};`).

## 2. Why does it exist?
Named Function Expressions provide two major benefits:
1. **Self-referencing inside function body**: Allows recursive calls without depending on the outer variable name.
2. **Clearer Stack Traces**: Error stack traces display `myName` instead of `anonymous` or `<anonymous>`.

## 3. Basic Syntax & Grammar Rules
```javascript
// Anonymous Function Expression
const doSomething = function() {
  console.log("Anonymous");
};

// Named Function Expression
const computeFactorial = function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1); // Uses internal identifier 'factorial'!
};
```

## 4. Simple Starter Example
```javascript
const count = function counter(n) {
  console.log("Count:", n);
  if (n > 1) {
    counter(n - 1); // Self-referencing via internal name
  }
};

count(3);
// console.log(counter); // ReferenceError: counter is not defined! (Internal name is scoped to function body only)
```

## 5. Scope of Internal NFE Identifier
The identifier `counter` in `const count = function counter() {}` is **only accessible inside the function body itself**. It is **not** leaked into outer scope.

## 6. More Examples & Stack Trace Clarity
```javascript
const throwError = function processPaymentFailure() {
  throw new Error("Payment declined");
};

// Stack trace will clearly report: "Error: Payment declined at processPaymentFailure"
```

## 7. Common Pitfalls & Anti-Patterns
- Expecting the internal NFE name to be accessible outside the function body.

## 8. Edge Cases & Modern JavaScript Gotchas
- **Inferred Name**: ES6 automatically infers function names from variable assignment: `const foo = function() {}` has `foo.name === "foo"`. However, explicit NFEs override inferred names.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "Why use a Named Function Expression over an anonymous function expression?"
  - *Answer*: NFEs improve debugging stack traces and allow safe internal recursion independent of outer variable reassignments.

## 10. Practice Exercises & Self-Check
1. Write an NFE `const fib = function getFib(n)` that uses `getFib` for recursion.
2. Check `fn.name` for an anonymous vs named function expression.

## 11. Summary & Key Takeaways
- Anonymous expressions omit internal names; NFEs provide explicit names.
- NFE names are scoped strictly inside the function body.
- NFEs clarify debugging stack traces.
