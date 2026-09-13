// Day 06 Examples
const numbers = [10, 20, 30, 40, 50, 30];

console.log("includes(30):", numbers.includes(30)); // true
console.log("indexOf(30):", numbers.indexOf(30)); // 2
console.log("lastIndexOf(30):", numbers.lastIndexOf(30)); // 5

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const user = users.find(u => u.id === 2);
console.log("Found user:", user); // { id: 2, name: "Bob" }
