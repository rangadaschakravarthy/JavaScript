# Day 10 — Replacing and Modifying Strings — Theory & Concept Breakdown

## 1. What and Why
Use replace() and replaceAll() for substring replacement, sanitizing inputs, masking sensitive data, and chaining transformations. In modern software development, strings represent textual data across user inputs, API payloads, file formats, and UI rendering.

## 2. Core Concepts & Syntax
### replace()
Detailed breakdown of replace()...

### replaceAll()
Detailed breakdown of replaceAll()...

### First occurrence vs all
Detailed breakdown of First occurrence vs all...

### Case sensitivity
Detailed breakdown of Case sensitivity...

### Text sanitization
Detailed breakdown of Text sanitization...

### Method chaining
Detailed breakdown of Method chaining...

## 3. Practical Usage & Code Snippets
```js
// Day 10 Examples
const text = "one cat, two cats, three cats";
console.log("replace('cat', 'dog'):", text.replace("cat", "dog"));
console.log("replaceAll('cat', 'dog'):", text.replaceAll("cat", "dog"));

function maskCreditCard(cardNum) {
  const last4 = cardNum.slice(-4);
  return last4.padStart(cardNum.length, "*");
}
console.log("Masked Card:", maskCreditCard("1234567890123456"));

```

## 4. Key Rules to Remember
1. Strings are primitive values and **immutable**.
2. Zero-based indexing means valid indexes range from `0` to `str.length - 1`.
3. All string transformation methods return brand new string instances.
