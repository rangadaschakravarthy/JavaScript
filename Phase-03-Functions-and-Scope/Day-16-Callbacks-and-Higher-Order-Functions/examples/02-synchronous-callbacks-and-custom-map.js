/**
 * Day 16 — Example 02: Synchronous Callbacks and Custom Array HOFs
 */

// Custom myForEach HOF
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// Custom myMap HOF
function myMap(arr, transformCallback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(transformCallback(arr[i], i, arr));
  }
  return result;
}

const numbers = [10, 20, 30];

console.log("--- Custom myForEach Execution ---");
myForEach(numbers, (num, idx) => {
  console.log(`Index ${idx}: Item = ${num}`);
});

console.log("\n--- Custom myMap Execution ---");
const doubled = myMap(numbers, num => num * 2);
console.log("Doubled Array:", doubled); // [20, 40, 60]
