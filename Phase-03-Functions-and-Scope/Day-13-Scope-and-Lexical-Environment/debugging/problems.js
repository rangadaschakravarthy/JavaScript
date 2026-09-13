/**
 * Day 13 — Debugging Exercises
 */

// BUG 1: Accessing block-scoped variable outside block
function processUserRoleBuggy(isAdmin) {
  if (isAdmin) {
    let role = "ADMINISTRATOR";
  }
  // BUG: ReferenceError! role is trapped inside block scope
  // return role;
}

// BUG 2: Accidental global variable pollution in non-strict mode
function setConfigKeyBuggy(key) {
  configKey = key; // BUG: Missing const/let pollutes global scope!
}

module.exports = {
  processUserRoleBuggy,
  setConfigKeyBuggy
};
