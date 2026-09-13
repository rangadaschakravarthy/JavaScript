# Day 11 Output Prediction Solutions

## Q1
- **Predicted Output**: `undefined`
- **Explanation**: `{ id: id }` is parsed as a function block with labeled statement `id:`, not an object literal. Needs parentheses `({ id: id })`.

## Q2
- **Predicted Output**:
  `Q2a Output: Hello Guest`
  `Q2b Output: Hello null`
- **Explanation**: Default values trigger for `undefined`, but treat `null` as an explicit value.

## Q3
- **Predicted Output**: `3`
- **Explanation**: `arguments.length` in standard functions counts passed arguments.

## Q4
- **Predicted Output**: `20`
- **Explanation**: IIFE evaluates immediately with `a=4, b=5`, returning `20`.
