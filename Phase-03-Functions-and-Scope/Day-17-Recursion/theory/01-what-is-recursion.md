# 01 — What is Recursion?

## 1. What is this?
**Recursion** is a programming technique where a function calls itself directly or indirectly to solve a problem by breaking it down into smaller sub-instances of the exact same problem.

## 2. Why does it exist?
Recursion provides elegant, readable solutions for problems that possess a naturally self-similar or nested structure (e.g. tree traversals, directory structures, mathematical sequences, divide-and-conquer algorithms).

## 3. Basic Syntax & Anatomy

Every valid recursive function MUST contain two essential parts:
1. **Base Case**: The termination condition that stops recursion and returns a direct value without making further recursive calls.
2. **Recursive Step**: The line where the function calls itself with a modified input that progresses *closer* towards the base case.

```javascript
function countDown(n) {
  // 1. BASE CASE (Termination Condition)
  if (n <= 0) {
    console.log("Blastoff!");
    return;
  }

  // Action
  console.log(n);

  // 2. RECURSIVE STEP (Calls itself with n - 1)
  countDown(n - 1);
}

countDown(3);
/* OUTPUT:
3
2
1
Blastoff!
*/
```

## 4. Code Execution Trace & Mental Model

```text
Invocation: countDown(3)
  ├── Prints 3
  └── Calls countDown(2)
        ├── Prints 2
        └── Calls countDown(1)
              ├── Prints 1
              └── Calls countDown(0)
                    └── Base Case reached! Prints "Blastoff!" and returns.
```

## 5. What Happens Without a Base Case? (Infinite Recursion)
If a recursive function omits a base case, or if the recursive step does not progress towards the base case, the function calls itself indefinitely until the JavaScript engine runs out of Call Stack memory:

```javascript
// BROKEN RECURSION (No Base Case!)
function infiniteLoop() {
  infiniteLoop();
}

// infiniteLoop(); // ❌ RangeError: Maximum call stack size exceeded
```

## 6. Common Pitfalls & Anti-Patterns
- Missing base case condition.
- Failing to decrement/increment parameters towards the base case (`countDown(n)` calls `countDown(n)` endlessly!).

## 7. Interview & Problem-Solving Perspective
- **Interview Question**: "What are the two mandatory components of every recursive algorithm?"
  - *Answer*: 1) A Base Case that terminates recursion, and 2) A Recursive Step that calls the function with inputs approaching the base case.

## 8. Practice Exercises & Self-Check
1. Write a recursive function `countUp(current, target)` that prints numbers from current to target.
2. What error occurs during infinite recursion?

## 9. Summary & Key Takeaways
- Recursion = Function calling itself to solve smaller sub-problems.
- Base Case stops recursion.
- Recursive Step progresses towards the base case.
