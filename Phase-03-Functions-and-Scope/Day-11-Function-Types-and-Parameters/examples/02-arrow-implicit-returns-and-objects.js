/**
 * Day 11 — Example 02: Arrow Implicit Returns and Object Literals Gotcha
 */

// 1. Implicit Return with Primitives
const add = (a, b) => a + b;
const isEven = n => n % 2 === 0;

console.log("Add:", add(15, 25));
console.log("Is 4 Even?:", isEven(4));

// 2. Object Return Trap: BAD vs GOOD
// BAD: JS treats {} as function block! (Commented out to prevent SyntaxError)
// const createProductBad = (id, name) => { id: id, name: name };

// GOOD: Wrap object literal in parentheses ()
const createProductGood = (id, name) => ({ id: id, name: name });

console.log("\n--- Object Return Gotcha ---");
// console.log("Bad Arrow Object:", createProductBad(101, "Laptop"));  // SyntaxError if unparenthesized
console.log("Good Arrow Object:", createProductGood(101, "Laptop")); // { id: 101, name: 'Laptop' }
