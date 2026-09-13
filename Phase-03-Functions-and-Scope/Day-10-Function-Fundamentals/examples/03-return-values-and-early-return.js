/**
 * Day 10 — Example 03: Return Values and Early Return Guard Clauses
 */

// 1. Returning Calculated Values vs Logging
function calculateRectangleArea(width, height) {
  return width * height;
}

const area1 = calculateRectangleArea(10, 5);
const area2 = calculateRectangleArea(4, 7);
console.log(`Area 1: ${area1} | Area 2: ${area2} | Combined: ${area1 + area2}`);

// 2. Early Return Guard Clauses
function evaluateDiscount(price, userTier) {
  // Guard clause 1: Invalid price
  if (price <= 0) {
    return 0;
  }
  // Guard clause 2: VIP Tier
  if (userTier === "VIP") {
    return price * 0.20; // 20% discount
  }
  // Guard clause 3: Member Tier
  if (userTier === "Member") {
    return price * 0.10; // 10% discount
  }

  // Default return for Guest
  return 0;
}

console.log("\n--- Discount Calculations ---");
console.log("VIP $100 Discount:", evaluateDiscount(100, "VIP"));
console.log("Member $100 Discount:", evaluateDiscount(100, "Member"));
console.log("Guest $100 Discount:", evaluateDiscount(100, "Guest"));
console.log("Invalid Price Discount:", evaluateDiscount(-50, "VIP"));
