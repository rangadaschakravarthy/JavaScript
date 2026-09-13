# Day 13 Output Prediction Solutions

## Q1
- **Predicted Output**: `Leaked`
- **Explanation**: `var` is function/globally scoped and ignores `{}` block scope boundaries.

## Q2
- **Predicted Output**: `Global`
- **Explanation**: JavaScript uses Lexical Scope. `printVal()` is defined in global scope, so its scope chain resolves `q2Val` to `"Global"`, ignoring caller's local scope.

## Q3
- **Predicted Output**:
  `Q3a Output: 20`
  `Q3b Output: 10`
- **Explanation**: `let x = 20` shadows outer `x` strictly inside the `if` block. Outside the block, outer `x` remains `10`.
