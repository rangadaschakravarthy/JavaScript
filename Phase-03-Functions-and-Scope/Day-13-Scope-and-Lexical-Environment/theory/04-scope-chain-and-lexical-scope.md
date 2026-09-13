# 04 — Scope Chain and Lexical Scope

## 1. What is this?
- **Lexical Scope**: Scope resolution is determined statically at **authoring time** based on where functions and blocks are physically written in code files.
- **Scope Chain**: The chain of parent lexical environments that JavaScript walks upward to resolve variable references.

## 2. Why does it exist?
The Scope Chain allows inner functions to access variables defined in outer parent functions or global scope, enabling data inheritance and closures.

## 3. Basic Syntax & Grammar Rules

```javascript
const globalVar = "A";

function outer() {
  const outerVar = "B";

  function inner() {
    const innerVar = "C";
    // Scope Chain Lookup: innerVar ("C") -> outerVar ("B") -> globalVar ("A")
    console.log(innerVar + outerVar + globalVar);
  }

  inner();
}

outer(); // Output: "CBA"
```

## 4. Lexical Scope vs Call-Site (Dynamic Scope Fallacy)

JavaScript uses **Lexical Scope** (Static Scope), NOT Dynamic Scope. Where a function is **invoked** (call site) does NOT affect its scope chain!

```javascript
const message = "Global Message";

function printMsg() {
  console.log(message); // Resolves to lexical parent (Global message)
}

function caller() {
  const message = "Local Message inside Caller";
  printMsg(); // Invoked here, but printMsg STILL prints "Global Message"!
}

caller(); // Output: "Global Message"
```

## 5. Scope Chain Lookup Diagram

```text
+-------------------------------------------------------------+
| Global Lexical Environment                                  |
|  - message = "Global Message"                               |
|                                                             |
|  +-------------------------------------------------------+  |
|  | caller() Lexical Env                                  |  |
|  |  - message = "Local Message"                          |  |
|  +-------------------------------------------------------+  |
|                                                             |
|  +-------------------------------------------------------+  |
|  | printMsg() Lexical Env                                |  |
|  |  - Outer Env Reference ──► Global Lexical Env        |  |
|  |  (Reads "Global Message", ignores caller() Env!)      |  |
|  +-------------------------------------------------------+  |
+-------------------------------------------------------------+
```

## 6. One-Way Directional Lookup Rule
Scope lookup **ONLY goes UP** the scope chain towards global scope. Outer parent scopes **CANNOT** reach down into inner nested child function scopes.

```javascript
function parent() {
  const parentData = 10;

  function child() {
    const childData = 20;
    console.log(parentData); // ✅ Allowed (looking UP)
  }

  child();
  // console.log(childData); // ❌ ReferenceError! Parent CANNOT look DOWN into child scope!
}
```

## 7. Common Pitfalls & Anti-Patterns
- Assuming a function can access variables declared inside the function that called it. Scope depends on where function is *defined*, not where it is *called*.

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "Explain Lexical Scope vs Dynamic Scope."
  - *Answer*: Lexical scope determines variable accessibility statically based on source code position during compilation. Dynamic scope (used in Bash, not JS) resolves scope based on runtime call stack sequence.

## 9. Practice Exercises & Self-Check
1. Trace scope resolution for a 3-level nested function hierarchy.
2. Prove that call site does not alter variable lookup for a standalone function.

## 10. Summary & Key Takeaways
- Scope Chain searches variables from current local scope -> outer lexical parent -> global scope.
- Lexical Scope is static (based on where code is written).
- Lookup goes UP only; outer scopes cannot access inner scope variables.
