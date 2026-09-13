# 03 — `var` Hoisting and `undefined`

## 1. What is this?
When a variable is declared with `var`, the JavaScript engine registers the identifier in memory during the Creation Phase and initializes its value to `undefined`. Accessing a `var` variable before its assignment line evaluates to `undefined` rather than throwing a `ReferenceError`.

## 2. Why does it exist?
This was the legacy memory initialization behavior in original JavaScript.

## 3. Basic Syntax & Example

```javascript
console.log(greeting); // Output: undefined (No ReferenceError!)

var greeting = "Hello World";

console.log(greeting); // Output: "Hello World"
```

## 4. Code Execution Trace & Mental Model

```text
Source Code:
  console.log(greeting);
  var greeting = "Hello World";

Engine Parsing (Mental Model Representation):
  var greeting;          // Hoisted & initialized to `undefined` during Creation Phase
  console.log(greeting); // Prints `undefined`
  greeting = "Hello World"; // Assigned during Execution Phase
```

## 5. `var` Hoisting Inside Functions vs Global Scope

```javascript
var score = 100; // Global score

function updateScore() {
  console.log("Local score before assignment:", score); // Output: undefined (NOT 100!)
  var score = 200; // Local var score hoists to top of updateScore()!
  console.log("Local score after assignment:", score);  // Output: 200
}

updateScore();
```

### Trace:
- `var score = 200` inside `updateScore()` hoists to the top of `updateScore()`'s local function scope.
- It shadows the global `score = 100` from line 1 of the function!
- Therefore, `console.log(score)` inside `updateScore()` reads the local hoisted `score` which is `undefined` before assignment!

## 6. Common Pitfalls & Anti-Patterns
- Silent bugs caused by reading `undefined` instead of throwing an error when accessing variables before assignment.

## 7. Edge Cases & Modern JavaScript Gotchas
- Multi-`var` declarations: `var a = 1, b = 2;` hoists both `a` and `b` as `undefined`.

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "Why does `console.log(a)` print `undefined` instead of throwing a `ReferenceError` when `var a = 10;` appears later?"
  - *Answer*: Because `var` variables are registered and initialized to `undefined` during the Creation Phase. Accessing them before line assignment reads the `undefined` initial value.

## 9. Practice Exercises & Self-Check
1. Predict output of function with local `var` shadowing global variable.
2. Convert a `var` hoisting script to modern `let` and explain the difference.

## 10. Summary & Key Takeaways
- `var` hoists and initializes to `undefined` during Creation Phase.
- Reading `var` before line assignment yields `undefined`.
- `var` in local function scope shadows outer variables across the entire function body.
