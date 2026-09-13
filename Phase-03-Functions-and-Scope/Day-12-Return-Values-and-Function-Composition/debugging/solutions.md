# Day 12 Debugging Solutions

## Bug 1: Type Mismatch in Composition Pipeline
- **Root Cause**: `stage1Extract` returns a `string`, but `stage2Square` expects a `number`, producing `NaN`.
- **Fix**: Align pipeline types so stage 1 returns a numeric property e.g. `obj.age` or `obj.score`.

## Bug 2: Side-Effect in Check Function
- **Root Cause**: `canAffordImpure` mutates `balance` state during what should be a non-destructive boolean check.
- **Fix**: Use pure check: `function canAffordPure(currentBalance, price) { return currentBalance >= price; }`.
