// Day 16 Examples
function isPalindromeTwoPointer(str) {
  const clean = str.toLowerCase().replaceAll(" ", "");
  let left = 0;
  let right = clean.length - 1;
  while (left < right) {
    if (clean[left] !== clean[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log("isPalindrome('racecar'):", isPalindromeTwoPointer("racecar")); // true
console.log("isPalindrome('hello'):", isPalindromeTwoPointer("hello")); // false
