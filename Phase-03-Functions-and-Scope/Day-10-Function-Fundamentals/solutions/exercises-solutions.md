# Day 10 Exercises Solutions

## Easy Exercises (`easy/01-greeting-and-math-basics.js`)

```javascript
function generateGreeting(name) {
  return `Hello, ${name}!`;
}

function multiply(a, b) {
  return a * b;
}

function isEven(n) {
  return n % 2 === 0;
}
```

---

## Medium Exercises (`medium/02-validation-and-utility-helpers.js`)

```javascript
function findMaxOfThree(a, b, c) {
  let max = a;
  if (b > max) max = b;
  if (c > max) max = c;
  return max;
}

function calculateGrade(score) {
  if (score < 0 || score > 100) return "INVALID";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function convertTemperature(val, unit) {
  if (unit === 'F') {
    return Number(((val * 9 / 5) + 32).toFixed(2));
  }
  if (unit === 'C') {
    return Number(((val - 32) * 5 / 9).toFixed(2));
  }
  return val;
}
```

---

## Challenge Exercises (`challenge/03-multi-step-calculator.js`)

```javascript
function processInvoice(subtotal, taxRatePercent, userTier) {
  if (subtotal <= 0) {
    return { subtotal: 0, discountAmount: 0, taxAmount: 0, finalTotal: 0 };
  }

  let discountRate = 0;
  if (userTier === "VIP") discountRate = 0.15;
  else if (userTier === "MEMBER") discountRate = 0.05;

  const discountAmount = subtotal * discountRate;
  const discountedSubtotal = subtotal - discountAmount;
  const taxAmount = discountedSubtotal * (taxRatePercent / 100);
  const finalTotal = discountedSubtotal + taxAmount;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    discountAmount: Number(discountAmount.toFixed(2)),
    taxAmount: Number(taxAmount.toFixed(2)),
    finalTotal: Number(finalTotal.toFixed(2))
  };
}
```
