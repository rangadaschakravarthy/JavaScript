# 04 — Higher-Order Functions (HOF) Concept

## 1. What is this?
A **Higher-Order Function (HOF)** is a function that satisfies at least one of the following criteria:
1. It **accepts one or more functions as arguments** (e.g. `[].map(fn)`).
2. It **returns a function** as its result (e.g. Function Factories / Closures).

## 2. Why does it exist?
Higher-Order Functions enable declarative programming, allowing developers to express *what* data transformation should occur rather than manually writing low-level loop mechanics for *how* to iterate over data.

## 3. Two Categories of HOFs

### Category 1: HOF Accepting Functions (Callback Processors)
```javascript
function filterArray(arr, predicateFn) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicateFn(arr[i])) { // Invokes passed callback!
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evens = filterArray(numbers, n => n % 2 === 0);
console.log(evens); // [2, 4, 6]
```

### Category 2: HOF Returning Functions (Function Generators)
```javascript
function createValidator(minLength) {
  return function(text) {
    return typeof text === 'string' && text.length >= minLength;
  };
}

const isPasswordValid = createValidator(8);
console.log(isPasswordValid("pass"));     // false
console.log(isPasswordValid("secret123")); // true
```

## 4. Custom Implementations of Core Array HOFs

### 1. Custom `myForEach`
```javascript
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}
```

### 2. Custom `myMap`
```javascript
function myMap(arr, transformFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(transformFn(arr[i], i, arr));
  }
  return result;
}
```

## 5. Built-in JS Array HOF Preview
Modern JavaScript includes built-in higher-order array methods:
- `.forEach(cb)`: Runs callback for side-effects.
- `.map(cb)`: Transforms elements into a new array.
- `.filter(cb)`: Filters elements matching predicate function.
- `.reduce(cb, init)`: Aggregates array elements into a single value.

*(Note: Complete APIs of these array methods will be explored in depth in Phase 5: Arrays).*

## 6. Common Pitfalls & Anti-Patterns
- Using HOFs like `.map()` without returning a value inside the callback (returns an array of `undefined`!).

## 7. Interview & Problem-Solving Perspective
- **Interview Question**: "What is a Higher-Order Function?"
  - *Answer*: An HOF is a function that accepts another function as an argument, returns a function, or both. Examples include array iteration methods (`map`, `filter`) and function factories.

## 8. Practice Exercises & Self-Check
1. Write custom `myFilter(arr, predicateFn)`.
2. Write custom `myReduce(arr, reducerFn, initialVal)`.

## 9. Summary & Key Takeaways
- HOF = Function taking function as arg OR returning function.
- Promotes declarative, clean, reusable code.
- Forms the core of Array processing and functional architectures.
