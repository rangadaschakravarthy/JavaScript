# Day 10 Interview Questions — Function Fundamentals

## 1. What happens when a function is called without providing all declared parameters?
- Omitted parameters receive the default value of `undefined`.
- Operations performing arithmetic on `undefined` (like `10 + undefined`) evaluate to `NaN`.

## 2. Why is returning values better than logging values inside functions?
- Returning values makes functions **pure**, **composable**, and **testable**.
- Caller functions can store, transform, format, or make assertions on returned values. Logging merely outputs text to stdout as a side-effect.

## 3. What is a Guard Clause / Early Return Pattern?
- A design pattern where conditional validation checks at the top of a function trigger early `return` statements.
- Avoids deeply nested `if/else` structures and flattens control flow.

## 4. What is the single responsibility principle (SRP) for functions?
- A guideline asserting that a function should have one clear purpose or reason to change.
- Functions doing multiple unrelated tasks should be broken down into atomic helper functions.
