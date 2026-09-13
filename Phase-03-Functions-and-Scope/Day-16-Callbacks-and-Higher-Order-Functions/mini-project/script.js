/**
 * Day 16 Mini-Project: Callback Task Runner
 */

function runTaskSeries(tasks, onTaskComplete, onAllComplete) {
  const results = [];
  for (let i = 0; i < tasks.length; i++) {
    const taskFn = tasks[i];
    const res = taskFn();
    results.push(res);
    if (typeof onTaskComplete === 'function') {
      onTaskComplete(i + 1, res);
    }
  }
  if (typeof onAllComplete === 'function') {
    onAllComplete(results);
  }
  return results;
}

// Sample Tasks
const task1 = () => "Task 1: Validated Config";
const task2 = () => "Task 2: Processed Records";
const task3 = () => "Task 3: Sent Notification";

function executeRunnerUI() {
  const logs = [];
  const taskList = [task1, task2, task3];

  runTaskSeries(
    taskList,
    (step, res) => logs.push(`[STEP ${step}] Callback -> ${res}`),
    (allRes) => logs.push(`\n[COMPLETE] All ${allRes.length} tasks executed successfully!`)
  );

  return logs.join('\n');
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('runBtn');
    const outputDiv = document.getElementById('output');

    runBtn.addEventListener('click', () => {
      outputDiv.innerText = executeRunnerUI();
    });
  });
}

if (typeof module !== 'undefined') {
  module.exports = { runTaskSeries, executeRunnerUI };
  if (require.main === module) {
    console.log("--- CLI Callback Task Runner Test ---");
    console.log(executeRunnerUI());
  }
}
