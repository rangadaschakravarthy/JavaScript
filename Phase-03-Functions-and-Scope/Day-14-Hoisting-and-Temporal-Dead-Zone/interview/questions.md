# Day 14 Interview Questions — Hoisting and TDZ

## 1. What is the Temporal Dead Zone (TDZ) in JavaScript?
- The TDZ is the period between scope entry and variable initialization for `let` and `const`.
- Reading or writing a variable in its TDZ throws a `ReferenceError`.

## 2. Why does calling a `var` function expression before definition throw `TypeError`, whereas calling an arrow `const` function expression throws `ReferenceError`?
- `var` is hoisted and initialized to `undefined`. Calling `undefined()` attempts to execute a non-function primitive, throwing `TypeError`.
- `const` is hoisted as uninitialized in TDZ. Accessing the identifier throws `ReferenceError`.

## 3. How does the V8 engine process declarations during the Creation Phase vs Execution Phase?
- Creation Phase: Memory is allocated in Environment Record. Function declarations store full body; `var` stores `undefined`; `let`/`const` store uninitialized state.
- Execution Phase: Code runs line-by-line, executing assignments and expressions.
