// Day 04 Examples
let greeting = "hello";
console.log("Original:", greeting);

// Attempting character modification
greeting[0] = "H"; // Fails silently in non-strict mode
console.log("After str[0] = 'H':", greeting); // "hello"

// Correct way: Reassigning a NEW string
greeting = "H" + greeting.slice(1);
console.log("After reassignment:", greeting); // "Hello"
