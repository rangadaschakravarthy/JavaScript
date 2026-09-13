/**
 * Day 14 — Exercise 02 (Medium): TDZ Boundary Identification
 */

/**
 * Task: Safely Access TDZ Variable
 * Implement function `safeTdzAccess(shouldInitialize)`:
 * - If shouldInitialize is false, return "SAFE_SKIP".
 * - If shouldInitialize is true, initialize `let secret = "PASSCODE_123"` and return secret.
 * - Ensure no ReferenceError is thrown in either branch!
 * 
 * @param {boolean} shouldInitialize 
 * @returns {string}
 */
function safeTdzAccess(shouldInitialize) {
  if (!shouldInitialize) {
    return "SAFE_SKIP";
  }
  let secret = "PASSCODE_123";
  return secret;
}

module.exports = { safeTdzAccess };
