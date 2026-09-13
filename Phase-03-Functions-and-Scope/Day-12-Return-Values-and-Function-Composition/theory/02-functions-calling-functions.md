# 02 — Functions Calling Functions

## 1. What is this?
Functions calling functions (nested function invocation) is the practice of delegating sub-tasks from one function to another function.

## 2. Why does it exist?
Modular programming relies on small, specialized functions that handle single responsibilities. Higher-level domain functions combine these low-level helpers to accomplish complex workflows.

## 3. Basic Syntax & Grammar Rules
```javascript
function double(n) {
  return n * 2;
}

// Function calling another function
function quadruple(n) {
  return double(double(n)); // Passes return value of inner double() into outer double()
}
```

## 4. Simple Starter Example
```javascript
function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function calculateTotal(price, taxRate) {
  const total = price + (price * taxRate);
  return formatCurrency(total); // Calls helper function!
}

console.log(calculateTotal(100, 0.08)); // Output: "$108.00"
```

## 5. Code Execution Trace & Call Stack

```text
1. Call calculateTotal(100, 0.08)
   └── Call Stack: [Global] -> [calculateTotal]

2. Inside calculateTotal, computes `total = 108`
3. Calls formatCurrency(108)
   └── Call Stack: [Global] -> [calculateTotal] -> [formatCurrency]

4. formatCurrency returns "$108.00"
   └── Pops formatCurrency from Call Stack

5. calculateTotal returns "$108.00"
   └── Pops calculateTotal from Call Stack
```

## 6. More Examples & Helper Delegations
```javascript
function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return !isEven(n); // Reuses isEven helper!
}

console.log("Is 7 odd?:", isOdd(7)); // true
```

## 7. Common Pitfalls & Anti-Patterns
- **Circular Call Chains**: Function A calls Function B, which calls Function A (Infinite recursion stack overflow!).

## 8. Edge Cases & Modern JavaScript Gotchas
- Deep nesting of function calls `f(g(h(i(j(x)))))` makes code hard to read. Use step-by-step intermediate variables or pipeline patterns instead.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "How does DRY apply to helper function delegation?"
  - *Answer*: By delegating repeated low-level tasks (formatting, math, checks) to dedicated helper functions, changes to formatting rules only need to happen in one place.

## 10. Practice Exercises & Self-Check
1. Write `square(n)` and `cube(n)` where `cube(n)` reuses `square(n) * n`.
2. Write `isOdd(n)` reusing `isEven(n)`.

## 11. Summary & Key Takeaways
- Functions can call other functions to delegate sub-tasks.
- Call Stack pushes child frames on top of parent frames.
- Helper delegation eliminates redundant code.
