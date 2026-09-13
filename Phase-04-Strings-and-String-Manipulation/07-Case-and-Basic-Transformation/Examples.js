// Day 07 Examples
const text = "JavaScript Mastery";
console.log("Original:", text);
console.log("Upper:", text.toUpperCase());
console.log("Lower:", text.toLowerCase());

function equalsIgnoreCase(a, b) {
  return a.toLowerCase() === b.toLowerCase();
}
console.log("Case insensitive check:", equalsIgnoreCase("hello", "HELLO")); // true
