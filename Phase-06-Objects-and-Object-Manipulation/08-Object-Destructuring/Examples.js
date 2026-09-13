// Day 08 Examples
const user = { name: "Alex", age: 22, role: "Admin" };

// Destructuring with renaming and rest
const { name: userName, age, ...rest } = user;
console.log("userName:", userName, "| age:", age); // "Alex" | 22
console.log("rest properties:", rest); // { role: "Admin" }

// Default value fallback
const { city = "Unknown" } = user;
console.log("city default:", city); // "Unknown"
