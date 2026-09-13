/**
 * Day 13 — Exercise 03 (Challenge): Complex Shadowing Resolution
 */

let tracker = "GLOBAL";

/**
 * Task: Trace and Resolve Shadowed Layers
 * Evaluates tracker variable across 3 layers of block shadowing and returns an object:
 * {
 *   layer1: "OUTER_FUNC",
 *   layer2: "INNER_BLOCK",
 *   layer3: "NESTED_BLOCK",
 *   finalGlobal: "GLOBAL"
 * }
 * Ensure outer global `tracker` remains unmutated!
 * 
 * @returns {Object}
 */
function resolveShadowedTracker() {
  let tracker = "OUTER_FUNC";
  let layer1 = tracker;
  let layer2 = "";
  let layer3 = "";

  if (true) {
    let tracker = "INNER_BLOCK";
    layer2 = tracker;

    if (true) {
      let tracker = "NESTED_BLOCK";
      layer3 = tracker;
    }
  }

  return {
    layer1,
    layer2,
    layer3,
    finalGlobal: "GLOBAL"
  };
}

module.exports = { resolveShadowedTracker };
