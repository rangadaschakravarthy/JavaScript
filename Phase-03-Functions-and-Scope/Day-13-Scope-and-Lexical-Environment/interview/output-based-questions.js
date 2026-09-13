/**
 * Day 13 — Interview Output-Based Questions
 */

// Q1: Scope chain lookup across multiple levels
const a = 1;
function outer() {
  const b = 2;
  function inner() {
    const c = 3;
    console.log("Q1 Output:", a + b + c);
  }
  inner();
}
outer(); // 6

// Q2: Lexical static scope binding
let x = 10;
function foo() {
  console.log("Q2 Output:", x);
}
function bar() {
  let x = 20;
  foo();
}
bar(); // 10
