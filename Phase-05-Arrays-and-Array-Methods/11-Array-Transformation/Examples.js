// Day 11 Examples
const prices = [10, 20, 30];
const taxPrices = prices.map(p => p * 1.1);
console.log("Taxed prices:", taxPrices);

const names = ["alice", "bob", "charlie"];
const capitalized = names.map(n => n[0].toUpperCase() + n.slice(1));
console.log("Capitalized:", capitalized); // ["Alice", "Bob", "Charlie"]
