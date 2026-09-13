/**
 * Day 15 — Exercise 03 (Challenge): Private Module Pattern
 */

/**
 * Task: Private Task Manager Module
 * Function `createTaskManager()` returning an object interface:
 * - `addTask(taskName)`: Adds string to private task array, returns total count.
 * - `getTasks()`: Returns a NEW COPY array of current tasks (preventing reference mutation!).
 * - `completeTask(taskName)`: Removes task if found, returns true/false.
 * 
 * @returns {Object}
 */
function createTaskManager() {
  const _tasks = [];

  return {
    addTask(taskName) {
      _tasks.push(taskName);
      return _tasks.length;
    },
    getTasks() {
      return [..._tasks]; // Return new copy to protect private array reference!
    },
    completeTask(taskName) {
      const index = _tasks.indexOf(taskName);
      if (index !== -1) {
        _tasks.splice(index, 1);
        return true;
      }
      return false;
    }
  };
}

module.exports = { createTaskManager };
