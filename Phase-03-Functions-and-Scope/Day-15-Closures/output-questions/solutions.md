# Day 15 Output Prediction Solutions

## Q1
- **Predicted Output**:
  `Q1a: 1`
  `Q1b: 2`
  `Q1c: 1`
- **Explanation**: `c1` and `c2` maintain separate Heap Lexical Environments with independent `count` state variables.

## Q2
- **Predicted Output**: `3 3 3`
- **Explanation**: `var i` is function-scoped. All callbacks close over the same single `var i` reference, which reaches `3` when the loop ends.

## Q3
- **Predicted Output**: `20`
- **Explanation**: The returned inner function closes over `outer()`'s local `val = 20`, which shadows the outer global `val = 10`.
