// Day 03 Examples
const str = "JavaScript 2026";

console.log("=== Forward Traversal ===");
for (let i = 0; i < str.length; i++) {
  // console.log(i, str[i]);
}

console.log("=== for...of Traversal ===");
for (const char of str) {
  // console.log(char);
}

function countVowels(text) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (const char of text) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log("Vowel count in 'JavaScript 2026':", countVowels(str));
