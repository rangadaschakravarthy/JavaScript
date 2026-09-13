/**
 * Day 17 — Example 04: Recursive Digit Sum and Greatest Common Divisor (GCD)
 */

// 1. Recursive Digit Sum
function sumDigits(n) {
  const current = Math.abs(n);
  if (current < 10) return current;
  return (current % 10) + sumDigits(Math.floor(current / 10));
}

console.log("--- Recursive Digit Sum ---");
console.log("sumDigits(1234):", sumDigits(1234)); // 1 + 2 + 3 + 4 = 10
console.log("sumDigits(905):", sumDigits(905));   // 9 + 0 + 5 = 14

// 2. Recursive Euclidean GCD: gcd(a, b) = gcd(b, a % b)
function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

console.log("\n--- Recursive GCD ---");
console.log("gcd(48, 18):", gcd(48, 18)); // 6
console.log("gcd(100, 25):", gcd(100, 25)); // 25
