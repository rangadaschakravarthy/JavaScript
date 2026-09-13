// Day 17 Examples
// Two Sum problem: Find indexes of two numbers that add up to target
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

console.log("twoSum([2, 7, 11, 15], 9):", twoSum([2, 7, 11, 15], 9)); // [0, 1]
