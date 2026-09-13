# 05 — Recursion vs Iteration Trade-offs

## 1. What is this?
**Recursion** and **Iteration** are two fundamental approaches for performing repetitive tasks in software development:
- **Recursion**: Repetition via self-referential function calls.
- **Iteration**: Repetition via explicit loop structures (`for`, `while`, `do...while`).

## 2. Why does it exist?
Every recursive problem can theoretically be solved iteratively, and vice versa. Understanding the trade-offs in performance, memory, and code readability helps engineers choose the right approach.

## 3. Comparison Matrix

| Factor | Recursion | Iteration |
|--------|-----------|-----------|
| **Control Mechanism** | Base Case & Self-Calls | Loop Condition & Counters |
| **Memory Overhead** | High ($O(N)$ Call Stack Frames) | Low ($O(1)$ Memory Overhead) |
| **Execution Speed** | Slightly Slower (Call stack push/pop overhead) | Faster (Raw loop instruction execution) |
| **Risk** | Stack Overflow (`RangeError`) | Infinite Loop (CPU freeze) |
| **Code Elegance** | High for trees, graphs, and nested data | High for flat array and numeric iteration |

## 4. Code Comparison: Computing Factorial ($n!$)

```javascript
// RECURSIVE APPROACH (Elegantly matches mathematical definition)
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

// ITERATIVE APPROACH (Faster & zero stack memory overhead)
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
```

## 5. When to Use Which?

### Use Iteration When:
- Looping over flat arrays or linear numeric sequences.
- Performance and memory efficiency are critical.
- Iteration depth is large (e.g. 100,000 items) to prevent Stack Overflow.

### Use Recursion When:
- Processing nested structures of arbitrary depth (trees, JSON nodes, file directories).
- Implementing divide-and-conquer algorithms (Merge Sort, Quick Sort, Binary Search Tree traversal).
- Problem definition is naturally self-similar.

## 6. Tail Call Optimization (TCO) Note
Tail Call Optimization (TCO) is an ES6 language spec feature where recursive calls in tail position (`return fn()`) reuse the existing stack frame, preventing stack overflow. However, TCO is only supported in Safari/WebKit and is not enabled in V8/Node.js. Therefore, do not rely on TCO for memory safety in Node or Chrome.

## 7. Interview & Problem-Solving Perspective
- **Interview Question**: "What are the trade-offs between recursion and iteration?"
  - *Answer*: Recursion offers cleaner code for self-similar/tree structures but incurs $O(N)$ Call Stack frame memory overhead. Iteration uses $O(1)$ memory and executes faster, making it better for flat linear loops.

## 8. Practice Exercises & Self-Check
1. Convert recursive `countdown` to iterative `while` loop.
2. List 3 tree/nested structures where recursion is cleaner than iteration.

## 9. Summary & Key Takeaways
- Iteration = $O(1)$ memory, faster linear loop performance.
- Recursion = $O(N)$ stack frame memory, clean for nested/tree structures.
- Choose based on problem structure and stack depth safety.
