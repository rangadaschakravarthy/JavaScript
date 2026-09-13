// Day 12 Examples
const user = { name: "Alex" };

// Safe nested property access with ?.
console.log("user?.address?.city:", user?.address?.city); // undefined (No crash!)

// Nullish coalescing ?? vs Logical OR ||
const count = 0;
console.log("count || 10:", count || 10); // 10 (0 is falsy!)
console.log("count ?? 10:", count ?? 10); // 0  (0 is NOT null/undefined!)
