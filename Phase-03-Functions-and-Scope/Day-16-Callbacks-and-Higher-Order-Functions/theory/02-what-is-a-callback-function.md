# 02 — What is a Callback Function?

## 1. What is this?
A **Callback Function** is a function passed as an argument to another function, intended to be invoked ("called back") by the outer function at an appropriate execution point.

## 2. Why does it exist?
Callbacks allow a function to customize its internal behavior by delegating specific execution steps to an externally supplied function argument.

## 3. Basic Syntax & Pattern

```javascript
// Outer Function accepting a callback parameter `onSuccess`
function processUserRegistration(username, onSuccess) {
  console.log(`Registering user: ${username}...`);
  const userId = 101;

  // Invoking callback argument
  if (typeof onSuccess === 'function') {
    onSuccess(userId, username);
  }
}

// Defining Callback Function
function sendWelcomeEmail(id, name) {
  console.log(`Email sent to ${name} (ID: ${id})`);
}

// Passing callback function as argument
processUserRegistration("Alice", sendWelcomeEmail);
```

## 4. Anonymous Arrow Callbacks
Callbacks are frequently passed directly as inline anonymous functions or arrow functions:

```javascript
processUserRegistration("Bob", (id, name) => {
  console.log(`[Inline Callback] Account active for ${name} #${id}`);
});
```

## 5. Code Execution Trace & Mental Model

```text
1. `processUserRegistration("Alice", sendWelcomeEmail)`
   └── Caller passes `sendWelcomeEmail` function pointer as parameter `onSuccess`.

2. Inside `processUserRegistration()`:
   ├── Performs registration steps.
   └── Evaluates `onSuccess(101, "Alice")`.

3. Control jumps into `sendWelcomeEmail(101, "Alice")`.
4. `sendWelcomeEmail` executes and returns.
5. `processUserRegistration` finishes.
```

## 6. Common Pitfalls & Anti-Patterns
- **Not Validating Callback Type**: Calling `onSuccess()` without checking `typeof onSuccess === 'function'` throws a `TypeError: onSuccess is not a function` if caller omits the argument.

```javascript
// SAFE CALLBACK PATTERN:
function safeRunner(callback) {
  if (typeof callback === 'function') {
    callback();
  }
}
```

## 7. Edge Cases & Modern JavaScript Gotchas
- Callbacks preserve lexical scope from where they were defined, NOT where they are executed!

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "What is a callback function and how does it work?"
  - *Answer*: A callback is a function passed as an argument into another function. The outer function invokes the callback parameter at a designated point during its execution flow.

## 9. Practice Exercises & Self-Check
1. Write `calculator(a, b, operationCallback)` where `operationCallback` calculates the output.
2. Add a `typeof` check to guard callback invocation.

## 10. Summary & Key Takeaways
- Callback = Function passed as an argument to another function.
- Outer function invokes callback with relevant data arguments.
- Always check `typeof callback === 'function'` before invoking.
