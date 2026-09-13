/**
 * Day 11 — Example 03: Default Parameters and Rest Parameters
 */

// 1. Default Parameters
function createServerConfig(host = "localhost", port = 8080, useSSL = false) {
  return { host, port, useSSL };
}

console.log("--- Default Parameters ---");
console.log("No args:", createServerConfig());
console.log("Custom host & port:", createServerConfig("192.168.1.1", 3000));
console.log("Undefined triggers default:", createServerConfig(undefined, undefined, true));

// 2. Rest Parameters (Variadic Functions)
function formatNames(title, ...names) {
  return `${title}: ${names.join(", ")}`;
}

console.log("\n--- Rest Parameters ---");
console.log(formatNames("Honor Roll", "Alice", "Bob", "Charlie", "Diana"));
console.log(formatNames("Single Winner", "Eve"));
