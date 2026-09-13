// Day 02 Examples
const word = "JavaScript";
console.log("=== String Indexing ===");
console.log("word:", word);
console.log("length:", word.length);
console.log("First char [0]:", word[0]);
console.log("Fifth char [4]:", word[4]);
console.log("Last char [len-1]:", word[word.length - 1]);

console.log("\n=== Out of Range & Methods ===");
console.log("word[99]:", word[99]); // undefined
console.log("word.charAt(99):", word.charAt(99)); // "" (empty string)
console.log("word.at(-1):", word.at(-1)); // "t"
console.log("word.at(-2):", word.at(-2)); // "p"
