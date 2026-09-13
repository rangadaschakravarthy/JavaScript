// Day 11 Examples
const user = { name: "Alex", status: undefined };

console.log("in operator check ('name'):", "name" in user); // true
console.log("in operator check ('status'):", "status" in user); // true
console.log("in operator check ('age'):", "age" in user); // false

console.log("Object.hasOwn(user, 'status'):", Object.hasOwn(user, "status")); // true
console.log("Object.hasOwn(user, 'age'):", Object.hasOwn(user, "age")); // false
