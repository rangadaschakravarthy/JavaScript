/**
 * Day 13 Mini-Project: Scope Explorer
 */

const globalEnv = { appName: "ScopeExplorer", version: "1.0" };

function simulateScopeResolution(scenario) {
  switch (scenario) {
    case 'global':
      return `[GLOBAL SCOPE]\nVariable 'appName': "${globalEnv.appName}"\nLookup Trace: Global Scope Record -> FOUND.`;
    case 'function':
      return `[FUNCTION SCOPE]\nFunction 'test()': local secret = "SEC_123"\nOuter Read: ReferenceError (secret is trapped in Function Scope).`;
    case 'block':
      return `[BLOCK SCOPE]\nInside 'if(true)':\n- var leaked = "I leaked!" (Function Scoped)\n- let protected = "I am trapped!" (Block Scoped)\nOutside Block: leaked is accessible, protected throws ReferenceError.`;
    case 'shadow':
      return `[VARIABLE SHADOWING]\nOuter x = "GLOBAL"\nInner block x = "BLOCK"\nInside Block reads: "BLOCK"\nOutside Block reads: "GLOBAL" (Outer variable preserved!).`;
    default:
      return "Unknown Scenario";
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('runBtn');
    const scenarioSelect = document.getElementById('scenarioSelect');
    const outputDiv = document.getElementById('output');

    runBtn.addEventListener('click', () => {
      outputDiv.innerText = simulateScopeResolution(scenarioSelect.value);
    });
  });
}

if (typeof module !== 'undefined') {
  module.exports = { globalEnv, simulateScopeResolution };
  if (require.main === module) {
    console.log("--- Scope Explorer CLI Test ---");
    console.log(simulateScopeResolution('block'));
  }
}
