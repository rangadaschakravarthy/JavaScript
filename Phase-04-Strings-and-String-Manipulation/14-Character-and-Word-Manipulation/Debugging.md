# Debugging Exercises

### Bug 1
```js
let s = "hello";
s[0] = "H";
console.log(s);
```
**Issue:** Strings are immutable.
**Fix:** `s = "H" + s.slice(1);`
