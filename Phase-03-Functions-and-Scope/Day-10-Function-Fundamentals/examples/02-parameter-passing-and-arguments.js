/**
 * Day 10 — Example 02: Parameter Passing and Arguments Edge Cases
 */

// 1. Single and Multiple Parameters
function introduce(name, role, experienceYears) {
  console.log(`Developer: ${name} | Role: ${role} | Exp: ${experienceYears} years`);
}

console.log("--- Positional Parameter Mapping ---");
introduce("Alice", "Frontend Engineer", 3);
introduce("Bob", "Backend Engineer", 5);

// 2. Missing Arguments (Becomes undefined)
console.log("\n--- Missing Arguments Demonstration ---");
introduce("Charlie"); // Missing role & experienceYears

// 3. Extra Arguments (Positional excess ignored)
console.log("\n--- Extra Arguments Demonstration ---");
introduce("Diana", "DevOps", 4, "ExtraArg1", "ExtraArg2");
