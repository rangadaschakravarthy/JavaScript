/**
 * Day 15 Mini-Project: Closure Utility Factory
 */

function createStatefulCounter(initial = 0) {
  let count = initial;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => { count = initial; return count; },
    getValue: () => count
  };
}

const uiCounter = createStatefulCounter(0);

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const incBtn = document.getElementById('incBtn');
    const decBtn = document.getElementById('decBtn');
    const resetBtn = document.getElementById('resetBtn');
    const outputDiv = document.getElementById('output');

    const updateDisplay = () => {
      outputDiv.innerText = `Current Closure Count: ${uiCounter.getValue()}`;
    };

    incBtn.addEventListener('click', () => { uiCounter.increment(); updateDisplay(); });
    decBtn.addEventListener('click', () => { uiCounter.decrement(); updateDisplay(); });
    resetBtn.addEventListener('click', () => { uiCounter.reset(); updateDisplay(); });
  });
}

if (typeof module !== 'undefined') {
  module.exports = { createStatefulCounter };
  if (require.main === module) {
    console.log("--- CLI Closure Counter Test ---");
    const testCounter = createStatefulCounter(10);
    console.log("Start:", testCounter.getValue());
    console.log("Inc:", testCounter.increment());
    console.log("Inc:", testCounter.increment());
    console.log("Dec:", testCounter.decrement());
    console.log("Reset:", testCounter.reset());
  }
}
