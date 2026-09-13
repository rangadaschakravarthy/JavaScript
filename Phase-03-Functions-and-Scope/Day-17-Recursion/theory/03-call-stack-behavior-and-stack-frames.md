# 03 — Call Stack Behavior and Stack Frames

## 1. What is this?
Every time a function is invoked in JavaScript, a new **Stack Frame** (Execution Context) is allocated and pushed onto top of the engine's **Call Stack**. In recursion, every recursive call creates a new stack frame containing its own local parameters, variables, and return address.

## 2. Why does it exist?
Stack frames preserve local variable state per recursive call level so that when inner calls return, outer calls can resume execution with their original local parameters intact.

## 3. Visualizing Stack Frames for `factorial(3)`

```text
=============================================================
STAGE 1: WINDING (Pushing Stack Frames)
=============================================================

Step 1: Call factorial(3)
+------------------------------------+
| Frame: factorial(3) { n: 3 }       |  <-- Call Stack Top
| Global Execution Context           |
+------------------------------------+

Step 2: factorial(3) calls factorial(2)
+------------------------------------+
| Frame: factorial(2) { n: 2 }       |  <-- Call Stack Top
| Frame: factorial(3) { n: 3 }       |
| Global Execution Context           |
+------------------------------------+

Step 3: factorial(2) calls factorial(1)
+------------------------------------+
| Frame: factorial(1) { n: 1 }       |  <-- Base Case Reached!
| Frame: factorial(2) { n: 2 }       |
| Frame: factorial(3) { n: 3 }       |
| Global Execution Context           |
+------------------------------------+

=============================================================
STAGE 2: UNWINDING (Popping Stack Frames & Computing)
=============================================================

Step 4: factorial(1) returns 1  ──► Popped off stack!
Step 5: factorial(2) evaluates 2 * 1 = 2 ──► Popped off stack!
Step 6: factorial(3) evaluates 3 * 2 = 6 ──► Popped off stack!

Final Result: 6
```

## 4. Understanding Stack Overflow (`RangeError`)
The Call Stack has a maximum size limit set by the JavaScript engine (typically around 10,000 frames in V8). If recursive depth exceeds this limit, V8 throws a `RangeError: Maximum call stack size exceeded`.

```javascript
function causeOverflow(n) {
  return causeOverflow(n + 1); // No base case -> Stack Overflow!
}

// causeOverflow(1); // ❌ RangeError: Maximum call stack size exceeded
```

## 5. Common Pitfalls & Anti-Patterns
- Writing recursive functions with excessive depth (e.g., recursing over a 1,000,000 element array).

## 6. Interview & Problem-Solving Perspective
- **Interview Question**: "What causes a 'Maximum call stack size exceeded' error during recursion?"
  - *Answer*: When recursive calls repeat without reaching a base case, stack frames continuously accumulate on the Call Stack until available call stack memory limit is exceeded.

## 7. Practice Exercises & Self-Check
1. Draw stack frame diagram for `sum(3)` where `sum(n) = n + sum(n-1)`.
2. What is a stack frame?

## 8. Summary & Key Takeaways
- Every recursive invocation pushes a new stack frame to Call Stack.
- Winding phase builds stack frames; Unwinding phase pops frames and computes.
- Exceeding stack limit triggers `RangeError: Maximum call stack size exceeded`.
