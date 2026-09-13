/**
 * Day 12 — Example 03: Multi-Stage Data Processing Pipeline
 */

// Pipeline Stage 1: Clean raw input string
function sanitizeString(str) {
  return typeof str === 'string' ? str.trim() : '';
}

// Pipeline Stage 2: Convert to Uppercase
function toUpper(str) {
  return str.toUpperCase();
}

// Pipeline Stage 3: Format with User Tag
function formatTag(str) {
  return `[USER_TAG: #${str}]`;
}

// Combining pipeline stages sequentially
function processUsernamePipeline(rawInput) {
  const step1 = sanitizeString(rawInput);
  const step2 = toUpper(step1);
  const step3 = formatTag(step2);
  return step3;
}

console.log("--- Data Pipeline Processing ---");
const rawName = "   alex_developer   ";
const processedName = processUsernamePipeline(rawName);
console.log("Raw Input:", JSON.stringify(rawName));
console.log("Processed Output:", processedName);
