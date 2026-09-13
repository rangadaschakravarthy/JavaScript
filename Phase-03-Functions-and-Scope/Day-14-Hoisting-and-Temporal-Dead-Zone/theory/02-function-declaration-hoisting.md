# 02 — Function Declaration Hoisting

## 1. What is this?
**Function Declaration Hoisting** allows function declarations to be invoked anywhere within their containing scope, even before their physical declaration line in source files.

## 2. Why does it exist?
Function declaration hoisting permits flexible code organization e.g. placing high-level domain workflows at the top of a file and burying low-level utility function declarations at the bottom.

## 3. Basic Syntax & Example

```javascript
// Calling function BEFORE its declaration line!
greet("Alice"); // Output: "Hello, Alice!"

function greet(name) {
  console.log(`Hello, ${name}!`);
}
```

## 4. Function Declaration vs Variable Hoisting Collision

When a function declaration and a `var` variable share the exact same identifier name in the same scope, the **Function Declaration Hoisting takes precedence** during the Creation Phase!

```javascript
console.log(typeof myItem); // Output: "function" (Function takes priority!)

var myItem = "I am a string";

function myItem() {
  return "I am a function";
}

console.log(typeof myItem); // Output: "string" (Overwritten during Execution Phase!)
```

### Trace:
1. **Creation Phase**:
   - `var myItem` registered as `undefined`.
   - `function myItem` encountered -> Overwrites `myItem` binding with full function definition!
2. **Execution Phase**:
   - Line 1: `console.log(typeof myItem)` -> "function".
   - Line 3: `myItem = "I am a string"` -> Overwrites `myItem` with string.
   - Line 9: `console.log(typeof myItem)` -> "string".

## 5. Function Declarations Inside Blocks (ES6 Web Compatibility)
In ES6 strict mode (`'use strict';`), function declarations placed inside block `{}` boundaries are **block-scoped** to that `{}` block!

```javascript
'use strict';

if (true) {
  function blockScopedFunc() {
    return "Inside block";
  }
  console.log(blockScopedFunc()); // "Inside block"
}

// console.log(blockScopedFunc()); // ReferenceError in strict mode!
```

## 6. Common Pitfalls & Anti-Patterns
- Declaring functions inside `if` statements with different implementations (be-aware of cross-browser strict mode differences).

## 7. Interview & Problem-Solving Perspective
- **Interview Question**: "Why are function declarations hoisted with their full body, while `var` variables are hoisted as `undefined`?"
  - *Answer*: During the Creation Phase, the engine allocates and binds the entire function body object to the function identifier in the Environment Record. `var` identifiers are allocated with initial primitive `undefined`.

## 8. Practice Exercises & Self-Check
1. Write a script calling 3 functions before their declaration lines.
2. Predict output when a `var` assignment occurs after a function declaration.

## 9. Summary & Key Takeaways
- Function declarations are hoisted completely with their full body.
- Function declarations can be called before their definition line.
- Function declarations take precedence over `var` during creation phase hoisting.
