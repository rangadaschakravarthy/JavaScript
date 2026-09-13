/**
 * Day 14 — Debugging Exercises
 */

// BUG 1: Accessing let in TDZ
function processUserScoreBuggy() {
  // BUG: ReferenceError! Accessing score before let declaration
  // console.log("Score:", score);
  let score = 100;
  return score;
}

// BUG 2: Early call to arrow function expression
function executePipelineBuggy() {
  // BUG: ReferenceError! arrowFn is in TDZ
  // return arrowFn(10);
  const arrowFn = (x) => x * 2;
}

module.exports = {
  processUserScoreBuggy,
  executePipelineBuggy
};
