# Day 11 Interview Questions — Function Types and Parameters

## 1. What are the key differences between function declarations and arrow functions?
- **Hoisting**: Declarations are hoisted completely. Arrow functions (assigned to `let`/`const`) stay in TDZ.
- **`this` Binding**: Declarations have dynamic `this`. Arrow functions inherit `this` lexically.
- **`arguments` Object**: Declarations have local `arguments`. Arrow functions do NOT have `arguments`.
- **Constructors**: Declarations can be called with `new`. Arrow functions throw `TypeError`.

## 2. Why are rest parameters preferred over the `arguments` object in modern JavaScript?
- Rest parameters (`...args`) produce a true JavaScript `Array` supporting `.map()`, `.filter()`, `.reduce()`.
- `arguments` is an Array-like object lacking array methods.
- Rest parameters can collect specific trailing arguments (`fn(first, ...rest)`), whereas `arguments` collects all inputs.

## 3. What is an IIFE and why was it historically essential?
- Immediately Invoked Function Expression: `(function() {})()`.
- Historically provided function-scoped data privacy to prevent variables from polluting global scope prior to ES6 block scoping (`let`/`const`) and ES modules.
