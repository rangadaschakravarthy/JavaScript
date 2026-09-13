/**
 * Day 10 — Debugging Exercises
 */

// BUG 1: Conflating console.log with return
function calculateTotalTaxBuggy(amount) {
  console.log(amount * 0.15); // BUG: Should return amount * 0.15
}

// BUG 2: Unreachable code after return
function checkUserRoleBuggy(role) {
  return role.toUpperCase();
  console.log("Role parsed successfully!"); // BUG: Unreachable line
}

// BUG 3: Automatic Semicolon Insertion (ASI) trap
function createConfigBuggy() {
  return
  {
    theme: "dark"
  }; // BUG: Returns undefined due to newline after return
}

module.exports = {
  calculateTotalTaxBuggy,
  checkUserRoleBuggy,
  createConfigBuggy
};
