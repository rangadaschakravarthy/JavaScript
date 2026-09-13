/**
 * Day 13 — Example 03: Lexical Scope vs Call Site Demonstration
 */

const targetScope = "I am in GLOBAL LEXICAL SCOPE";

function displayTarget() {
  // Lexical parent is Global Scope!
  console.log("displayTarget reads:", targetScope);
}

function invokeWithLocalVariable() {
  const targetScope = "I am in LOCAL CALLER SCOPE";
  console.log("Inside caller function...");
  displayTarget(); // Invoked here, but reads Global Lexical Scope!
}

console.log("--- Lexical Scope Static Resolution ---");
invokeWithLocalVariable();
// Output: "displayTarget reads: I am in GLOBAL LEXICAL SCOPE"
