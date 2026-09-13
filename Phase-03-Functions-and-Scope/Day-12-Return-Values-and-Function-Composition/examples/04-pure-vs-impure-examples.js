/**
 * Day 12 — Example 04: Pure vs Impure Functions and Refactoring
 */

// PURE: 100% Deterministic, parameter-only, zero side effects
function addPure(a, b) {
  return a + b;
}

// IMPURE 1: Depends on external variable state
let baseTax = 0.05;
function calculateTaxImpure(price) {
  return price * baseTax; // Changing baseTax mutates output for same price!
}

// IMPURE 2: Mutates array argument in-place
function appendItemImpure(list, item) {
  list.push(item); // Side effect: Modifies caller's array!
  return list;
}

// PURE REFACTOR: Returns a new array copy without mutating argument
function appendItemPure(list, item) {
  return [...list, item];
}

console.log("--- Pure vs Impure Demonstration ---");
const originalList = ["Apple", "Banana"];
console.log("Original before pure append:", originalList);

const newList = appendItemPure(originalList, "Cherry");
console.log("New List from pure function:", newList);
console.log("Original after pure append (Unchanged!):", originalList);
