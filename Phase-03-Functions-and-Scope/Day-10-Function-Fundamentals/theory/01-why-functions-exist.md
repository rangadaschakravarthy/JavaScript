# 01 — Why Functions Exist

## 1. What is this?
A **function** is a reusable block of code designed to perform a specific task. Rather than repeating identical code multiple times throughout a program, you wrap statements inside a function and execute (call) it whenever needed.

## 2. Why does it exist?
Without functions, programs suffer from code duplication (violating DRY: *Don't Repeat Yourself*). Duplicated code is difficult to update, error-prone, hard to read, and impossible to scale or test efficiently. Functions provide:
1. **Reusability**: Write once, invoke infinitely.
2. **Abstraction**: Hide complex internal steps behind a simple function call.
3. **Maintainability**: Fix bugs or change logic in one single location.
4. **Modularity**: Divide large complex applications into small, understandable building blocks.

## 3. Basic Syntax & Grammar Rules
```javascript
// Function Declaration
function functionName() {
  // Statements to execute (Function Body)
}

// Function Call / Invocation
functionName();
```

## 4. Simple Starter Example
```javascript
// WITHOUT FUNCTIONS (Repeated & Error-Prone)
console.log("Welcome to JavaScript Mastery!");
console.log("Welcome to JavaScript Mastery!");
console.log("Welcome to JavaScript Mastery!");

// WITH FUNCTIONS (Clean & Reusable)
function showWelcomeMessage() {
  console.log("Welcome to JavaScript Mastery!");
}

showWelcomeMessage();
showWelcomeMessage();
showWelcomeMessage();
```

## 5. Code Execution Trace & Mental Model

```text
Program Start
    │
    ▼
Define function `showWelcomeMessage()` ──► Registered in memory (not executed yet)
    │
    ▼
Call `showWelcomeMessage()` ─────────────► Jumps to function body
    │                                           │
    │                                           ▼
    │                                      Executes console.log(...)
    │                                           │
    ▼                                           ▼
Resume caller execution ◄──────────────── Finish function execution
```

## 6. More Examples & Common Patterns

### Formatting & Displaying User Reports
```javascript
function printDivider() {
  console.log("========================================");
}

function printHeader() {
  printDivider();
  console.log("        SYSTEM STATUS REPORT            ");
  printDivider();
}

printHeader();
```

## 7. Common Pitfalls & Anti-Patterns
- **Copy-Paste Programming**: Duplicating 10 lines of code in 5 different places instead of wrapping it in a function.
- **Forgetting Parentheses**: Referencing the function name `showWelcomeMessage` without parentheses `()` passes the function object itself rather than executing it!

## 8. Edge Cases & Modern JavaScript Gotchas
- **Function Declarations are Hoisted**: In JavaScript, function declarations can be called *before* they appear in the source code file because the JavaScript engine hoists declarations during compile phase.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "Why do we use functions instead of duplicating logic?"
  - *Answer*: Functions promote DRY principles, improve maintainability, reduce memory overhead by storing logic once, simplify unit testing, and enable procedural abstraction.

## 10. Practice Exercises & Self-Check
1. Write a function `printAppBanner()` that logs a 3-line ASCII banner to the console. Call it twice.
2. Identify 3 places in your Phase 1 or Phase 2 scripts where logic was repeated and could be refactored into a function.

## 11. Summary & Key Takeaways
- Functions package statements into named reusable blocks.
- Calling a function executes its body and returns control to the caller.
- Functions prevent code duplication and establish maintainable project architecture.
