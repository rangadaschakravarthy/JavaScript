# 04 — `let`, `const`, and the Temporal Dead Zone (TDZ)

## 1. What is this?
The **Temporal Dead Zone (TDZ)** is the time span between entering a scope block and the point where a `let` or `const` variable is declared and initialized. Accessing a `let` or `const` variable while it is in its TDZ throws a `ReferenceError: Cannot access 'variable' before initialization`.

## 2. Why does it exist?
TDZ was introduced in ES6 to prevent bugs where variables are accessed before assignment, catching errors during development rather than silently returning `undefined` as `var` did.

## 3. Basic Syntax & TDZ Boundary Demonstration

```javascript
{
  // === START OF BLOCK SCOPE ===
  // Variable `message` is in the TEMPORAL DEAD ZONE (TDZ) here!
  
  // console.log(message); // ❌ ReferenceError: Cannot access 'message' before initialization
  
  let message = "Hello TDZ!"; // === TDZ ENDS HERE (Initialization line) ===
  
  console.log(message); // ✅ Output: "Hello TDZ!"
}
```

## 4. Are `let` and `const` Hoisted?

**YES! `let` and `const` ARE hoisted!** However, unlike `var` (which hoists and initializes to `undefined`), `let` and `const` are hoisted as **Uninitialized**.

### Proof that `let` is hoisted:
```javascript
let x = "Global X";

function testTDZ() {
  // If `let x` were NOT hoisted, this log would read "Global X" from outer scope.
  // BUT because `let x` IS hoisted locally, it shadows outer `x` and stays in local TDZ!
  console.log(x); // ❌ ReferenceError: Cannot access 'x' before initialization!
  let x = "Local X";
}

testTDZ();
```

## 5. Visualizing the Temporal Dead Zone

```text
{ // Block Scope Entered
│
│  [TEMPORAL DEAD ZONE (TDZ)]
│  - Identifier `data` is registered in memory (Uninitialized).
│  - Any read/write attempt throws ReferenceError!
│
├──► let data = 100; // Initialization line! TDZ Ends!
│
│  [SAFE ZONE]
│  - `data` is initialized to 100.
│  - Reads/writes function normally.
}
```

## 6. `typeof` Guard Fallacy in TDZ
With `var`, `typeof unassignedVar` evaluates safely to `"undefined"`. However, in the TDZ, `typeof letVar` **throws a `ReferenceError`**!

```javascript
console.log(typeof undeclaredVar); // Output: "undefined" (Safe for non-existent variables)

// console.log(typeof tdzVar); // ❌ ReferenceError!
let tdzVar = 50;
```

## 7. Common Pitfalls & Anti-Patterns
- Placing helper functions or logs referencing `let`/`const` variables above their initialization line.

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "Are `let` and `const` variables hoisted in JavaScript?"
  - *Answer*: Yes, `let` and `const` are hoisted during the Creation Phase, but they remain uninitialized in the Temporal Dead Zone (TDZ) until their declaration statement is executed. Accessing them before initialization throws a `ReferenceError`.

## 9. Practice Exercises & Self-Check
1. Define the exact line boundaries of the TDZ in a given block snippet.
2. Explain why `typeof` is no longer 100% safe for TDZ variables.

## 10. Summary & Key Takeaways
- TDZ is the period between scope entry and variable initialization line.
- `let`/`const` ARE hoisted as Uninitialized.
- Accessing `let`/`const` in TDZ throws `ReferenceError`.
