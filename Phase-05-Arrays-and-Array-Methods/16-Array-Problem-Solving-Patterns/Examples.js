// Day 16 Examples
// Pattern: Two-pointer technique for reversing array in-place
function reverseInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

console.log("Reversed in-place:", reverseInPlace([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
