// Medium Exercise 01
function mediumTask(obj) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k.toUpperCase(), v]));
}
console.log(mediumTask({ name: "Alex" }));
