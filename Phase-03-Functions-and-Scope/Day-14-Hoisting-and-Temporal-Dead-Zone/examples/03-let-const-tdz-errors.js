/**
 * Day 14 — Example 03: Temporal Dead Zone (TDZ) Boundaries
 */

console.log("--- Temporal Dead Zone (TDZ) Demonstration ---");

{
  // TDZ for `score` starts here at block entry!
  
  const safeAccess = () => {
    // Function defined in TDZ, but called AFTER initialization!
    return "Score is: " + score;
  };

  // console.log(score); // ❌ Un-commenting throws ReferenceError!
  
  let score = 500; // === TDZ ENDS HERE ===
  
  console.log("score after initialization:", score);
  console.log(safeAccess()); // Output: "Score is: 500"
}
