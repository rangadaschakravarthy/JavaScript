# Debugging Exercises

### Bug 1
```js
const key = "name";
const user = { name: "Alex" };
console.log(user.key);
```
**Issue:** Dot notation looks for literal key "key".
**Fix:** `user[key]`
