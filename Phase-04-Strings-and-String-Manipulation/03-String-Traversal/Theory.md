# Day 03 — String Traversal — Theory & Concept Breakdown

## 1. What and Why
Iterate over strings using for, for...of, and while loops. Perform forward/reverse traversal and character counting. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### for loop traversal
Detailed breakdown of for loop traversal...

### for...of iteration
Detailed breakdown of for...of iteration...

### Reverse traversal
Detailed breakdown of Reverse traversal...

### Counting vowels/consonants
Detailed breakdown of Counting vowels/consonants...

### Counting digits & spaces
Detailed breakdown of Counting digits & spaces...

### Building strings
Detailed breakdown of Building strings...

## 3. Practical Usage & Code Snippets
```js
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

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
