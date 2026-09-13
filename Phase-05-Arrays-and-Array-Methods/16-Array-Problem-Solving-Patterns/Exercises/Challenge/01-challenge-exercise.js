// Challenge Exercise 01
function challengeTask(arr) {
  return arr.filter(x => typeof x === "number").map(x => x * 2);
}
console.log(challengeTask([1, "two", 3]));
