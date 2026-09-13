// Day 05 Examples
const stack = [1, 2, 3];

// Add to end - O(1)
stack.push(4, 5);
console.log("After push(4, 5):", stack); // [1, 2, 3, 4, 5]

// Remove from end - O(1)
const popped = stack.pop();
console.log("Popped:", popped, "| Stack:", stack); // 5 | [1, 2, 3, 4]

// Add/Remove from start - O(N) because indexes re-shift
stack.unshift(0);
console.log("After unshift(0):", stack); // [0, 1, 2, 3, 4]
stack.shift();
console.log("After shift():", stack); // [1, 2, 3, 4]
