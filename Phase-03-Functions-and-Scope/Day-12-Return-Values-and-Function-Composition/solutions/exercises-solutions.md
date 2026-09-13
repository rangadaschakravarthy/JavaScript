# Day 12 Exercises Solutions

## Easy Exercises (`easy/01-nested-calls-basics.js`)

```javascript
function quadruple(n) {
  return double(double(n));
}

function doubleThenAddTen(n) {
  return addTen(double(n));
}
```

---

## Medium Exercises (`medium/02-data-transformation-pipelines.js`)

```javascript
function processUserBioPipeline(rawBio) {
  const clean = sanitizeInput(rawBio);
  const truncated = truncateString(clean, 20);
  return wrapInHtmlTag(truncated, "p");
}
```

---

## Challenge Exercises (`challenge/03-pure-function-refactoring.js`)

```javascript
function calculateOrderTotalPure(items, taxRate, shippingFee) {
  let subtotal = 0;
  for (const item of items) {
    subtotal += item.price;
  }
  const tax = subtotal * taxRate;
  const total = subtotal + tax + shippingFee;
  return Number(total.toFixed(2));
}
```
