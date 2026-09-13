# Day 17 Interview Questions — Recursion

## 1. How does the Call Stack manage stack frames during recursive execution?
- Each recursive call pushes a new stack frame (containing parameters, local variables, and return address) onto top of the Call Stack (Winding Phase).
- When a base case is hit, stack frames begin popping off one by one, passing returned values back up to preceding parent callers (Unwinding Phase).

## 2. What causes a "Maximum call stack size exceeded" error?
- Omitting a base case or failing to progress parameters toward the base case results in infinite stack frame allocation until engine call stack memory limits are exceeded.

## 3. Compare Recursion vs Iteration in terms of performance and memory.
- Recursion consumes $O(N)$ Call Stack memory for stack frames and is slightly slower due to frame push/pop overhead.
- Iteration runs in $O(1)$ memory and executes faster, but recursion offers cleaner code for self-similar/tree structures.
