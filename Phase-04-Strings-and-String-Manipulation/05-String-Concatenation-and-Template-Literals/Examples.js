// Day 05 Examples
const name = "Alex";
const age = 22;

console.log("=== Concatenation ===");
console.log("Name: " + name + ", Age: " + age);

console.log("\n=== Template Literals ===");
console.log(`Name: ${name}, Age: ${age}, Next Year: ${age + 1}`);

console.log("\n=== Coercion Rules ===");
console.log('"5" + 2:', "5" + 2); // "52"
console.log('5 + "2":', 5 + "2"); // "52"
console.log('"5" + true:', "5" + true); // "5true"
