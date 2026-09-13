/**
 * Day 14 Mini-Project: Hoisting Detective
 */

function analyzeHoistingCase(caseId) {
  switch (caseId) {
    case 'funcDecl':
      return `[CASE: Function Declaration]\nCode: greet(); function greet() { return "Hi"; }\nCreation Phase: Full body bound to 'greet'.\nResult: ✅ Success ("Hi").`;
    case 'varHoist':
      return `[CASE: var Hoisting]\nCode: console.log(x); var x = 10;\nCreation Phase: 'x' allocated & initialized to undefined.\nResult: ⚠️ Value is undefined.`;
    case 'letTDZ':
      return `[CASE: let/const TDZ]\nCode: console.log(y); let y = 20;\nCreation Phase: 'y' allocated as UNINITIALIZED in TDZ.\nResult: ❌ ReferenceError: Cannot access 'y' before initialization.`;
    case 'varExpr':
      return `[CASE: var Function Expression]\nCode: fn(); var fn = function() {};\nCreation Phase: 'fn' initialized to undefined.\nResult: ❌ TypeError: fn is not a function (evaluates undefined()).`;
    default:
      return "Unknown Case";
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('runBtn');
    const caseSelect = document.getElementById('caseSelect');
    const outputDiv = document.getElementById('output');

    runBtn.addEventListener('click', () => {
      outputDiv.innerText = analyzeHoistingCase(caseSelect.value);
    });
  });
}

if (typeof module !== 'undefined') {
  module.exports = { analyzeHoistingCase };
  if (require.main === module) {
    console.log("--- CLI Hoisting Detective Test ---");
    console.log(analyzeHoistingCase('letTDZ'));
  }
}
