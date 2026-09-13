# 04 — Pure vs Impure Functions

## 1. What is this?
- **Pure Function**: A function that satisfies two conditions:
  1. Given the same inputs, it **always** returns the exact same output (Deterministic).
  2. It produces **no side effects** (does not mutate external variables, DOM, files, or state).
- **Impure Function**: A function whose output depends on external state or that mutates data outside its scope.

## 2. Why does it exist?
Pure functions are predictable, easy to test, reusable, and free from hidden state bugs. Impure functions introduce hidden dependencies that make applications fragile and hard to debug.

## 3. Side-by-Side Comparison

```javascript
// PURE FUNCTION
// Same inputs (2, 3) ALWAYS produce 5. No external variables changed.
function addPure(a, b) {
  return a + b;
}

// IMPURE FUNCTION (Example 1: Depends on External State)
let taxRate = 0.10;
function calculateTaxImpure(amount) {
  return amount * taxRate; // If taxRate changes externally, output changes!
}

// IMPURE FUNCTION (Example 2: Mutates External State)
let totalSum = 0;
function addToTotalImpure(value) {
  totalSum += value; // Side effect: Mutates external variable `totalSum`!
}
```

## 4. Comparison Matrix

| Feature | Pure Function | Impure Function |
|---------|---------------|-----------------|
| **Output Determinism** | 100% Deterministic | Non-deterministic (can vary) |
| **Depends On External State?** | No (Uses parameters only) | Yes (Reads global/outer variables) |
| **Causes Side Effects?** | No | Yes (Mutates variables, prints, Network/DOM) |
| **Testability** | Extremely Easy | Requires mocking external state |

## 5. Non-Deterministic Functions
Functions relying on random numbers (`Math.random()`), current time (`new Date()`), or external API calls are inherently **impure** because their output changes between calls even with identical parameters.

```javascript
// IMPURE: Output changes every millisecond!
function getTimestampedMessage(msg) {
  return `[${new Date().toISOString()}] ${msg}`;
}
```

## 6. Common Pitfalls & Anti-Patterns
- Mutating argument arrays or objects passed into the function:
```javascript
// IMPURE: Mutates the caller's array!
function addItemImpure(arr, item) {
  arr.push(item); // Side effect: Modifies original array reference!
  return arr;
}

// PURE: Returns a new array copy without mutating original
function addItemPure(arr, item) {
  return [...arr, item];
}
```

## 7. Refactoring Impure Functions to Pure Functions
To convert an impure function into a pure function:
1. Pass all external dependencies as explicit parameters.
2. Return new data structures instead of mutating existing references.

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "Why are pure functions preferred in functional programming and state management?"
  - *Answer*: Pure functions eliminate side effects, make code predictable, enable simple unit testing without mocks, and prevent subtle race-condition bugs.

## 9. Practice Exercises & Self-Check
1. Classify whether `Math.max(a, b)` is pure or impure.
2. Refactor `let balance = 100; function deposit(amount) { balance += amount; }` into a pure function.

## 10. Summary & Key Takeaways
- Pure = Same Input -> Same Output + Zero Side Effects.
- Impure = External dependencies, state mutations, or non-deterministic sources (`Math.random`, `Date`).
- Pure functions are easier to test and debug.
