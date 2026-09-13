/**
 * Day 16 — Example 04: Error-First Callback Pattern Demonstration
 */

function fetchUserData(userId, callback) {
  if (typeof callback !== 'function') return;

  if (!userId || userId <= 0) {
    // Pass Error object as FIRST argument
    return callback(new Error("Invalid User ID provided"), null);
  }

  // Pass null for error, result data as SECOND argument
  const mockUser = { id: userId, name: "Alice", role: "Admin" };
  callback(null, mockUser);
}

console.log("--- Error-First Callback Success Case ---");
fetchUserData(101, (err, user) => {
  if (err) {
    console.error("Failed:", err.message);
    return;
  }
  console.log("Success! Fetched User:", user.name, "(Role:", user.role, ")");
});

console.log("\n--- Error-First Callback Failure Case ---");
fetchUserData(-1, (err, user) => {
  if (err) {
    console.error("Failed:", err.message);
    return;
  }
  console.log("Success! Fetched User:", user);
});
