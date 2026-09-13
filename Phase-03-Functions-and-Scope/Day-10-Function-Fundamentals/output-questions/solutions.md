# Day 10 Output Prediction Solutions

## Q1
- **Predicted Output**:
  `Hello World`
  `Q1 Output: undefined`
- **Explanation**: `sayHello()` prints `"Hello World"` to console, but does not return a value. Thus `q1` stores `undefined`.

## Q2
- **Predicted Output**: `NaN`
- **Explanation**: `b` is unassigned so it becomes `undefined`. `10 + undefined` results in `NaN`.

## Q3
- **Predicted Output**: `100`
- **Explanation**: Parameter `a` receives positional argument `100`. Extra arguments `200` and `300` are ignored by parameter list.

## Q4
- **Predicted Output**: `Greater`
- **Explanation**: `x = 10 > 5` evaluates to `true`. `return "Greater"` executes immediately, skipping `console.log("Checking completed")`.
