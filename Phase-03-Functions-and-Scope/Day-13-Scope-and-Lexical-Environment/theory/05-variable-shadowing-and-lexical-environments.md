# 05 — Variable Shadowing and Lexical Environments

## 1. What is this?
- **Variable Shadowing**: Occurs when a variable declared in an inner scope has the exact same identifier name as a variable declared in an outer parent scope. The inner declaration "shadows" (hides) the outer variable within that inner scope boundary.
- **Lexical Environment**: The internal engine specification object that stores variable/function bindings and a reference to the outer environment.

## 2. Why does it exist?
Shadowing allows inner functions or blocks to declare local variables with convenient names without mutating or accidentally clobbering outer parent scope variables of the same name.

## 3. Basic Syntax & Grammar Rules

```javascript
const user = "Global User"; // Outer variable

function testShadowing() {
  const user = "Local User"; // SHADOWS global `user` inside this function!
  console.log("Inside function:", user); // Output: "Local User"
}

testShadowing();
console.log("Outside function:", user); // Output: "Global User" (Unchanged!)
```

## 4. Shadowing Across Block Scope Boundaries

```javascript
let count = 100;

if (true) {
  let count = 5; // Shadows outer count ONLY inside this if block!
  console.log("Inside block count:", count); // 5
}

console.log("Outside block count:", count); // 100
```

## 5. Illegal Shadowing Trap (`var` vs `let`)
You **cannot** shadow a `let` or `const` variable in an inner block scope using `var` if both exist in the same function scope boundary!

```javascript
let x = 10;

if (true) {
  // var x = 20; // SyntaxError: Identifier 'x' has already been declared!
  // (Because var tries to hoist to function/global scope, colliding with let x!)
}
```

However, shadowing a `var` with `let` in an inner block is valid:
```javascript
var y = 10;

if (true) {
  let y = 20; // ✅ Allowed! Block-scoped let shadows outer var inside block.
}
```

## 6. Internal Anatomy of a Lexical Environment

Every execution context has an associated **Lexical Environment** consisting of:
1. **Environment Record**: An actual dictionary storing variable and function declarations (`{ x: 10, y: 20 }`).
2. **Outer Environment Reference**: A pointer referencing the parent Lexical Environment (null for Global Environment).

```text
[Inner Function Lexical Environment]
├── Environment Record: { innerVar: "C" }
└── Outer Env Reference ──► [Outer Function Lexical Environment]
                                ├── Environment Record: { outerVar: "B" }
                                └── Outer Env Reference ──► [Global Environment]
```

## 7. Common Pitfalls & Anti-Patterns
- Accidental shadowing causing developer confusion when inner code meant to read outer variable values.

## 8. Interview & Problem-Solving Perspective
- **Interview Question**: "What is variable shadowing and what constitutes illegal shadowing in JavaScript?"
  - *Answer*: Shadowing occurs when an inner scope declares a variable with the same identifier as an outer scope. Illegal shadowing occurs when attempting to re-declare a block-scoped `let`/`const` with `var` across the same function boundary.

## 9. Practice Exercises & Self-Check
1. Write 3 nested blocks with shadowed variable `x` printing at each layer.
2. Explain why `var` cannot shadow `let` inside the same function scope.

## 10. Summary & Key Takeaways
- Inner variables with matching names shadow outer variables within their block/function scope.
- Lexical Environments consist of an Environment Record + Outer Reference pointer.
- `var` shadowing `let` inside block scope causes `SyntaxError`.
