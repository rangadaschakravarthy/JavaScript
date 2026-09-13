# 03 — Calling Functions and Execution Flow

## 1. What is this?
Calling a function (also known as **invoking**, **executing**, or **triggering**) instructs the JavaScript engine to pause current top-level execution, push a new execution frame onto the call stack, run the statements inside the function body, and then return execution to the exact point where the call occurred.

## 2. Why does it exist?
Declaring a function merely registers its blueprint in memory. Without calling the function (`fn()`), the statements inside the function body are never executed.

## 3. Basic Syntax & Grammar Rules
```javascript
// Function Call / Invocation
functionName(argument1, argument2);
```

## 4. Simple Starter Example
```javascript
console.log("Step 1: Start Program");

function processOrder() {
  console.log("Step 2: Processing Order inside function body...");
}

console.log("Step 3: Before Calling Function");
processOrder(); // Execution jumps into processOrder()
console.log("Step 4: After Calling Function");

/* OUTPUT:
Step 1: Start Program
Step 3: Before Calling Function
Step 2: Processing Order inside function body...
Step 4: After Calling Function
*/
```

## 5. Code Execution Trace & Mental Model

```text
  Main Execution Thread                 Function Execution Context
─────────────────────────              ─────────────────────────────
Line 1: console.log("Step 1")
Line 3: Register processOrder()
Line 7: console.log("Step 3")
Line 8: processOrder() ───────────────► Push processOrder() to Call Stack
                                         Line 4: console.log("Step 2")
                                         Finish body -> Pop Call Stack
Line 9: console.log("Step 4") ◄───────── Resume Main Thread
```

## 6. More Examples & Common Patterns

### Nested Function Calls & Execution Stack
```javascript
function stepOne() {
  console.log("-> Step 1 Executing");
}

function stepTwo() {
  console.log("-> Step 2 Starts");
  stepOne(); // Nested call!
  console.log("-> Step 2 Ends");
}

console.log("Program Begin");
stepTwo();
console.log("Program Finish");
```

## 7. Common Pitfalls & Anti-Patterns
- **Infinite Recursion / Stack Overflow**: A function calling itself without a base case fills up the Call Stack memory (`RangeError: Maximum call stack size exceeded`).
- **Invoking Uninitialized Functions**: Calling a variable before function expression assignment throws a `TypeError: fn is not a function`.

## 8. Edge Cases & Modern JavaScript Gotchas
- **Referencing vs Invoking**: `const myFn = processOrder;` copies the function reference. `const res = processOrder();` executes the function and stores its returned value.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "What happens on the JavaScript Call Stack during function invocation?"
  - *Answer*: Calling a function creates a new execution context (stack frame) containing parameters and local variables, pushing it onto the Call Stack. When the function returns, its frame is popped off.

## 10. Practice Exercises & Self-Check
1. Trace the output order of 3 nested functions calling each other.
2. What is the difference between `console.log(greet)` and `console.log(greet())`?

## 11. Summary & Key Takeaways
- Function calls use parentheses `()` to trigger execution.
- Invocation pauses current thread execution and creates a new Call Stack frame.
- When invocation completes, control returns to the caller line.
