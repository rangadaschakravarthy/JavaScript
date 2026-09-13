# 04 — Returning Values from Recursion

## 1. What is this?
Returning values from recursive functions requires explicitly passing intermediate computation results back up the call chain during stack unwinding.

## 2. Why does it exist?
A common beginner bug in recursion is forgetting the `return` keyword in front of the recursive call (`fn(n - 1)` instead of `return fn(n - 1)`), which causes the function to return `undefined` to outer callers!

## 3. The `return` Passing Rule

```javascript
// BROKEN RECURSION: Missing `return` on recursive step!
function sumBroken(n) {
  if (n <= 1) return 1;
  sumBroken(n - 1); // BUG: Missing `return` keyword! Evaluates call but discards result!
}

console.log(sumBroken(3)); // Output: undefined!

// FIXED RECURSION: Explicit `return` on recursive step
function sumFixed(n) {
  if (n <= 1) return 1;
  return n + sumFixed(n - 1); // ✅ Returns result of inner recursive call!
}

console.log(sumFixed(3)); // Output: 6 (3 + 2 + 1)
```

## 4. Recursive String Reversal Example
```javascript
function reverseString(str) {
  // Base Case: Empty string or single character
  if (str.length <= 1) {
    return str;
  }

  // Recursive Step: Last char + reverseString(rest of string)
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log(reverseString("hello")); // Output: "olleh"
```

### Execution Trace for `reverseString("cat")`:
```text
reverseString("cat")
├── 't' + reverseString("ca")
│           ├── 'a' + reverseString("c")
│           │           └── Base case returns "c"
│           └── 'a' + "c" = "ac"
└── 't' + "ac" = "tac"
```

## 5. Accumulator Pattern (Tail Recursion Prep)
An alternative pattern passes a running accumulator argument through recursive parameters:

```javascript
function sumAccumulator(n, total = 0) {
  if (n <= 0) return total; // Base case returns accumulated total
  return sumAccumulator(n - 1, total + n); // Pass updated accumulator
}

console.log(sumAccumulator(5)); // 15
```

## 6. Common Pitfalls & Anti-Patterns
- Forgetting `return` in front of recursive calls.

## 7. Interview & Problem-Solving Perspective
- **Interview Question**: "Why does a recursive function return `undefined` even if the base case returns a value?"
  - *Answer*: Because the recursive step omitted the `return` keyword (`fn()` instead of `return fn()`), preventing the base case result from propagating back up the call stack unwinding chain.

## 8. Practice Exercises & Self-Check
1. Write recursive `reverseArray(arr)`.
2. Demonstrate bug caused by missing `return` in recursive call.

## 9. Summary & Key Takeaways
- Always prefix recursive calls with `return` when returning values.
- Unwinding passes returned values up the call stack chain.
- Accumulator parameters maintain running state across recursive calls.
