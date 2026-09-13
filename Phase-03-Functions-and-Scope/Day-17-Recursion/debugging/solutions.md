# Day 17 Debugging Solutions

## Bug 1: Parameter Stagnation in Recursive Step
- **Root Cause**: Passing `n` without decrementing (`n - 1`) means the parameter never progresses toward the base case `n <= 0`.
- **Fix**: `return countToZero(n - 1);`.

## Bug 2: Missing Base Case Condition
- **Root Cause**: Omitting the base case allows `n` to go negative into $-\infty$, causing `RangeError: Maximum call stack size exceeded`.
- **Fix**: Add base case at top: `if (n <= 1) return 1;`.
