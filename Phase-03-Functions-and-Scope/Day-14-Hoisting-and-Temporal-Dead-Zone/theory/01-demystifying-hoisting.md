# 01 — Demystifying Hoisting: Creation vs Execution Phase

## 1. What is this?
**Hoisting** is JavaScript's default behavior of allocating memory for variable and function declarations during the engine's compilation phase before any line of code is executed.

## 2. Why does it exist?
JavaScript processes code in two distinct phases:
1. **Creation (Parsing/Compilation) Phase**: The engine scans the source code, creates the Global/Function Execution Context, sets up Lexical Environments, and registers all variable and function identifiers in memory.
2. **Execution Phase**: The engine runs the code line-by-line, performing assignments and evaluating expressions.

## 3. The Popular Mental Model vs Engine Reality

> **Popular Mental Model (Simplified)**: "JavaScript physically moves variable and function declarations to the top of the file."
>
> **Engine Reality**: Code stays exactly where you typed it. However, because memory allocation happens during Phase 1 (Creation), identifiers are already registered in the Lexical Environment before Phase 2 (Execution) begins!

## 4. Phase-by-Phase Execution Walkthrough

```javascript
console.log(x); // Reads Phase 1 binding! (Output: undefined)
var x = 10;
console.log(x); // Output: 10
```

### Phase 1: Creation Phase
- Engine scans file.
- Sees `var x`. Allocates memory slot in Environment Record for `x` and initializes it to `undefined`.

### Phase 2: Execution Phase
- Line 1: `console.log(x)` -> Looks up `x` in Environment Record. Finds `undefined`. Prints `undefined`.
- Line 2: `x = 10` -> Updates `x` binding in Environment Record to `10`.
- Line 3: `console.log(x)` -> Prints `10`.

## 5. Summary Matrix of Creation Phase Initializations

| Declaration Keyword / Type | Memory Allocated in Creation Phase? | Initialized Value in Creation Phase |
|----------------------------|-----------------------------------|------------------------------------|
| **Function Declaration** | ✅ Yes | Full Function Body Definition |
| **`var` Variable** | ✅ Yes | `undefined` |
| **`let` / `const` Variable** | ✅ Yes | **Uninitialized** (Stays in TDZ!) |

## 6. Common Pitfalls & Anti-Patterns
- Relying on hoisting to place function calls before their declarations, reducing file readability.

## 7. Edge Cases & Modern JavaScript Gotchas
- Functions take precedence over `var` during creation phase hoisting!

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "Does JavaScript physically rearrange source code during hoisting?"
  - *Answer*: No. Source code text is unaltered. Hoisting occurs because the engine allocates memory for declarations during the Creation Phase prior to the Execution Phase.

## 9. Practice Exercises & Self-Check
1. Explain the two execution phases of V8.
2. What value does `var` hold during the Creation Phase?

## 10. Summary & Key Takeaways
- Execution occurs in two phases: Creation Phase (Memory Allocation) -> Execution Phase (Line-by-line running).
- Declarations are registered in memory during Creation Phase.
- Function declarations hoist completely; `var` hoists as `undefined`; `let`/`const` hoist uninitialized (TDZ).
