# Day 16 Interview Questions — Callbacks and Higher-Order Functions

## 1. What is a Higher-Order Function (HOF) and why are they fundamental in JavaScript?
- An HOF is a function that accepts another function as an argument, returns a function, or both.
- They enable declarative programming, functional composition, custom array processing, and callback-based event handling.

## 2. Explain the Error-First Callback convention.
- In Node.js/JavaScript, asynchronous callbacks reserve their first parameter for an `Error` object (or `null` if successful). Successful data payloads are passed in subsequent parameters: `callback(err, result)`.

## 3. What is the difference between a synchronous callback and an asynchronous callback?
- Synchronous callbacks execute immediately in-line within the caller function's execution flow.
- Asynchronous callbacks are delegated to browser/Node APIs and execute later via the Event Loop task queue after the current Call Stack clears.
