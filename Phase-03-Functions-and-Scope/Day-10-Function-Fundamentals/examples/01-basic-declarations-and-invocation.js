/**
 * Day 10 — Example 01: Basic Declarations and Invocation
 */

// 1. Simple Function Declaration
function showSystemBanner() {
  console.log("=========================================");
  console.log("    JAVASCRIPT MASTERY: DAY 10 MODULE    ");
  console.log("=========================================");
}

// 2. Invoking Function Multiple Times
console.log("--- Executing Banner Function ---");
showSystemBanner();
showSystemBanner();

// 3. Sequential Functions Execution Flow
function startEngine() {
  console.log("1. Engine Initializing...");
}

function checkSensors() {
  console.log("2. All Sensors Operational!");
}

function launchApp() {
  startEngine();
  checkSensors();
  console.log("3. Application Running Successfully.");
}

console.log("\n--- Executing Launch Sequence ---");
launchApp();
