# Day 17 Output Prediction Solutions

## Q1
- **Predicted Output**: `9`
- **Explanation**: `fn1(5) = 5 + fn1(3) = 5 + (3 + fn1(1)) = 5 + 3 + (1 + fn1(-1)) = 5 + 3 + 1 + 0 = 9`.

## Q2
- **Predicted Output**: `undefined`
- **Explanation**: `fn2(3)` executes `n * fn2(n-1)` without returning the evaluation result, causing implicit return of `undefined`.

## Q3
- **Predicted Output**: `"CBA"`
- **Explanation**: The function reverses the string by recursing on `slice(1)` and placing `str[0]` at the end during stack unwinding.
