# Day 14 Debugging Solutions

## Bug 1: TDZ Access Error
- **Root Cause**: Attempting to read `score` before `let score = 100;` line.
- **Fix**: Move `let score = 100;` declaration above any read statements.

## Bug 2: Early Arrow Function Expression Call
- **Root Cause**: Calling `const arrowFn` before its definition line.
- **Fix**: Define `const arrowFn = (x) => x * 2;` above the call site.
