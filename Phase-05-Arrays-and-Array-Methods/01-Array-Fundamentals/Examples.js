// Day 01 Examples
console.log("=== Array Literals & Creation ===");
const numbers = [10, 20, 30];
const names = ["Alex", "John", "Sam"];
const mixed = [1, "two", true, null, { key: "val" }];

console.log("numbers:", numbers);
console.log("numbers.length:", numbers.length);
console.log("Array.isArray(numbers):", Array.isArray(numbers));
console.log("typeof numbers:", typeof numbers); // "object"

console.log("\n=== Edge Case Checking ===");
console.log("Array.isArray({}):", Array.isArray({})); // false
console.log("Array.isArray('hello'):", Array.isArray("hello")); // false
