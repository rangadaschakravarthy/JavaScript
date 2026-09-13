// Day 03 Examples
let arr = [1, 2, 3, 4, 5];
console.log("Original length:", arr.length);

// Truncating array
arr.length = 3;
console.log("After length = 3:", arr); // [1, 2, 3]

// Expanding array (creates sparse holes)
arr.length = 5;
console.log("After length = 5:", arr); // [1, 2, 3, empty x 2]
console.log("Index 3 access:", arr[3]); // undefined
