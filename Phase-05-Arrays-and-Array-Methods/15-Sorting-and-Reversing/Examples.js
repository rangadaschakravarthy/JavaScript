// Day 15 Examples
const numbers = [10, 2, 35, 4];

// WRONG: numbers.sort() sorts alphabetically -> [10, 2, 35, 4]
// RIGHT: Pass numeric comparator function:
numbers.sort((a, b) => a - b);
console.log("Ascending sort:", numbers); // [2, 4, 10, 35]

// Non-mutating ES2023 toSorted():
const original = [3, 1, 2];
const sorted = original.toSorted((a, b) => a - b);
console.log("original:", original, "| toSorted:", sorted);
