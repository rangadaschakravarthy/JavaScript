# Day 13 Exercises Solutions

## Easy Exercises (`easy/01-scope-lookup-basics.js`)

```javascript
function calculateFinalPrice(taxRate) {
  return globalPrice + (globalPrice * taxRate);
}

function testBlockScope(val) {
  let isPositive = false;
  if (val > 0) {
    let blockCheck = true;
    isPositive = blockCheck;
  }
  return isPositive;
}
```

---

## Medium Exercises (`medium/02-nested-scope-resolution.js`)

```javascript
function createNestedScale(val) {
  function scale(factor) {
    return val * factor * baseMultiplier;
  }
  return scale(3);
}
```

---

## Challenge Exercises (`challenge/03-complex-shadowing-and-blocks.js`)

```javascript
function resolveShadowedTracker() {
  let tracker = "OUTER_FUNC";
  let layer1 = tracker;
  let layer2 = "";
  let layer3 = "";

  if (true) {
    let tracker = "INNER_BLOCK";
    layer2 = tracker;

    if (true) {
      let tracker = "NESTED_BLOCK";
      layer3 = tracker;
    }
  }

  return {
    layer1,
    layer2,
    layer3,
    finalGlobal: "GLOBAL"
  };
}
```
