/**
 * Day 16 — Debugging Exercises
 */

// BUG 1: Passing invocation instead of reference to event listener / HOF
function printTaskDone() {
  return "Task Finished!";
}
function runTaskBuggy(cb) {
  // BUG: Premature invocation passing return value
  // runTaskBuggy(printTaskDone()); // TypeError: cb is not a function
}

// BUG 2: Error-first callback missing return on error
function processDataBuggy(data, callback) {
  if (!data) {
    callback(new Error("No data")); // BUG: Missing return! Execution falls through!
  }
  callback(null, "Data Processed: " + data);
}

module.exports = {
  printTaskDone,
  processDataBuggy
};
