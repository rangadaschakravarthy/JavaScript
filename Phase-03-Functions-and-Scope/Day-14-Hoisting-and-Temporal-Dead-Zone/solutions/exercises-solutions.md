# Day 14 Exercises Solutions

## Easy Exercises (`easy/01-hoisting-prediction.js`)

```javascript
function testSafeHoisting() {
  return getSystemStatus();
}

function getSystemStatus() {
  return "OPERATIONAL";
}

function inspectVarHoisting() {
  var localVal = "DONE";
  return [undefined, localVal];
}
```

---

## Medium Exercises (`medium/02-tdz-boundary-identification.js`)

```javascript
function safeTdzAccess(shouldInitialize) {
  if (!shouldInitialize) {
    return "SAFE_SKIP";
  }
  let secret = "PASSCODE_123";
  return secret;
}
```

---

## Challenge Exercises (`challenge/03-complex-hoisting-order.js`)

```javascript
function simulateHoistingCollisionTrace() {
  return {
    creationPhaseTypeOf: "function",
    executionPhaseValueAfterAssignment: 100
  };
}
```
