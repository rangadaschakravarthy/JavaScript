/**
 * Day 15 — Debugging Exercises
 */

// BUG 1: Leaking private array reference
function createPrivateStoreBuggy() {
  const _items = ["item1", "item2"];
  return {
    // BUG: Returning _items directly allows caller to mutate private array via .push()!
    getItems: () => _items
  };
}

// BUG 2: Shared counter across independent calls
let sharedCount = 0; // BUG: Global counter causes independent instances to share state!
function createCounterBuggy() {
  return function() {
    sharedCount++;
    return sharedCount;
  };
}

module.exports = {
  createPrivateStoreBuggy,
  createCounterBuggy
};
