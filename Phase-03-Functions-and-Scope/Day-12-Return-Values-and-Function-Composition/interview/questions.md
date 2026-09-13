# Day 12 Interview Questions — Composition & Pure Functions

## 1. What is a pure function and why is it valuable?
- A pure function is deterministic (same inputs always produce same output) and has zero side effects.
- It is easy to unit test, refactor, memoize, and reason about without worrying about hidden global state changes.

## 2. What is function composition ($f(g(x))$)?
- Function composition is combining two or more functions where the output of $g(x)$ becomes the input argument to $f$.
- It creates modular data pipelines by chaining simple single-purpose functions together.

## 3. How do you avoid parameter mutation side effects when working with arrays and objects?
- Use spread syntax (`[...arr]`, `{ ...obj }`) or non-mutating array methods (`.slice()`, `.concat()`, `.map()`) to return new copies rather than mutating original reference targets in-place.
