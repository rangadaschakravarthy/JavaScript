# 03 — Arrow Functions Syntax and Gotchas

## 1. What is this?
Introduced in ES6, **Arrow Functions** (`() => {}`) provide a concise syntax for writing function expressions.

## 2. Why does it exist?
Arrow functions reduce boilerplate code for simple expressions and callbacks, support implicit return values, and lexically bind `this` (which will be explored in depth in Phase 12).

## 3. Basic Syntax & Shorthand Variations

```javascript
// 1. Standard Multi-parameter Block Body
const add = (a, b) => {
  return a + b;
};

// 2. Expression Body with Implicit Return (No braces, no 'return' keyword needed!)
const multiply = (a, b) => a * b;

// 3. Single Parameter Shorthand (Parentheses around single param can be omitted)
const square = x => x * x;

// 4. No Parameter Shorthand (Empty parentheses required)
const sayHi = () => "Hello World";
```

## 4. Returning Object Literals Gotcha! ⚠️

When using implicit return to return an **object literal**, curly braces `{}` are interpreted as a **function block body**, NOT an object! To return an object implicitly, wrap the object literal in **parentheses** `()`.

```javascript
// BAD: JS treats {} as function block! Returns undefined!
const makeUserBad = (name) => { name: name };
console.log(makeUserBad("Alex")); // Output: undefined

// GOOD: Wrap object in parentheses () for implicit return
const makeUserGood = (name) => ({ name: name });
console.log(makeUserGood("Alex")); // Output: { name: 'Alex' }
```

## 5. Code Execution Trace & Mental Model

```text
Arrow Function Syntax Decision Tree:
   Single Parameter? ──► YES ──► Omit () optional (x => ...)
         │
        NO
         ▼
   Include () required ((a, b) => ...)
   
   Single Expression Return? ──► YES ──► Omit {} & return (x => x * 2)
         │
        NO
         ▼
   Include {} & explicit return (x => { const res = x * 2; return res; })
```

## 6. Key Limitations of Arrow Functions
1. **No `arguments` Object**: Arrow functions do NOT possess their own `arguments` binding. Use rest parameters (`...args`) instead.
2. **Cannot be used as Constructors**: Calling an arrow function with `new` throws a `TypeError`.
3. **Lexical `this`**: Arrow functions inherit `this` from surrounding scope (detailed in Phase 12).

## 7. Common Pitfalls & Anti-Patterns
- Forgetting parentheses when returning an object literal.
- Attempting to access `arguments` inside an arrow function.

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "What is the difference between explicit return and implicit return in arrow functions?"
  - *Answer*: Block bodies `{}` require an explicit `return` keyword. Expression bodies (without `{}`) implicitly return the evaluated expression.

## 9. Practice Exercises & Self-Check
1. Convert `function double(x) { return x * 2; }` into a single-line arrow function.
2. Fix `const getCoord = (x, y) => { x: x, y: y };`.

## 10. Summary & Key Takeaways
- Arrow functions use `() => {}` syntax.
- Expression bodies implicitly return without `return` or `{}`.
- Returning object literals requires wrapping in `({ key: val })`.
- Arrow functions lack their own `arguments` object.
