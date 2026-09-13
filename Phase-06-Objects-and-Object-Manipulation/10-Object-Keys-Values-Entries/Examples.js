// Day 10 Examples
const user = { name: "Alex", age: 22, city: "Hyderabad" };

console.log("Keys:", Object.keys(user)); // ["name", "age", "city"]
console.log("Values:", Object.values(user)); // ["Alex", 22, "Hyderabad"]
console.log("Entries:", Object.entries(user)); // [["name", "Alex"], ["age", 22], ...]

// Converting entries array back to object:
const entries = [["a", 1], ["b", 2]];
const rebuiltObj = Object.fromEntries(entries);
console.log("Rebuilt Object:", rebuiltObj); // { a: 1, b: 2 }
