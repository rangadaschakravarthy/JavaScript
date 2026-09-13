/**
 * Day 15 — Exercise 02 (Medium): Custom Function Factories
 */

/**
 * Task: String Prefix/Suffix Factory
 * Function `createStringFormatter(prefix, suffix)`:
 * Returns function `format(text)` that wraps text as `${prefix}${text}${suffix}`.
 * 
 * Example:
 * const wrapHtml = createStringFormatter("<div>", "</div>");
 * wrapHtml("Hello") => "<div>Hello</div>"
 * 
 * @param {string} prefix 
 * @param {string} suffix 
 * @returns {Function}
 */
function createStringFormatter(prefix = "", suffix = "") {
  return function(text) {
    return `${prefix}${text}${suffix}`;
  };
}

module.exports = { createStringFormatter };
