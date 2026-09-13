# Day 15 Interview Questions — Closures

## 1. What is a closure and how is it created?
- A closure is created whenever an inner function is defined inside an outer function, granting the inner function access to the outer parent's lexical scope variables.
- Even after the outer function finishes execution and returns, the inner function retains its reference to the outer lexical environment in Heap memory.

## 2. Give 3 practical production use cases for closures.
1. **Data Privacy & Encapsulation**: Creating private variables that cannot be accessed or mutated directly from outside code.
2. **Function Factories**: Creating specialized utility functions with pre-configured parameters.
3. **State Management**: Maintaining internal state in asynchronous event handlers or timers.

## 3. How do you clean up closure references to prevent memory leaks?
- Setting references to the inner closure function to `null` (`myClosure = null;`) breaks the root reference, allowing the Mark-and-Sweep garbage collector to free the retained outer lexical environment.
