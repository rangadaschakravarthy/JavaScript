# Day 13 Debugging Solutions

## Bug 1: Block-Scoped Variable Leak Attempt
- **Root Cause**: `let role` is declared inside `if` block, making it inaccessible outside the block.
- **Fix**: Declare `let role = "USER";` in function scope before the `if` block.

## Bug 2: Implicit Global Variable Creation
- **Root Cause**: Assigning to `configKey` without `const` or `let` creates an implicit global variable.
- **Fix**: Add `const configKey = key;` inside function body.
