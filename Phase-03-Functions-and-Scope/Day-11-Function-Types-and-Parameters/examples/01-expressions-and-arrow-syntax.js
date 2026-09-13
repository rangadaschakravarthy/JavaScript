/**
 * Day 11 — Example 01: Function Expressions and Arrow Syntax
 */

// 1. Function Expression
const calculateArea = function(width, height) {
  return width * height;
};

// 2. Arrow Function (Explicit Return)
const calculateVolume = (length, width, height) => {
  const baseArea = length * width;
  return baseArea * height;
};

// 3. Single Parameter Arrow Shorthand
const doubleNumber = n => n * 2;

// 4. Zero Parameter Arrow Shorthand
const generateTimestamp = () => new Date().toISOString();

console.log("--- Executing Various Function Types ---");
console.log("Area (Expression):", calculateArea(5, 10));
console.log("Volume (Arrow):", calculateVolume(5, 10, 2));
console.log("Double (Arrow Shorthand):", doubleNumber(21));
console.log("Timestamp:", generateTimestamp());
