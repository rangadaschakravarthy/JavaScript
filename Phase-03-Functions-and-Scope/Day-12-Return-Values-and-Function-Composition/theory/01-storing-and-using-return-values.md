# 01 — Storing and Using Return Values

## 1. What is this?
When a function evaluates a `return` statement, it hands a value back to the caller. That returned value can be stored in a variable, evaluated inside a boolean conditional, or passed directly into another calculation.

## 2. Why does it exist?
Return values allow functions to perform modular calculations and communicate results back to the main program flow.

## 3. Basic Syntax & Patterns

```javascript
function addTax(amount) {
  return amount * 1.10; // Returns 10% taxed amount
}

// 1. Storing in a variable
const totalCost = addTax(100); // totalCost = 110

// 2. Using directly in expressions
const grandTotal = addTax(100) + addTax(50); // 110 + 55 = 165

// 3. Using inside conditionals
if (addTax(100) > 100) {
  console.log("Tax was added successfully");
}
```

## 4. Simple Starter Example
```javascript
function isEligible(age) {
  return age >= 18;
}

const userAge = 20;

if (isEligible(userAge)) {
  console.log("Access Granted!");
} else {
  console.log("Access Denied!");
}
```

## 5. Code Execution Trace & Mental Model

```text
Statement: if (isEligible(20)) { ... }
                │
                ▼
      Executes isEligible(20)
                │
                ▼
      Returns boolean `true`
                │
                ▼
      Replaces call in-place: if (true) { ... }
                │
                ▼
      Executes IF block!
```

## 6. More Examples & Array/String Manipulations
```javascript
function sanitizeInput(str) {
  return str.trim().toLowerCase();
}

const userInput = "   AdminUser@Example.Com  ";
const cleanEmail = sanitizeInput(userInput);
console.log(cleanEmail); // "adminuser@example.com"
```

## 7. Common Pitfalls & Anti-Patterns
- Ignoring return values by invoking pure functions without assigning or returning their output e.g. `sanitizeInput(text);` without storing the returned result!

## 8. Edge Cases & Modern JavaScript Gotchas
- Functions returning functions (higher-order functions) allow immediate double invocation syntax: `createMultiplier(2)(5)`.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "What happens to a return value if it is not captured in a variable or expression?"
  - *Answer*: It is evaluated at the call site and discarded immediately by the runtime, subject to garbage collection if it references an object created during execution.

## 10. Practice Exercises & Self-Check
1. Write `isAdult(age)` returning boolean. Use it directly inside `if...else`.
2. Write `add(a, b)` and use it to compute `(add(2, 3) + add(4, 5))`.

## 11. Summary & Key Takeaways
- Returned values replace function call expressions in-place.
- Return values can be assigned, checked in conditions, or passed to other functions.
