// Day 15 Examples
const user = { name: "Alex", age: 22, active: true };

// Object to JSON String
const jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString); // '{"name":"Alex","age":22,"active":true}'

// JSON String to Object
const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject.name); // "Alex"
