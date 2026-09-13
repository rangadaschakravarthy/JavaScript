/**
 * Day 12 — Example 01: Storing and Using Return Values in Expressions & Conditions
 */

function calculateItemTax(price) {
  return price * 0.08;
}

function calculateShipping(weightKg) {
  return weightKg > 5 ? 15.00 : 5.00;
}

const itemPrice = 100;
const itemWeight = 6;

// 1. Direct inline expression evaluation
const totalBill = itemPrice + calculateItemTax(itemPrice) + calculateShipping(itemWeight);
console.log("--- Direct Expression Result ---");
console.log(`Item ($${itemPrice}) + Tax ($${calculateItemTax(itemPrice)}) + Shipping ($${calculateShipping(itemWeight)}) = $${totalBill}`);

// 2. Using return values in logical conditionals
if (calculateShipping(itemWeight) > 10) {
  console.log("\nNotice: High shipping fee applied for heavy item.");
}
