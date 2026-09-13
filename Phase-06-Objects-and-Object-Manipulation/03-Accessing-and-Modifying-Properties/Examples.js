// Day 03 Examples
const user = { name: "Alex", age: 22 };

// Dot vs Bracket notation
console.log("Dot access:", user.name);
console.log("Bracket access:", user["name"]);

// Adding and Updating
user.age = 23;
user.city = "Hyderabad";
console.log("After update & add:", user);

// Delete operator
const deleted = delete user.city;
console.log("Delete return value:", deleted); // true
console.log("After delete:", user);

// Dynamic key access via variable
const propKey = "name";
console.log("Dynamic user[propKey]:", user[propKey]); // "Alex"
