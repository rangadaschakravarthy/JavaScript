// Day 14 Examples
const nums = [5, 10, 15, 20];
const total = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Total sum:", total); // 50

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const frequency = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("Fruit frequency:", frequency); // { apple: 3, banana: 2, orange: 1 }
