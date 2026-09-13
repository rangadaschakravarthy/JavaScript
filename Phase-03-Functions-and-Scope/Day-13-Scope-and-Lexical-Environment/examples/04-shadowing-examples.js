/**
 * Day 13 — Example 04: Variable Shadowing Across Blocks & Functions
 */

let username = "global_admin";
let score = 100;

console.log("--- Global Scope Initial ---");
console.log("username:", username, "| score:", score);

function processUser() {
  let username = "function_alex"; // Shadows global `username`
  console.log("\n--- Function Scope Shadowing ---");
  console.log("username inside function:", username); // "function_alex"

  if (true) {
    let score = 500; // Shadows outer function/global `score` inside block
    let username = "block_super_admin"; // Shadows function `username` inside block
    console.log("--- Inner Block Shadowing ---");
    console.log("username inside block:", username); // "block_super_admin"
    console.log("score inside block:", score);       // 500
  }

  console.log("--- After Block Exit ---");
  console.log("username inside function:", username); // "function_alex"
  console.log("score inside function:", score);       // 100
}

processUser();

console.log("\n--- Global Scope After Function Exit ---");
console.log("username:", username, "| score:", score); // Unchanged!
