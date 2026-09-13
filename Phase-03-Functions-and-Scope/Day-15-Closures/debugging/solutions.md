# Day 15 Debugging Solutions

## Bug 1: Leaking Private Object Reference
- **Root Cause**: Returning direct reference `_items` allows external callers to mutate internal state via `store.getItems().push("unwanted")`.
- **Fix**: Return a copy using spread syntax: `getItems: () => [..._items]`.

## Bug 2: Global Variable Pollution in Closure Counter
- **Root Cause**: Declaring `sharedCount` in outer global scope causes all instances created by `createCounterBuggy()` to share the same variable.
- **Fix**: Move `let count = 0;` inside `createCounter()` so each instance receives an isolated closure environment.
