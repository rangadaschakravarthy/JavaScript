# Day 14 — Character and Word Manipulation — Theory & Concept Breakdown

## 1. What and Why
Solve practical character and word-level problems including reversing strings, vowel removal, frequency counting, and letter swapping. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### String reversal
Detailed breakdown of String reversal...

### Vowel removal
Detailed breakdown of Vowel removal...

### Character frequency count
Detailed breakdown of Character frequency count...

### First & last char swap
Detailed breakdown of First & last char swap...

### Word count
Detailed breakdown of Word count...

## 3. Practical Usage & Code Snippets
```js
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

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
