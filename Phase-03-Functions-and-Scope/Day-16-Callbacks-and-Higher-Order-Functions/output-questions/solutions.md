# Day 16 Output Prediction Solutions

## Q1
- **Predicted Output**:
  `Q1a: Hello`
  `Q1b: Hello`
- **Explanation**: `run(greet)` passes function reference `greet` which `run` invokes. `run(greet())` passes string `"Hello"`, which `run` returns as `fn`.

## Q2
- **Predicted Output**: `12`
- **Explanation**: `createScaler(3)` returns `x => x * 3`. Invoking it immediately with `(4)` yields `12`.

## Q3
- **Predicted Output**:
  `Q3: Start`
  `Q3: Item 10`
  `Q3: End`
- **Explanation**: `.forEach()` runs its callback synchronously in-line.
