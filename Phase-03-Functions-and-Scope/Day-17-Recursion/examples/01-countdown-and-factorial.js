/**
 * Day 17 — Example 01: Recursive Countdown and Factorial
 */

// 1. Recursive Countdown
function recursiveCountdown(n) {
  if (n <= 0) {
    console.log("Blastoff!");
    return;
  }
  console.log("Countdown:", n);
  recursiveCountdown(n - 1);
}

console.log("--- Recursive Countdown (3) ---");
recursiveCountdown(3);

// 2. Recursive Factorial
function recursiveFactorial(n) {
  if (n <= 1) return 1;
  return n * recursiveFactorial(n - 1);
}

console.log("\n--- Recursive Factorial Results ---");
console.log("5! =", recursiveFactorial(5)); // 120
console.log("0! =", recursiveFactorial(0)); // 1
