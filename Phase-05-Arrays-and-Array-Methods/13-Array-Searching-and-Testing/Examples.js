// Day 13 Examples
const scores = [65, 80, 92, 45, 78];

console.log("First score > 80:", scores.find(s => s > 80)); // 92
console.log("Any failed (< 50)?:", scores.some(s => s < 50)); // true
console.log("All passed (>= 50)?:", scores.every(s => s >= 50)); // false
