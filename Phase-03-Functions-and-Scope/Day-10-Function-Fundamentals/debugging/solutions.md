# Day 10 Debugging Solutions

## Bug 1: Missing return statement
- **Root Cause**: Function logs output instead of returning it.
- **Fix**: Change `console.log(amount * 0.15)` to `return amount * 0.15;`.

## Bug 2: Unreachable Code after Return
- **Root Cause**: Placing `console.log` after an unconditional `return` statement.
- **Fix**: Move `console.log` above the `return` statement.

## Bug 3: ASI Trap on Return Newline
- **Root Cause**: Putting newline after `return` causes JS to auto-insert a semicolon `;`, returning `undefined`.
- **Fix**: Place `{` on the same line as `return`: `return { theme: "dark" };`.
