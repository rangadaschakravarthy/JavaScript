# 04 — Default and Rest Parameters

## 1. What is this?
- **Default Parameters**: Allows parameters to be initialized with default values if no argument or `undefined` is passed.
- **Rest Parameters**: Allows a function to accept an indefinite number of arguments as a true JavaScript Array using the `...` syntax.

## 2. Why does it exist?
- Default parameters eliminate boilerplate `if (param === undefined) param = defaultValue;` checks.
- Rest parameters eliminate legacy `arguments` object manipulation and provide true Array methods (`.map()`, `.filter()`, `.reduce()`).

## 3. Basic Syntax & Grammar Rules

```javascript
// Default Parameters
function greet(name = "Guest", role = "User") {
  return `Hello ${name} (${role})`;
}

// Rest Parameters (MUST be the final parameter!)
function sumAll(initialValue, ...numbers) {
  let total = initialValue;
  for (const num of numbers) { // 'numbers' is a REAL Array!
    total += num;
  }
  return total;
}
```

## 4. Simple Starter Example
```javascript
// Default Parameters Behavior
console.log(greet());               // Output: Hello Guest (User)
console.log(greet("Alice"));        // Output: Hello Alice (User)
console.log(greet("Bob", "Admin")); // Output: Hello Bob (Admin)

// Triggering Default with undefined vs null
console.log(greet(undefined, "VIP")); // Output: Hello Guest (VIP) - Defaults trigger on undefined!
console.log(greet(null, "VIP"));      // Output: Hello null (VIP) - null is an explicit value!

// Rest Parameters Behavior
console.log(sumAll(10, 1, 2, 3, 4)); // Output: 20 (initialValue=10, numbers=[1,2,3,4])
```

## 5. Code Execution Trace & Mental Model

```text
Default Parameter Trigger Rule:
Incoming Argument === undefined? ──► YES ──► Assign Default Value
        │
       NO (even if null, 0, false, "")
        ▼
Assign Passed Argument Value
```

## 6. Rest Parameter Syntax Rules
1. Rest parameter must be the **last** parameter in declaration:
   - `function bad(...rest, last) {}` ──► ❌ `SyntaxError: Rest parameter must be last element`.
2. A function can have only **one** rest parameter.

## 7. Rest vs Spread Distinction
- **Rest**: Collects multiple individual arguments into a single Array (used in function declaration parameters).
- **Spread**: Unpacks an Array or object into individual values (used in function calls or literal structures).

## 8. Common Pitfalls & Anti-Patterns
- Placing rest parameter before regular parameters.
- Expecting default parameters to trigger when passing `null` or `0`.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "When does a default parameter trigger in JavaScript?"
  - *Answer*: Default parameters trigger ONLY when argument is omitted or explicitly passed as `undefined`. They do not trigger for `null`, `0`, `false`, or `""`.

## 10. Practice Exercises & Self-Check
1. Write `function multiply(factor = 1, ...nums)` returning array of numbers multiplied by factor.
2. What is the output of `greet(null)`?

## 11. Summary & Key Takeaways
- Default parameters handle missing/undefined arguments automatically.
- Rest parameters (`...args`) collect variable arguments into a real array.
- Rest parameter must always be the last parameter in definition.
