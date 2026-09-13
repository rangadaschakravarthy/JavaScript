# Day 17 Exercises Solutions

## Easy Exercises (`easy/01-recursive-math-basics.js`)

```javascript
function sumToN(n) {
  if (n <= 1) return 1;
  return n + sumToN(n - 1);
}

function recursivePower(base, exp) {
  if (exp === 0) return 1;
  return base * recursivePower(base, exp - 1);
}
```

---

## Medium Exercises (`medium/02-recursive-string-and-array.js`)

```javascript
function sumArrayRecursive(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArrayRecursive(arr.slice(1));
}

function countCharRecursive(str, target) {
  if (str.length === 0) return 0;
  const match = str[0] === target ? 1 : 0;
  return match + countCharRecursive(str.slice(1), target);
}
```

---

## Challenge Exercises (`challenge/03-recursive-data-search.js`)

```javascript
function flattenArrayRecursive(arr) {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flat = flat.concat(flattenArrayRecursive(arr[i]));
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}
```
