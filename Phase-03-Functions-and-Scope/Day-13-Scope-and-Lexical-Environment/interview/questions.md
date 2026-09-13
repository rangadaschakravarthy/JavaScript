# Day 13 Interview Questions — Scope and Lexical Environment

## 1. How does the JavaScript engine resolve a variable reference through the Scope Chain?
- The engine checks the current local Lexical Environment Record.
- If not found, it follows the `Outer Environment Reference` pointer to the parent lexical environment.
- It repeats this upward search until it reaches the Global Environment. If still not found, it throws a `ReferenceError`.

## 2. Why does `var` ignore block scope boundaries while `let`/`const` respect them?
- `var` is function-scoped (or globally scoped if outside functions). When created inside a block, its declaration is hoisted to the enclosing function or global scope environment record.
- `let` and `const` are block-scoped; the engine creates a new block-level Lexical Environment whenever a `{}` block is entered.

## 3. What is Lexical Scope and how does it differ from Dynamic Scope?
- Lexical Scope determines variable scope statically based on where code is physically written in source files during compilation.
- Dynamic Scope determines scope based on the runtime Call Stack sequence of function invocations. JavaScript strictly uses Lexical Scope.
