# 02 — Lexical Environment Retention and Garbage Collection

## 1. What is this?
**Lexical Environment Retention** describes how JavaScript's Memory Manager handles variables referenced by closures. Rather than destroying local variables when a function returns, the engine retains the outer environment in **Heap Memory** as long as at least one active inner function reference exists.

## 2. Why does it exist?
JavaScript relies on **Mark-and-Sweep Garbage Collection**. An object or environment remains in memory if it is reachable from root references (e.g., global variables or active stack frames).

## 3. Memory Reachability Path

```text
[Global Window / globalThis]
         │
         ▼ (holds variable `myFn`)
[Inner Closure Function: `increment`]
         │
         ▼ (internal [[Environment]] slot)
[Outer Lexical Environment: { count: 1 }] <── REACHABLE! (Not Garbage Collected)
```

## 4. When DOES Garbage Collection Occur?
If you break the root reference to the closure function by reassigning or setting it to `null`, the inner function becomes unreachable. Consequently, the retained outer lexical environment is safely garbage collected!

```javascript
let counter = createCounter(); // Env retained in heap

console.log(counter()); // 1
console.log(counter()); // 2

counter = null; // Reference broken! Outer { count: 2 } environment is now Garbage Collected!
```

## 5. Selective Variable Retention Optimization in Modern Engines
Modern JavaScript engines (like V8) perform optimization: if an outer function declares 10 variables, but the returned closure function only references 1 variable, V8 will optimize and retain ONLY the referenced variable in the closure scope, freeing the unreferenced 9 variables!

```javascript
function outer() {
  const hugeData = new Array(1000000).fill("data"); // Unreferenced by inner()
  const targetId = 42; // Referenced by inner()

  return function inner() {
    return `ID: ${targetId}`; // V8 garbage collects `hugeData` while keeping `targetId`!
  };
}
```

## 6. Common Pitfalls & Anti-Patterns
- Accidental Memory Leaks: Storing closure callbacks in global arrays or event listeners indefinitely without clearing them when no longer needed.

## 7. Interview & Problem-Solving Perspective
- **Interview Question**: "How does garbage collection interact with closures?"
  - *Answer*: Variables in an outer scope are retained in Heap memory as long as an active closure maintains a reference to them. Once all references to the closure function are removed (e.g., set to `null`), the retained environment is garbage collected.

## 8. Practice Exercises & Self-Check
1. Write a script demonstrating how setting a closure reference to `null` enables garbage collection.
2. Explain V8's selective variable retention optimization.

## 9. Summary & Key Takeaways
- Closures keep outer environments reachable in Heap memory.
- Setting closure function references to `null` allows garbage collection.
- V8 optimizes closure memory by retaining only variables referenced by inner functions.
