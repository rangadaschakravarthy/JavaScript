/**
 * Day 10 — Example 04: Function Naming and Single Responsibility Principle (SRP)
 */

// BAD: Violates SRP by doing 4 unrelated tasks (parsing, calculating, formatting, and logging)
function handleUserDataBad(name, score) {
  const cleanName = name.trim().toUpperCase();
  const isPass = score >= 50;
  const status = isPass ? "PASSED" : "FAILED";
  console.log(`STUDENT: ${cleanName} | SCORE: ${score} | RESULT: ${status}`);
}

// GOOD: Refactored into clean atomic single-responsibility functions
function normalizeName(name) {
  return typeof name === 'string' ? name.trim().toUpperCase() : '';
}

function checkPassingStatus(score) {
  return score >= 50 ? "PASSED" : "FAILED";
}

function formatStudentReport(name, score) {
  const cleanName = normalizeName(name);
  const status = checkPassingStatus(score);
  return `STUDENT: ${cleanName} | SCORE: ${score} | RESULT: ${status}`;
}

console.log("--- Single Responsibility Pattern Output ---");
const report = formatStudentReport("   samuel jackson   ", 82);
console.log(report);
