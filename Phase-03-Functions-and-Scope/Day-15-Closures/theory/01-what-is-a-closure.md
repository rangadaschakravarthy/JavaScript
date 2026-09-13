# 01 — What is a Closure?

## 1. What is this?
A **closure** is a function that remembers and retains access to its outer lexical environment variables even when the function is executed outside that outer lexical scope.

```text
Closure Formula:
Inner Function Reference + Retained Outer Lexical Environment = Closure
```

## 2. Why does it exist?
Without closures, functions would lose access to all outer variables as soon as outer functions finish executing and return. Closures allow functions to maintain state, encapsulate private variables, and implement stateful factory patterns.

## 3. Basic Syntax & Classic Counter Example

```javascript
function createCounter() {
  let count = 0; // Local variable in createCounter scope

  return function increment() {
    count++; // Accesses outer `count` variable!
    return count;
  };
}

const counter = createCounter(); // createCounter() returns increment function and finishes!

console.log(counter()); // Output: 1 (count retained in closure!)
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

## 4. Code Execution Trace & Call Stack vs Heap Memory

```text
1. Call `createCounter()`
   - Call Stack: [Global] -> [createCounter]
   - Lexical Environment created in Heap: { count: 0 }
   - `increment` function created with internal [[Environment]] reference to { count: 0 }.
   - `createCounter` returns `increment` and pops off Call Stack.

2. `createCounter` Execution Context is gone from Call Stack.
   BUT its Lexical Environment { count: 0 } is NOT Garbage Collected because `counter` holds a reference to `increment`, which references { count: 0 }!

3. Call `counter()`
   - Invokes `increment()`
   - Lookups `count` in retained Heap Lexical Environment.
   - Mutates `count` to 1 and returns 1.
```

## 5. Multiple Closure Instances are Independent!
Every call to an outer factory function creates a brand new, isolated lexical environment in memory!

```javascript
const counterA = createCounter(); // Heap Env A: { count: 0 }
const counterB = createCounter(); // Heap Env B: { count: 0 }

console.log(counterA()); // 1 (Env A count = 1)
console.log(counterA()); // 2 (Env A count = 2)

console.log(counterB()); // 1 (Env B count = 1 - Totally Independent!)
```

## 6. Common Pitfalls & Anti-Patterns
- Believing closures only occur when returning functions. A closure is formed whenever an inner function reads outer scope variables, including callbacks passed to `setTimeout` or event listeners!

## 7. Edge Cases & Modern JavaScript Gotchas
- Retaining large objects in closure environments can prevent garbage collection if the inner function remains referenced globally.

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "Explain what a closure is in JavaScript in simple terms."
  - *Answer*: A closure is formed when an inner function retains access to variables in its outer parent lexical environment, even after that parent function has returned and exited the call stack.

## 9. Practice Exercises & Self-Check
1. Write a `createAdder(x)` function returning `function(y) { return x + y; }`.
2. Verify that two instances of `createAdder` hold independent `x` values.

## 10. Summary & Key Takeaways
- Closure = Function + Retained Lexical Scope Environment.
- Retained variables live in Heap memory after parent function finishes.
- Multiple closure instances maintain independent state environments.
