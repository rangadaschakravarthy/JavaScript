# 03 — Function Composition and Pipelines

## 1. What is this?
**Function Composition** is the process of combining two or more functions to produce a new function or perform a multi-stage computation where the output of one function becomes the input of the next function.

## 2. Why does it exist?
Composition breaks complex business logic down into small, linear, readable data processing pipelines:
`Input Data -> Stage 1 (Clean) -> Stage 2 (Transform) -> Stage 3 (Format) -> Output`.

## 3. Mathematical & Logical Formula
In mathematics: $f(g(x))$ — function $g$ executes first on $x$, and its result is passed to $f$.

```javascript
const addTen = x => x + 10;
const double = x => x * 2;

// Manual Function Composition (Right-to-Left: double first, then addTen)
const result = addTen(double(5)); // (5 * 2) + 10 = 20
```

## 4. Pipeline Thinking: Step-by-Step Data Transformation
```javascript
// Raw Input
const rawInput = "   USER_ALICE@EXAMPLE.COM   ";

// Stage 1: Clean/Trim
function trimString(str) {
  return str.trim();
}

// Stage 2: Normalize Case
function toLowerCaseString(str) {
  return str.toLowerCase();
}

// Stage 3: Mask Username Privacy
function maskEmail(email) {
  const [user, domain] = email.split('@');
  return `${user[0]}***@${domain}`;
}

// Executing Pipeline
const step1 = trimString(rawInput);
const step2 = toLowerCaseString(step1);
const finalOutput = maskEmail(step2);

console.log(finalOutput); // "u***@example.com"
```

## 5. Code Execution Trace & Pipeline Flow

```text
Raw Input: "   USER_ALICE@EXAMPLE.COM   "
    │
    ▼
[trimString] ─────────────► "USER_ALICE@EXAMPLE.COM"
    │
    ▼
[toLowerCaseString] ──────► "user_alice@example.com"
    │
    ▼
[maskEmail] ──────────────► "u***@example.com"
```

## 6. Composition Utility Pattern
```javascript
// Compose function combining two functions
function compose(fn1, fn2) {
  return function(value) {
    return fn1(fn2(value));
  };
}

const processNumber = compose(addTen, double);
console.log(processNumber(5)); // 20
```

## 7. Common Pitfalls & Anti-Patterns
- **Type Mismatch in Pipelines**: Stage 1 returns a string, but Stage 2 expects a number, throwing a runtime `TypeError`. Each stage must agree on input/output types.

## 8. Edge Cases & Modern JavaScript Gotchas
- Pipe vs Compose order:
  - **Compose**: Right-to-left execution ($f(g(x))$).
  - **Pipe**: Left-to-right execution ($g(f(x))$). Left-to-right pipelines are generally more intuitive to read.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "What is function composition and what problem does it solve?"
  - *Answer*: Function composition combines small single-purpose functions into a pipeline. It promotes code reusability, testability, and readability by isolating transformation steps.

## 10. Practice Exercises & Self-Check
1. Write 3 pipeline functions: `addFive(n)`, `triple(n)`, `formatDollar(n)`. Chain them to process input `5`.
2. Trace the step-by-step output of `addFive(triple(5))`.

## 11. Summary & Key Takeaways
- Function composition passes the return value of one function as the argument to another.
- Pipelines transform raw data through sequential processing steps.
- Stage inputs and outputs must have compatible data types.
