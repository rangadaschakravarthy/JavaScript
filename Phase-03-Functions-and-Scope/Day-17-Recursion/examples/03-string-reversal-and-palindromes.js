/**
 * Day 17 — Example 03: Recursive String Reversal and Palindrome Check
 */

// 1. Recursive String Reversal
function reverseString(str) {
  if (str.length <= 1) return str;
  return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log("--- Recursive String Reversal ---");
console.log("reverse('hello'):", reverseString("hello")); // "olleh"
console.log("reverse('JS'):", reverseString("JS"));       // "SJ"

// 2. Recursive Palindrome Check
function isPalindromeRecursive(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (clean.length <= 1) return true;
  if (clean[0] !== clean[clean.length - 1]) return false;
  return isPalindromeRecursive(clean.slice(1, clean.length - 1));
}

console.log("\n--- Recursive Palindrome Checks ---");
console.log("'racecar':", isPalindromeRecursive("racecar")); // true
console.log("'hello':", isPalindromeRecursive("hello"));     // false
