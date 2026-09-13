# Day 12 — Return Values and Function Composition

## 📌 Module Overview
Day 12 teaches how functions interact and build upon each other. You will learn to store and reuse return values in expressions/conditions, chain nested function calls, design modular data pipelines, distinguish pure vs impure functions, and eliminate unintended side effects.

---

## 🎯 Learning Objectives
- Use returned values inside conditions (`if (isValid(x))`) and inline expressions.
- Chain functions together (`quadruple(n) => double(double(n))`).
- Understand function composition conceptually (`f(g(x))`).
- Master data processing pipelines (Raw Data -> Normalize -> Transform -> Validate -> Format).
- Define **Pure Functions**: Identical input -> Identical output, zero external state mutation.
- Identify and isolate **Side Effects** (mutating external variables, DOM mutations, console output).

---

## 📂 Module Structure
- `theory/`: 01 through 05 comprehensive theoretical guides.
- `examples/`: Executable Node.js scripts for composition, pipelines, and purity.
- `exercises/`: Easy, medium, and challenge pipeline problems.
- `output-questions/`: Return flow predictions.
- `debugging/`: Impure function refactoring challenges.
- `interview/`: Conceptual and output-based interview preparation.
- `mini-project/`: **Data Processing Pipeline** web/CLI app.
- `solutions/`: Answer keys.
