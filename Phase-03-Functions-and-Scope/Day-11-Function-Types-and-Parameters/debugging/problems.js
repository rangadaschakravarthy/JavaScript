/**
 * Day 11 — Debugging Exercises
 */

// BUG 1: Arrow function returning object without parentheses
// const makeUserBuggy = (id, role) => { id: id, role: role }; // SyntaxError if un-commented!
const makeUserBuggy = (id, role) => ({ id: id, role: role });

// BUG 2: Rest parameter not placed last
// function processDataBuggy(...items, title) { return title; } // SyntaxError if un-commented!

// BUG 3: Trying to use arguments object inside arrow function
const sumArgsBuggy = () => {
  // BUG: arguments is not bound in arrow functions!
  // return Array.from(arguments).reduce((a, b) => a + b, 0);
};

module.exports = {
  makeUserBuggy,
  sumArgsBuggy
};
