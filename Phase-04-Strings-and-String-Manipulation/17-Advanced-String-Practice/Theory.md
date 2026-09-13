# Day 17 — Advanced String Practice — Theory & Concept Breakdown

## 1. What and Why
Solve advanced string algorithms including palindromes, anagrams, first non-repeating character, run-length encoding, and subsequence validation. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### Palindrome verification
Detailed breakdown of Palindrome verification...

### Anagram checking
Detailed breakdown of Anagram checking...

### First non-repeating char
Detailed breakdown of First non-repeating char...

### Run-length encoding
Detailed breakdown of Run-length encoding...

### Subsequence validation
Detailed breakdown of Subsequence validation...

## 3. Practical Usage & Code Snippets
```js
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

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
