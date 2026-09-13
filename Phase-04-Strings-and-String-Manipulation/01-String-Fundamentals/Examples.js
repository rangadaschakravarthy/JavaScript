// Day 01 Examples
console.log("=== String Literals & Types ===");
const single = 'Hello Single';
const double = "Hello Double";
const template = `Hello Template`;

console.log("typeof single:", typeof single);
console.log("typeof '' (empty):", typeof "");
console.log("typeof '123':", typeof "123");
console.log("typeof 123:", typeof 123);

console.log("\n=== Explicit String() Conversion ===");
console.log("String(123):", String(123));
console.log("String(true):", String(true));
console.log("String(null):", String(null));
console.log("String(undefined):", String(undefined));

console.log("\n=== Truthiness ===");
console.log("Boolean(''):", Boolean("")); // false
console.log("Boolean(' '):", Boolean(" ")); // true
console.log("Boolean('hello'):", Boolean("hello")); // true
