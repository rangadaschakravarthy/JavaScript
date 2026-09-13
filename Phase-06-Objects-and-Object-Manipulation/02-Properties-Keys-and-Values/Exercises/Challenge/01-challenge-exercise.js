// Challenge Exercise 01
function challengeTask(arr) {
  return arr.reduce((lookup, item) => {
    lookup[item.id] = item;
    return lookup;
  }, {});
}
console.log(challengeTask([{ id: 1, name: "A" }]));
