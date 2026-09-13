// Day 12 Examples
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens); // [2, 4, 6, 8, 10]

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];
const cheap = products.filter(p => p.price < 100);
console.log("Cheap products:", cheap);
