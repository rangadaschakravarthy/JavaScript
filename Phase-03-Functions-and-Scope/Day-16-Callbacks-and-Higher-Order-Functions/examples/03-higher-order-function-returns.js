/**
 * Day 16 — Example 03: Higher-Order Functions Returning Functions
 */

function createFilter(minThreshold) {
  // Returns predicate function closing over minThreshold
  return function(value) {
    return typeof value === 'number' && value >= minThreshold;
  };
}

const isPassingGrade = createFilter(50);
const isHonorRollGrade = createFilter(90);

console.log("--- HOF Returned Functions ---");
console.log("Is 45 passing?:", isPassingGrade(45));   // false
console.log("Is 75 passing?:", isPassingGrade(75));   // true
console.log("Is 95 honor roll?:", isHonorRollGrade(95)); // true
