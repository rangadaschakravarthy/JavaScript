# Day 14 Output Prediction Solutions

## Q1
- **Predicted Output**: `Hoisted!`
- **Explanation**: Function declarations are hoisted completely with full body during Creation Phase.

## Q2
- **Predicted Output**: `undefined`
- **Explanation**: `var` is hoisted and initialized to `undefined` during Creation Phase.

## Q3
- **Predicted Output**: `TypeError`
- **Explanation**: `var q3Expr` hoists as `undefined`. Calling `undefined()` attempts non-function execution, throwing `TypeError`.

## Q4
- **Predicted Output**: `function`
- **Explanation**: During Creation Phase hoisting, function declaration `q4Collision` takes precedence over `var q4Collision`. At the first `console.log`, `q4Collision` is still a function (before the line `q4Collision = 50` executes).
