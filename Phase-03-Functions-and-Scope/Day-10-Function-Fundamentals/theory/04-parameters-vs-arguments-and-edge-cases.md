# 04 — Parameters vs Arguments and Edge Cases

## 1. What is this?
- **Parameters**: Variables defined in the function declaration header inside `()`. They act as named placeholders.
- **Arguments**: Real values passed to the function when it is invoked.

## 2. Why does it exist?
Parameters allow functions to operate dynamically on different data values supplied at call time rather than operating on hardcoded constants.

## 3. Basic Syntax & Grammar Rules
```javascript
//                      [Parameters: name, age]
function displayProfile(name, age) {
  console.log(`Name: ${name}, Age: ${age}`);
}

//             [Arguments: "Chakra", 25]
displayProfile("Chakra", 25);
```

## 4. Simple Starter Example
```javascript
function add(a, b) { // a and b are PARAMETERS
  console.log(a + b);
}

add(10, 20); // 10 and 20 are ARGUMENTS
```

## 5. Code Execution Trace & Mental Model

### Parameter-to-Argument Mapping:
```text
Invocation: add( 10  ,  20  )
                 │       │
                 ▼       ▼
Declaration: function add( a  ,  b )
```

## 6. Edge Cases & Missing/Extra Arguments

### Case 1: Missing Arguments (`undefined`)
If fewer arguments are provided than declared parameters, unassigned parameters automatically default to `undefined`.
```javascript
function greet(firstName, lastName) {
  console.log(`First: ${firstName}, Last: ${lastName}`);
}

greet("Alex"); // Output: First: Alex, Last: undefined
```

### Case 2: Extra Arguments (Ignored by Header)
If more arguments are passed than parameters defined, excess arguments are ignored by positional parameters (though accessible via `arguments`).
```javascript
function showFirst(item) {
  console.log("Item:", item);
}

showFirst("Apple", "Banana", "Cherry"); // Output: Item: Apple
```

### Case 3: Positional Order Matters!
Arguments are assigned to parameters **strictly by position** (first argument -> first parameter, second argument -> second parameter).
```javascript
function divide(numerator, denominator) {
  return numerator / denominator;
}

console.log(divide(10, 2)); // 5
console.log(divide(2, 10)); // 0.2 (Swapped arguments change behavior!)
```

## 7. Common Pitfalls & Anti-Patterns
- **Swapping Argument Position**: Passing arguments in the wrong order leading to logic bugs.
- **Assuming Parameters Exist**: Not handling `undefined` when caller omits expected arguments.

## 8. Modern JavaScript Solutions
- Default Parameters (`function greet(name = "Guest")`) ensure a fallback value if argument is `undefined`.

## 9. Interview & Problem-Solving Perspective
- **Interview Question**: "What is the difference between a parameter and an argument?"
  - *Answer*: Parameters are variable declarations in function definition; arguments are actual values passed during function invocation.

## 10. Practice Exercises & Self-Check
1. Predict output of `multiply(5)` where `function multiply(a, b) { return a * b; }`.
2. What happens to extra arguments passed to a single-parameter function?

## 11. Summary & Key Takeaways
- Parameters = Variable placeholders in function declaration.
- Arguments = Actual values passed during call.
- Omitted arguments default to `undefined`. Extra arguments are ignored positionally.
- Arguments map to parameters strictly by position.
