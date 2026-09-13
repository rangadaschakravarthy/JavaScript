# Day 14 — Hoisting and Temporal Dead Zone (TDZ)

## 📌 Module Overview
Day 14 unravels one of JavaScript's most tested execution mechanics: **Hoisting** and the **Temporal Dead Zone (TDZ)**. You will learn how the JavaScript engine parses code in two phases (Creation vs Execution), why function declarations are hoisted completely, why `var` initialises to `undefined`, and why accessing `let`/`const` before initialization throws a `ReferenceError`.

---

## 🎯 Learning Objectives
- Demystify the compilation/creation phase vs execution phase in V8.
- Explain **Function Declaration Hoisting** (why functions can be called before their definition).
- Explain **`var` Hoisting** (why `var` reads `undefined` before assignment).
- Define the **Temporal Dead Zone (TDZ)** (the window from block start to variable initialization).
- Predict hoisting behavior for function expressions and arrow functions assigned to `let`/`const`.
- Avoid TDZ `ReferenceError` crashes in production code.

---

## 📂 Module Structure
- `theory/`: 01 through 05 comprehensive theoretical guides.
- `examples/`: Executable Node.js scripts demonstrating hoisting and TDZ errors.
- `exercises/`: Hoisting output predictions and TDZ boundary detection.
- `output-questions/`: Code execution predictions.
- `debugging/`: Fix hoisting traps and TDZ bugs.
- `interview/`: Conceptual and output-based interview preparation.
- `mini-project/`: **Hoisting Detective** web/CLI app.
- `solutions/`: Answer keys.
