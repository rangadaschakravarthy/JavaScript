// Day 17 Examples
function isAnagram(str1, str2) {
  const s1 = str1.toLowerCase().split("").sort().join("");
  const s2 = str2.toLowerCase().split("").sort().join("");
  return s1 === s2;
}

function compressString(str) {
  if (!str) return "";
  let compressed = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + count;
      count = 1;
    }
  }
  return compressed;
}

console.log("isAnagram('listen', 'silent'):", isAnagram("listen", "silent")); // true
console.log("compressString('aabcccccaaa'):", compressString("aabcccccaaa")); // "a2b1c5a3"
