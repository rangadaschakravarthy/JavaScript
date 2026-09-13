# 05 — Loop Closures: `var` vs `let` and Memory Management

## 1. What is this?
The **Loop Closure Trap** is a classic JavaScript bug that occurs when asynchronous callbacks or inner functions are created inside a loop using `var`. Because `var` is function-scoped, all loop iterations share a single variable instance, causing all callbacks to read the final mutated loop counter!

## 2. Demonstrating the Classic `var` Loop Trap

```javascript
// BROKEN CODE using `var`:
function createCallbacksVar() {
  var callbacks = [];

  for (var i = 0; i < 3; i++) {
    callbacks.push(function() {
      console.log("Index:", i);
    });
  }

  return callbacks;
}

const funcsVar = createCallbacksVar();
funcsVar[0](); // Output: Index: 3 (EXPECTED 0!)
funcsVar[1](); // Output: Index: 3 (EXPECTED 1!)
funcsVar[2](); // Output: Index: 3 (EXPECTED 2!)
```

### Why Did This Happen?
1. `var i` is function-scoped to `createCallbacksVar()`. There is **only ONE `i` variable in memory**!
2. The loop runs to completion: `i` becomes `3`.
3. All 3 callback functions close over the **same single reference to `i`**!
4. When executed later, all callbacks look up `i` and read `3`.

## 3. Fixing the Loop Trap: Solution 1 — Using ES6 `let`

ES6 `let` is **block-scoped**. The JavaScript engine creates a **new, distinct binding of `i` for every iteration of the loop**!

```javascript
// FIXED CODE using `let`:
function createCallbacksLet() {
  const callbacks = [];

  for (let i = 0; i < 3; i++) { // `let i` creates a NEW variable per iteration!
    callbacks.push(function() {
      console.log("Index:", i);
    });
  }

  return callbacks;
}

const funcsLet = createCallbacksLet();
funcsLet[0](); // Output: Index: 0 (CORRECT!)
funcsLet[1](); // Output: Index: 1 (CORRECT!)
funcsLet[2](); // Output: Index: 2 (CORRECT!)
```

## 4. Fixing the Loop Trap: Solution 2 — Historical IIFE Pattern

Before ES6 `let` existed, developers solved this bug using an IIFE to create a new function scope per iteration:

```javascript
function createCallbacksIIFE() {
  var callbacks = [];

  for (var i = 0; i < 3; i++) {
    (function(capturedI) { // IIFE creates new function scope per step
      callbacks.push(function() {
        console.log("Index:", capturedI);
      });
    })(i); // Pass current i as argument
  }

  return callbacks;
}
```

## 5. Memory Management & Closure Memory Leaks
Closures hold references to outer variables. In long-running applications, holding unnecessary closure references can prevent garbage collection of large data structures.

### Preventing Closure Memory Leaks:
1. Nullify references when done: `myClosure = null;`.
2. Avoid referencing large unused outer objects inside inner closures.

## 6. Interview & Problem-Solving Perspective
- **Interview Question**: "Why does a `for` loop with `var` and `setTimeout` print `3 3 3` instead of `0 1 2`?"
  - *Answer*: `var` is function-scoped, so all iterations share a single `var i` reference. By the time `setTimeout` callbacks run, the loop has completed and `i` is `3`. Using block-scoped `let` creates a distinct variable per iteration.

## 7. Practice Exercises & Self-Check
1. Write a `for` loop with `setTimeout` using `var` and observe output `3 3 3`.
2. Fix it using `let i` and verify output `0 1 2`.

## 8. Summary & Key Takeaways
- `var` in loops creates a single shared variable across all iterations.
- ES6 `let` creates a new block-scoped variable binding per loop iteration.
- Nullifying closure references frees retained heap memory.
