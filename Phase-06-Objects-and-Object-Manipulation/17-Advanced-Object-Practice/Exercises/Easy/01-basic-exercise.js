// Easy Exercise 01
function easyTask(obj) {
  return typeof obj === "object" && obj !== null ? Object.keys(obj).length : 0;
}
console.log(easyTask({ a: 1, b: 2 }));
