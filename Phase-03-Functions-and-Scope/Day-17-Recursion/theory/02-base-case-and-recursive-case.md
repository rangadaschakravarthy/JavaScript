# 02 — Base Case and Recursive Case

## 1. What is this?
- **Base Case**: The simplest, trivial sub-problem that can be solved immediately without making further recursive calls.
- **Recursive Case**: The branch that breaks the problem down into smaller sub-problems, calls the function recursively, and combines the results.

## 2. Why does it exist?
A clear boundary between the Base Case and Recursive Case prevents infinite stack overflow while ensuring mathematical correctness in recursive computations.

## 3. Mathematical Factorial Example ($n!$)

Mathematical Definition of Factorial:
- Base Case: $0! = 1$ and $1! = 1$
- Recursive Case: $n! = n \times (n - 1)!$

```javascript
function factorial(n) {
  // BASE CASE: Trivial evaluation for n <= 1
  if (n <= 1) {
    return 1;
  }

  // RECURSIVE CASE: n * factorial(n - 1)
  return n * factorial(n - 1);
}

console.log(factorial(4)); // 24
```

## 4. Execution Walkthrough: `factorial(4)`

```text
Winding Phase (Building Call Stack):
factorial(4) = 4 * factorial(3)
factorial(3) = 3 * factorial(2)
factorial(2) = 2 * factorial(1)
factorial(1) = 1 (BASE CASE REACHED!)

Unwinding Phase (Computing & Popping Call Stack):
factorial(1) returns 1
factorial(2) returns 2 * 1 = 2
factorial(3) returns 3 * 2 = 6
factorial(4) returns 4 * 6 = 24
```

## 5. Multiple Base Cases Example (Fibonacci Sequence)

Fibonacci Definition:
- Base Case 1: $F(0) = 0$
- Base Case 2: $F(1) = 1$
- Recursive Case: $F(n) = F(n - 1) + F(n - 2)$

```javascript
function fibonacci(n) {
  // Multiple Base Cases
  if (n <= 0) return 0;
  if (n === 1) return 1;

  // Recursive Case with two sub-calls
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8 (0, 1, 1, 2, 3, 5, 8)
```

## 6. Common Pitfalls & Anti-Patterns
- Placing the base case check AFTER the recursive call (Causes infinite loop before base case can ever execute!).

## 7. Interview & Problem-Solving Perspective
- **Interview Question**: "Can a recursive function have more than one base case?"
  - *Answer*: Yes. Algorithms like Fibonacci require multiple base cases ($n=0$ and $n=1$) to handle initial seed values.

## 8. Practice Exercises & Self-Check
1. Identify base case and recursive case in `function power(base, exp)`.
2. Write base case for recursive array sum `sumArray(arr)`.

## 9. Summary & Key Takeaways
- Base Case = Returns value directly without recursing.
- Recursive Case = Calls function with smaller input and combines results.
- Unwinding phase computes returned values back up the call stack.
