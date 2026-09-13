/**
 * Day 12 — Exercise 02 (Medium): Data Transformation Pipeline
 */

function sanitizeInput(str) {
  return typeof str === 'string' ? str.trim() : '';
}

function truncateString(str, maxLength) {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
}

function wrapInHtmlTag(str, tag) {
  return `<${tag}>${str}</${tag}>`;
}

/**
 * Task: Pipeline Format User Bio
 * 1. Sanitize rawBio.
 * 2. Truncate sanitized bio to max 20 characters.
 * 3. Wrap truncated bio in "p" tag.
 * 
 * @param {string} rawBio 
 * @returns {string} Formatted HTML paragraph
 */
function processUserBioPipeline(rawBio) {
  // TODO: Implement using helper functions above
  return '';
}

module.exports = {
  sanitizeInput,
  truncateString,
  wrapInHtmlTag,
  processUserBioPipeline
};
