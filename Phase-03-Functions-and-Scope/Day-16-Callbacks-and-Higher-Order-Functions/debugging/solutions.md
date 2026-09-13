# Day 16 Debugging Solutions

## Bug 1: Premature Callback Invocation
- **Root Cause**: Passing `printTaskDone()` with parentheses invokes the function immediately and passes string `"Task Finished!"` to HOF, which then tries to call `"Task Finished!"()`, throwing `TypeError`.
- **Fix**: Pass function reference without parentheses: `runTask(printTaskDone)`.

## Bug 2: Missing Return in Error Callback Branch
- **Root Cause**: Calling `callback(err)` without `return` allows execution to fall through to the success `callback(null, data)` line, invoking the callback twice.
- **Fix**: Add `return`: `if (!data) return callback(new Error("No data"));`.
