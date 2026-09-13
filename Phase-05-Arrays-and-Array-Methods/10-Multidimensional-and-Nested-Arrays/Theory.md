# Day 10 — Multidimensional and Nested Arrays — Theory & Concept Breakdown

## 1. What and Why
Manipulate 2D/3D matrices using matrix[r][c], nested loops, row/column operations, and 1-level flattening. Arrays are fundamental ordered list data structures in software development used to store collections of data.

## 2. Core Concepts & Syntax
### 2D matrix arrays
Detailed breakdown of 2D matrix arrays...

### Indexing matrix[r][c]
Detailed breakdown of Indexing matrix[r][c]...

### Nested loops for traversal
Detailed breakdown of Nested loops for traversal...

### Row & column sums
Detailed breakdown of Row & column sums...

### Flattening 1-level
Detailed breakdown of Flattening 1-level...

## 3. Practical Usage & Code Snippets
```js
// Day 10 Examples
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Center element [1][1]:", matrix[1][1]); // 5

function sumMatrix(m) {
  let total = 0;
  for (let r = 0; r < m.length; r++) {
    for (let c = 0; c < m[r].length; c++) {
      total += m[r][c];
    }
  }
  return total;
}
console.log("Matrix sum:", sumMatrix(matrix)); // 45

```

## 4. Key Rules to Remember
1. Arrays are zero-indexed: valid indexes range from `0` to `arr.length - 1`.
2. Always know whether an array method **mutates** in-place or returns a **new array**.
3. Use `Array.isArray(val)` to verify whether a variable is an array instance.
