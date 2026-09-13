// Day 04 Examples
const nums = [12, 45, 7, 89, 23];

function findMax(arr) {
  if (arr.length === 0) return null;
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

console.log("Max in [12, 45, 7, 89, 23]:", findMax(nums)); // 89

let sum = 0;
nums.forEach(n => sum += n);
console.log("Sum via forEach:", sum); // 176
