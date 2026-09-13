// Day 08 Examples
const arr1 = [1, 2];
const arr2 = [3, 4];

console.log("concat():", arr1.concat(arr2)); // [1, 2, 3, 4]
console.log("spread:", [...arr1, ...arr2]); // [1, 2, 3, 4]

// Array.from with map function
const squares = Array.from([1, 2, 3], x => x * x);
console.log("Array.from squares:", squares); // [1, 4, 9]
