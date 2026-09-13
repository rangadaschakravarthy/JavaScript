// Day 02 Examples
const arr = [10, 20, 30, 40, 50];

console.log("=== Indexing & Access ===");
console.log("First element [0]:", arr[0]); // 10
console.log("Third element [2]:", arr[2]); // 30
console.log("Last element [len-1]:", arr[arr.length - 1]); // 50
console.log("at(-1):", arr.at(-1)); // 50
console.log("at(-2):", arr.at(-2)); // 40

console.log("\n=== In-Place Element Updating ===");
const fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log("Updated fruits:", fruits); // ["apple", "blueberry", "cherry"]
