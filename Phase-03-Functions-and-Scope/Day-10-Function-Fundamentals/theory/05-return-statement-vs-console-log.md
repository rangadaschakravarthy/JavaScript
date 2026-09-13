# 05 — Return Statement vs Console Log

## 1. What is this?
- `console.log()`: A diagnostic utility function that prints output to the developer console/terminal. It does **not** hand data back to the calling program.
- `return`: A language keyword inside a function that **hands data back** to the caller and **immediately terminates** function execution.

## 2. Why does it exist?
Conflating `console.log()` with `return` is one of the most common beginner traps in programming. Functions need to compute and return data so other parts of the application can store, inspect, transform, or make decisions with that data.

## 3. Basic Syntax & Comparison Matrix

| Feature | `console.log(value)` | `return value;` |
|---------|-----------------------|------------------|
| **Primary Purpose** | Debugging/Printing | Handing computed data back to program |
| **Affects Caller Variable?** | No (`undefined` result) | Yes (stores returned data in caller) |
| **Ends Function Execution?** | No (continues execution) | **Yes!** (Terminates function immediately) |

## 4. Simple Starter Example
```javascript
// BAD PRACTICE: Printing instead of Returning
function addLog(a, b) {
  console.log(a + b); // Prints 30 to terminal
}

const result1 = addLog(10, 20);
console.log("Result1 value:", result1); // Output: undefined!

// GOOD PRACTICE: Returning Value
function addReturn(a, b) {
  return a + b; // Hands 30 back to caller
}

const result2 = addReturn(10, 20);
console.log("Result2 value:", result2); // Output: 30
```

## 5. Early Return & Guard Clauses

The `return` statement immediately halts function execution. Any code below `return` inside the same execution block is **unreachable**.

```javascript
function checkAge(age) {
  if (age < 0) {
    return "Invalid age"; // Early return guard clause
  }
  if (age < 18) {
    return "Minor";
  }
  return "Adult"; // Executed if age >= 18
}

console.log(checkAge(-5)); // "Invalid age"
console.log(checkAge(25)); // "Adult"
```

## 6. Return Without Value (`return;`)
If `return;` is called without an explicit value, or if a function completes without hitting a `return` statement, the function automatically returns `undefined`.

```javascript
function doNothing() {
  return; // Returns undefined
}

function implicitReturn() {
  const x = 10; // No return statement -> Returns undefined
}

console.log(doNothing());       // undefined
console.log(implicitReturn());  // undefined
```

## 7. Common Pitfalls & Anti-Patterns
- **Writing Unreachable Code**: Placing statements after `return` line.
```javascript
function test() {
  return "Done";
  console.log("This line will NEVER execute!"); // Warning: Unreachable code
}
```

## 8. Edge Cases & Modern JavaScript Gotchas
- **Automatic Semicolon Insertion (ASI) Trap**:
```javascript
function getUser() {
  return
  {
    name: "Alex"
  };
}
console.log(getUser()); // Output: undefined! JS inserted ';' after `return`!
```

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "Why is `return` preferred over `console.log()` inside reusable domain logic?"
  - *Answer*: `return` makes functions pure, composable, and testable. `console.log()` produces a side-effect without handing data back to caller.

## 10. Practice Exercises & Self-Check
1. Write a function `square(n)` that returns `n * n`. Store its result in a variable and double it.
2. Fix the ASI trap bug in `getUser()`.

## 11. Summary & Key Takeaways
- `console.log()` prints; `return` gives data back to program logic.
- Functions without `return` default to returning `undefined`.
- `return` immediately terminates function execution.
