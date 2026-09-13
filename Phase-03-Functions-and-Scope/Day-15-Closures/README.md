# Day 15 — Closures

## 📌 Module Overview
Day 15 explores one of JavaScript's most powerful and essential language features: **Closures**. A closure is formed whenever an inner function retains access to variables declared in its outer lexical scope even after that outer parent function has completed execution and returned.

---

## 🎯 Learning Objectives
- Define a closure precisely (Function + Retained Lexical Environment).
- Explain how inner functions maintain access to parent heap memory after parent execution context pops off call stack.
- Implement stateful closure counters and custom function factories.
- Use closures to enforce **data privacy and encapsulation** (emulating private variables).
- Fix classic loop closure bugs (`var` in `for` loops vs `let` block scoping).
- Understand closure memory retention and garbage collection considerations.

---

## 📂 Module Structure
- `theory/`: 01 through 05 comprehensive theoretical guides.
- `examples/`: Executable Node.js scripts for counters, factories, privacy, and loop traps.
- `exercises/`: Stateful counter, multiplier factory, and private module exercises.
- `output-questions/`: Closure trace predictions.
- `debugging/`: Fix shared closure bugs and variable leaks.
- `interview/`: Conceptual and output-based interview preparation.
- `mini-project/`: **Closure Utility Factory** web/CLI app.
- `solutions/`: Answer keys.
