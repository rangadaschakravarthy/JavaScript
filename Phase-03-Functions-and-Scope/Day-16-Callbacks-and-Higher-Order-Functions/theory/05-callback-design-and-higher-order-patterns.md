# 05 — Callback Design and Higher-Order Patterns

## 1. What is this?
**Callback Design Patterns** establish consistent conventions for passing, invoking, and managing callbacks in software applications.

## 2. Why does it exist?
Without standardized callback patterns, handling error scenarios, argument ordering, and execution flow leads to unmaintainable code (including the infamous "Callback Hell").

## 3. Node.js Error-First Callback Pattern Convention

In standard JavaScript/Node.js callback conventions, the **first argument** passed to a callback is reserved for an **error object** (or `null` if no error occurred). Data results are passed as subsequent arguments.

```javascript
function readFileSimulation(filename, callback) {
  if (!filename) {
    // Error case: Pass error as FIRST argument!
    return callback(new Error("Filename is required"), null);
  }

  // Success case: Pass null for error, result as second argument!
  const content = `Contents of file ${filename}`;
  callback(null, content);
}

readFileSimulation("config.json", (err, data) => {
  if (err) {
    console.error("Error reading file:", err.message);
    return;
  }
  console.log("File Data:", data);
});
```

## 4. Higher-Order Pattern: Function Composition Pipe Utility

```javascript
function pipe(...fns) {
  return function(initialValue) {
    return fns.reduce((acc, fn) => fn(acc), initialValue);
  };
}

const add2 = x => x + 2;
const mult3 = x => x * 3;
const square = x => x * x;

const processPipe = pipe(add2, mult3, square);
console.log(processPipe(2)); // ((2 + 2) * 3)^2 = 144
```

## 5. Callback Hell (Pyramid of Doom Preview)

When asynchronous operations are nested deeply inside callbacks of callbacks, code forms a unreadable triangle called **Callback Hell**:

```javascript
// ANTIPATTERN PREVIEW: Callback Hell (Pyramid of Doom)
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      console.log("Final:", c);
    });
  });
});
```

*(Note: Phase 10 will explore modern ES6 Promises and Async/Await to flatten callback hell).*

## 6. Common Pitfalls & Anti-Patterns
- Forgetting `return` when handling error callbacks, causing both error code AND success code to run!

```javascript
// BAD: Missing return causes execution to continue!
function badCallbackHandler(err, data) {
  if (err) {
    callback(err); // Missing return! Execution continues down to success line!
  }
  callback(null, data);
}
```

## 7. Interview & Problem-Solving Perspective
- **Interview Question**: "What is the Error-First Callback convention in Node.js?"
  - *Answer*: It is a pattern where the first argument of a callback is reserved for an Error object (or `null` on success), and the second argument holds the successful payload result.

## 8. Practice Exercises & Self-Check
1. Write a function `divideAsync(a, b, callback)` following error-first callback conventions (`b === 0` returns error).
2. Implement a 3-function pipeline using `pipe`.

## 9. Summary & Key Takeaways
- Error-First Callbacks: `callback(err, data)`.
- Always `return` when handling error callbacks.
- `pipe(...fns)` chains higher-order functions left-to-right.
