# 02 — Function Anatomy and Declaration

## 1. What is this?
Function anatomy refers to the structural components that make up a function declaration in JavaScript: the `function` keyword, identifier (name), parameter list inside parentheses `()`, and the body enclosed in curly braces `{}`.

## 2. Why does it exist?
Understanding the explicit anatomy of a function allows developers to read, write, debug, and structure code predictably.

## 3. Basic Syntax & Grammar Rules
```javascript
function functionName(parameter1, parameter2) {
  // Function Body (Executable Statements)
  return value;
}
```

### Breakdown of Anatomy Components:
1. `function`: Reserved JS keyword initiating a function declaration.
2. `functionName`: Identifier used to invoke the function. Follows camelCase naming conventions.
3. `(parameter1, parameter2)`: Parameter list enclosed in parentheses. Acts as placeholders for incoming data.
4. `{ ... }`: Block body containing statements to execute upon call.

## 4. Simple Starter Example
```javascript
function greetUser(username) {
  console.log("Hello, " + username + "!");
}
```

## 5. Code Execution Trace & Mental Model

```text
  function    calculateTax    (  income , taxRate  )    { ... }
  │           │               │  │                 │    │
  Keyword     Identifier      │  Parameters        │    Body Block
                              Parentheses          Parentheses
```

## 6. More Examples & Common Patterns

### Multiple Parameter Declaration
```javascript
function displayStudentInfo(firstName, lastName, age, grade) {
  console.log("Student: " + firstName + " " + lastName);
  console.log("Age: " + age + " | Grade: " + grade);
}

displayStudentInfo("Alice", "Smith", 20, "A");
```

## 7. Common Pitfalls & Anti-Patterns
- **Invalid Identifier Names**: Using spaces (`function my function()`), starting with numbers (`function 123test()`), or using reserved keywords (`function return()`).
- **Missing Curly Braces**: Function declarations require a `{}` block body.

## 8. Edge Cases & Modern JavaScript Gotchas
- **Duplicate Parameter Names**: In non-strict mode, `function test(a, a) {}` is allowed (last value wins). In strict mode (`'use strict';`), duplicate parameter names throw a `SyntaxError`.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "Can a function declaration exist without a name?"
  - *Answer*: A standard function declaration requires a name. Anonymous functions can only exist as function expressions or inside IIFEs/callbacks.

## 10. Practice Exercises & Self-Check
1. Write the anatomy breakdown for `function calculateDiscount(price, percentage)`.
2. List 5 invalid function names and explain why JS rejects them.

## 11. Summary & Key Takeaways
- Function declarations require `function`, a valid identifier, parentheses `()`, and a body `{}`.
- Parameters define placeholder variables for input data.
- Strict mode forbids duplicate parameter names.
