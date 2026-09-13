# Day 15 Exercises Solutions

## Easy Exercises (`easy/01-closure-counters-and-state.js`)

```javascript
function createAccumulator(startVal = 0) {
  let total = startVal;
  return function(val) {
    total += val;
    return total;
  };
}

function createDecrementer(start = 10) {
  let count = start;
  return function() {
    count--;
    return count;
  };
}
```

---

## Medium Exercises (`medium/02-custom-function-factories.js`)

```javascript
function createStringFormatter(prefix = "", suffix = "") {
  return function(text) {
    return `${prefix}${text}${suffix}`;
  };
}
```

---

## Challenge Exercises (`challenge/03-private-module-pattern.js`)

```javascript
function createTaskManager() {
  const _tasks = [];

  return {
    addTask(taskName) {
      _tasks.push(taskName);
      return _tasks.length;
    },
    getTasks() {
      return [..._tasks];
    },
    completeTask(taskName) {
      const index = _tasks.indexOf(taskName);
      if (index !== -1) {
        _tasks.splice(index, 1);
        return true;
      }
      return false;
    }
  };
}
```
