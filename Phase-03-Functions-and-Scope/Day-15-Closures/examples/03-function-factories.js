/**
 * Day 15 — Example 03: Function Factories
 */

// Function Factory for Discount Calculators
function createDiscountCalculator(discountPercent) {
  return function(price) {
    const discountAmount = price * (discountPercent / 100);
    return price - discountAmount;
  };
}

const vipDiscount = createDiscountCalculator(20);    // 20% off
const memberDiscount = createDiscountCalculator(10); // 10% off
const clearanceDiscount = createDiscountCalculator(50); // 50% off

console.log("--- Discount Factory Results for $100 ---");
console.log("VIP Price:", vipDiscount(100));            // $80
console.log("Member Price:", memberDiscount(100));      // $90
console.log("Clearance Price:", clearanceDiscount(100)); // $50
