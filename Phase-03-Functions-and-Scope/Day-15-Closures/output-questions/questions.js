/**
 * Day 15 — Output Prediction Questions
 */

// Q1: Independent closure counters
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const c1 = makeCounter();
const c2 = makeCounter();
console.log("Q1a:", c1()); // 1
console.log("Q1b:", c1()); // 2
console.log("Q1c:", c2()); // 1

// Q2: Var loop closure trap
const fns = [];
for (var i = 0; i < 3; i++) {
  fns.push(() => i);
}
console.log("Q2 Output:", fns[0](), fns[1](), fns[2]()); // 3 3 3

// Q3: Shadowing inside closure
let val = 10;
function outer() {
  let val = 20;
  return function() {
    return val;
  };
}
const q3Fn = outer();
console.log("Q3 Output:", q3Fn()); // 20
