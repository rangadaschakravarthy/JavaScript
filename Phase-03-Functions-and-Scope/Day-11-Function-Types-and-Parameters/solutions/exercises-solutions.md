# Day 11 Exercises Solutions

## Easy Exercises (`easy/01-arrow-and-expression-conversion.js`)

```javascript
const square = x => x * x;

const createUser = (id, name) => ({ id, name, active: true });

const divide = function(a, b) {
  return b !== 0 ? a / b : null;
};
```

---

## Medium Exercises (`medium/02-rest-and-default-params.js`)

```javascript
function formatLogs(prefix = "INFO", ...messages) {
  if (messages.length === 0) return `[${prefix}]`;
  return `[${prefix}] ${messages.join(" | ")}`;
}

function calculateAverage(...numbers) {
  if (numbers.length === 0) return 0;
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total / numbers.length;
}
```

---

## Challenge Exercises (`challenge/03-flexible-variadic-functions.js`)

```javascript
function dispatchMath(operation = "sum", ...numbers) {
  switch (operation.toLowerCase()) {
    case "sum": {
      let total = 0;
      for (const n of numbers) total += n;
      return total;
    }
    case "product": {
      if (numbers.length === 0) return 1;
      let prod = 1;
      for (const n of numbers) prod *= n;
      return prod;
    }
    case "max": {
      if (numbers.length === 0) return -Infinity;
      return Math.max(...numbers);
    }
    case "min": {
      if (numbers.length === 0) return Infinity;
      return Math.min(...numbers);
    }
    default:
      return null;
  }
}
```
