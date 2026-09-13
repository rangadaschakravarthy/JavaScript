# Expected Output — Hoisting Detective
Case: "letTDZ"
[CASE: let/const TDZ]
Code: console.log(y); let y = 20;
Creation Phase: 'y' allocated as UNINITIALIZED in TDZ.
Result: ❌ ReferenceError: Cannot access 'y' before initialization.
