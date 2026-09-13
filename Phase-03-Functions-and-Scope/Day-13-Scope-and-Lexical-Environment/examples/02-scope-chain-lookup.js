/**
 * Day 13 — Example 02: Scope Chain Lookup Hierarchy
 */

const level0 = "Global Level 0";

function level1Function() {
  const level1 = "Function Level 1";

  function level2Function() {
    const level2 = "Function Level 2";

    if (true) {
      const level3 = "Block Level 3";

      // Scope Chain Lookup: level3 -> level2 -> level1 -> level0
      console.log("--- Reading from Level 3 Block Scope ---");
      console.log(level3);
      console.log(level2);
      console.log(level1);
      console.log(level0);
    }
  }

  level2Function();
}

level1Function();
