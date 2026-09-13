# Debugging Exercises

### Bug 1
```js
const nums = [10, 2, 30];
nums.sort();
console.log(nums);
```
**Issue:** Default sort converts numbers to strings.
**Fix:** `nums.sort((a, b) => a - b);`
