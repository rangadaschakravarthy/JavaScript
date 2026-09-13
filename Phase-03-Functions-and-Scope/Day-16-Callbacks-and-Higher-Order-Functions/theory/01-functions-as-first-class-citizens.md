# 01 — Functions as First-Class Citizens

## 1. What is this?
In JavaScript, functions are **First-Class Citizens** (also called *First-Class Objects* or *First-Class Values*). This means functions can be treated like any other primitive or object value in the language.

## 2. Why does it exist?
First-class function support is the foundation of Functional Programming in JavaScript. It enables callbacks, event handlers, higher-order utility methods (`.map()`, `.filter()`), currying, and middleware architectures.

## 3. Four Capabilities of First-Class Functions

### 1. Store Functions in Variables
```javascript
const greet = function(name) { return `Hello, ${name}`; };
```

### 2. Store Functions in Data Structures (Arrays & Objects)
```javascript
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

const fnArray = [(a, b) => a * b, (a, b) => a / b];
console.log(operations.add(10, 5)); // 15
console.log(fnArray[0](4, 5));      // 20
```

### 3. Pass Functions as Arguments to Other Functions
```javascript
function execute(fn, val1, val2) {
  return fn(val1, val2);
}

console.log(execute((a, b) => a + b, 10, 20)); // 30
```

### 4. Return Functions from Other Functions
```javascript
function createGreeter(salutation) {
  return function(name) {
    return `${salutation}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
console.log(sayHello("Alice")); // "Hello, Alice!"
```

## 4. Code Execution Trace & Mental Model

```text
Function Value Handling in Memory:
  Variable `fn` ──► Holds Reference Pointer ──► Heap Function Object
                                                      │
                                                      ├── Execution Logic
                                                      ├── Length (# params)
                                                      └── Name Identifier
```

## 5. Common Pitfalls & Anti-Patterns
- **Accidental Premature Invocation**: Passing `fn()` instead of `fn` as an argument executes the function immediately and passes its *returned result* rather than passing the function reference itself!

```javascript
function process(callback) {
  callback();
}

function myTask() { console.log("Task done"); }

// BAD: Passes `undefined` (result of myTask())!
// process(myTask()); // TypeError: callback is not a function!

// GOOD: Passes function reference `myTask`
process(myTask); // Output: "Task done"
```

## 6. Interview & Problem-Solving Perspective
- **Interview Question**: "What does it mean for functions to be first-class citizens in JavaScript?"
  - *Answer*: It means functions are first-class values that can be assigned to variables, stored in data structures, passed as arguments, and returned from other functions.

## 7. Practice Exercises & Self-Check
1. Create an object `mathObj` storing 4 math functions.
2. Demonstrate premature invocation error vs correct function passing.

## 8. Summary & Key Takeaways
- First-class functions can be assigned, stored, passed, and returned.
- Passing `fn` passes reference; passing `fn()` passes invocation result.
- Enables higher-order functions and functional patterns.
