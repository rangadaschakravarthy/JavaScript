/**
 * Day 12 Mini-Project: Data Processing Pipeline
 */

// Stage 1: Validation Guard
function validateInput(str) {
  if (typeof str !== 'string' || str.trim().length === 0) {
    return null;
  }
  return str;
}

// Stage 2: Normalization
function normalizeText(str) {
  return str.trim().toLowerCase();
}

// Stage 3: Transformation / Metrics Calculation
function calculateMetrics(normalizedStr) {
  const words = normalizedStr.split(/\s+/).filter(Boolean);
  const characters = normalizedStr.length;
  return { wordCount: words.length, charCount: characters, sample: normalizedStr.slice(0, 30) };
}

// Stage 4: Formatting Report
function formatReport(metrics) {
  if (!metrics) return "ERROR: Invalid Input Payload";
  return `=== PIPELINE REPORT ===\nWord Count: ${metrics.wordCount}\nCharacter Count: ${metrics.charCount}\nNormalized Sample: "${metrics.sample}"`;
}

// Composed Pipeline Runner
function runPipeline(rawInput) {
  const valid = validateInput(rawInput);
  if (!valid) return formatReport(null);

  const normalized = normalizeText(valid);
  const metrics = calculateMetrics(normalized);
  return formatReport(metrics);
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('runBtn');
    const textInput = document.getElementById('textInput');
    const outputDiv = document.getElementById('output');

    runBtn.addEventListener('click', () => {
      outputDiv.innerText = runPipeline(textInput.value);
    });
  });
}

if (typeof module !== 'undefined') {
  module.exports = { validateInput, normalizeText, calculateMetrics, formatReport, runPipeline };
  if (require.main === module) {
    console.log("--- CLI Pipeline Execution ---");
    const raw = "   Hello Functional World of JavaScript!   ";
    console.log(runPipeline(raw));
  }
}
