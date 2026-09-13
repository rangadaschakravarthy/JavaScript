# Day 16 Exercises Solutions

## Easy Exercises (`easy/01-basic-callback-execution.js`)

```javascript
function processString(str, callback) {
  if (typeof callback === 'function') {
    return callback(str);
  }
  return str;
}

function repeatAction(times, actionCallback) {
  if (typeof actionCallback !== 'function') return;
  for (let i = 0; i < times; i++) {
    actionCallback(i);
  }
}
```

---

## Medium Exercises (`medium/02-custom-array-processing-hofs.js`)

```javascript
function myFilter(arr, predicateFn) {
  const result = [];
  if (typeof predicateFn !== 'function') return result;
  for (let i = 0; i < arr.length; i++) {
    if (predicateFn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

function myReduce(arr, reducerFn, initialValue) {
  let acc = initialValue;
  let startIdx = 0;
  if (acc === undefined) {
    acc = arr[0];
    startIdx = 1;
  }
  for (let i = startIdx; i < arr.length; i++) {
    acc = reducerFn(acc, arr[i], i, arr);
  }
  return acc;
}
```

---

## Challenge Exercises (`challenge/03-chained-hof-composition.js`)

```javascript
function pipe(...fns) {
  return function(initialValue) {
    let result = initialValue;
    for (let i = 0; i < fns.length; i++) {
      if (typeof fns[i] === 'function') {
        result = fns[i](result);
      }
    }
    return result;
  };
}
```
