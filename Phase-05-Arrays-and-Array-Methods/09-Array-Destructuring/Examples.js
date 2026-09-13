// Day 09 Examples
const point = [10, 20, 30];
const [x, y, z = 0] = point;
console.log("x, y, z:", x, y, z); // 10 20 30

// Variable swapping without temp variable
let a = 1, b = 2;
[a, b] = [b, a];
console.log("Swapped a, b:", a, b); // 2 1

const [head, ...tail] = [100, 200, 300, 400];
console.log("head:", head, "| tail:", tail); // 100 | [200, 300, 400]
