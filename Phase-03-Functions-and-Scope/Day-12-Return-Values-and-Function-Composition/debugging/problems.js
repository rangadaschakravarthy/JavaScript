/**
 * Day 12 — Debugging Exercises
 */

// BUG 1: Type mismatch in pipeline stage
function stage1Extract(obj) {
  return obj.name; // returns string e.g. "Alice"
}
function stage2Square(num) {
  return num * num; // BUG: Receives string "Alice", returns NaN!
}
function runPipelineBuggy(user) {
  return stage2Square(stage1Extract(user));
}

// BUG 2: Impure function changing caller balance on dry-run check
let balance = 500;
function canAffordImpure(price) {
  balance -= price; // BUG: Side effect mutates balance during pre-check!
  return balance >= 0;
}

module.exports = {
  stage1Extract,
  stage2Square,
  runPipelineBuggy,
  canAffordImpure
};
