# 04 — Function Factories and State Management

## 1. What is this?
A **Function Factory** is a higher-order function that accepts configuration arguments and returns a newly constructed, customized function tailored to specific configuration state using closures.

## 2. Why does it exist?
Function factories prevent hardcoding values and avoid duplicate function definitions by generating specialized utility functions dynamically.

## 3. Basic Syntax & Multiplier Factory Example

```javascript
// FUNCTION FACTORY: Accepts configuration argument `multiplier`
function createMultiplier(multiplier) {
  // Returns customized arrow function closing over `multiplier`
  return function(value) {
    return value * multiplier;
  };
}

// Generating specialized functions from factory
const double = createMultiplier(2);
const triple = createMultiplier(3);
const tenX = createMultiplier(10);

console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(tenX(5));   // 50
```

## 4. Logger Factory Example with Prefix Configurations

```javascript
function createLogger(logPrefix) {
  return function(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${logPrefix}] ${message}`);
  };
}

const errorLogger = createLogger("ERROR");
const infoLogger = createLogger("INFO");

errorLogger("Database connection failed!");
infoLogger("User logged in successfully.");
```

## 5. Unique ID Generator Factory

```javascript
function createIdGenerator(prefix = "ID") {
  let count = 0;
  return function() {
    count++;
    return `${prefix}_${String(count).padStart(4, '0')}`;
  };
}

const generateUserId = createIdGenerator("USER");
const generateOrderId = createIdGenerator("ORDER");

console.log(generateUserId()); // "USER_0001"
console.log(generateUserId()); // "USER_0002"
console.log(generateOrderId()); // "ORDER_0001"
```

## 6. Common Pitfalls & Anti-Patterns
- Over-engineering simple one-off tasks with unnecessary multi-level factory functions.

## 7. Interview & Problem-Solving Perspective
- **Interview Question**: "What is a function factory and how does it utilize closures?"
  - *Answer*: A function factory is a function that creates and returns specialized target functions. It uses closures to bind configuration parameters and internal state variables to the generated function instance.

## 8. Practice Exercises & Self-Check
1. Write a factory `createGreeter(greeting)` returning custom greeter functions (`sayHello`, `sayHola`).
2. Write a factory `createDiscountCalculator(percent)` returning pricing functions.

## 9. Summary & Key Takeaways
- Function factories return customized function instances using closures.
- Factory parameters act as configuration bindings in returned inner functions.
- Factories enable reusable, specialized utility creation.
