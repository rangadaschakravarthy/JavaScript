/**
 * Day 17 — Example 02: Recursive Fibonacci and Power Calculation
 */

// 1. Recursive Fibonacci: F(n) = F(n-1) + F(n-2)
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("--- Fibonacci Sequence ---");
for (let i = 0; i <= 7; i++) {
  console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
}

// 2. Recursive Power: base^exp
function power(base, exp) {
  if (exp === 0) return 1;
  if (exp === 1) return base;
  return base * power(base, exp - 1);
}

console.log("\n--- Power Calculations ---");
console.log("2^3 =", power(2, 3)); // 8
console.log("5^4 =", power(5, 4)); // 625
