# 03 — `var` vs `let` vs `const` Scoping Rules

## 1. What is this?
JavaScript provides three variable declaration keywords (`var`, `let`, `const`), each possessing different rules for scoping, re-declaration, re-assignment, and hoisting initialization.

## 2. Why does it exist?
`var` was part of original JavaScript (1995) and suffered from non-intuitive scoping bugs (hoisting to `undefined`, lack of block scope). ES6 introduced `let` and `const` to provide strict, predictable variable binding rules.

## 3. Comparison Matrix

| Property | `var` | `let` | `const` |
|----------|-------|-------|---------|
| **Scope Type** | Function Scope | Block Scope | Block Scope |
| **Hoisting Behavior** | Hoisted + initialized as `undefined` | Hoisted + uninitialized (TDZ) | Hoisted + uninitialized (TDZ) |
| **Re-declaration in Same Scope?** | ✅ Allowed (Dangerous!) | ❌ SyntaxError | ❌ SyntaxError |
| **Re-assignment Allowed?** | ✅ Yes | ✅ Yes | ❌ TypeError |
| **Must Initialize on Declaration?** | ❌ No | ❌ No | ✅ **Yes!** (`const x;` fails) |

## 4. Code Examples

```javascript
// 1. Re-declaration Behavior
var x = 10;
var x = 20; // Allowed with var! Overwrites silently.

let y = 10;
// let y = 20; // SyntaxError: Identifier 'y' has already been declared

// 2. Re-assignment Behavior
const z = 30;
// z = 40; // TypeError: Assignment to constant variable.

// 3. Const Object Mutation vs Re-assignment
const user = { name: "Alice" };
user.name = "Bob"; // ALLOWED! (Mutating property of object reference)
// user = { name: "Charlie" }; // TypeError! (Re-assigning object reference)
```

## 5. Decision Flowchart: Which Keyword to Use?

```text
Do you need to re-assign the variable reference later?
        │
       ├──► NO  ──► Use `const` (Default choice for 90%+ of variables!)
       │
       └──► YES ──► Use `let`
       
(NEVER use `var` in modern JavaScript development!)
```

## 6. Common Pitfalls & Anti-Patterns
- Using `var` out of habit.
- Assuming `const` makes objects or arrays immutable (it only makes the variable reference binding immutable!).

## 7. Edge Cases & Modern JavaScript Gotchas
- `const` requires an immediate initializer during declaration (`const a = 5;`). Writing `const a;` throws `SyntaxError: Missing initializer in const declaration`.

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "Does `const` mean immutable in JavaScript?"
  - *Answer*: No. `const` creates an immutable binding (cannot reassign the variable identifier to a new value). If the value is an object or array, its internal properties can still be mutated.

## 9. Practice Exercises & Self-Check
1. Write code showing re-declaration failure with `let`.
2. Demonstrate how a `const` array can have items pushed into it.

## 10. Summary & Key Takeaways
- `var` = Function scoped, re-declarable, hoisted as `undefined`.
- `let` = Block scoped, re-assignable, TDZ protected.
- `const` = Block scoped, immutable reference binding, TDZ protected.
- Default to `const`; use `let` when re-assignment is explicitly needed.
