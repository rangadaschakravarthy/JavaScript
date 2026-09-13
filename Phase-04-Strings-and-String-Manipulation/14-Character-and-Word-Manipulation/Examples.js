// Day 14 Examples
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

function removeVowels(str) {
  const vowels = "aeiouAEIOU";
  let result = "";
  for (const char of str) {
    if (!vowels.includes(char)) result += char;
  }
  return result;
}

console.log("Reverse 'hello':", reverseString("hello")); // "olleh"
console.log("Remove vowels 'JavaScript':", removeVowels("JavaScript")); // "JvScrpt"
