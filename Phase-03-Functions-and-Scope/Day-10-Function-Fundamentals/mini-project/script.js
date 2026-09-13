/**
 * Day 10 Mini-Project: Utility Function Library
 */

function isEven(n) { return n % 2 === 0; }
function isOdd(n) { return n % 2 !== 0; }
function isPositive(n) { return n > 0; }
function findMax(a, b) { return a > b ? a : b; }
function findMin(a, b) { return a < b ? a : b; }
function calculateAverage(a, b) { return (a + b) / 2; }
function isEligibleToVote(age) { return age >= 18; }

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('runBtn');
    const outputDiv = document.getElementById('output');

    runBtn.addEventListener('click', () => {
      const a = Number(document.getElementById('numA').value);
      const b = Number(document.getElementById('numB').value);

      outputDiv.innerHTML = `
        isEven(${a}): <strong>${isEven(a)}</strong><br>
        isOdd(${b}): <strong>${isOdd(b)}</strong><br>
        findMax(${a}, ${b}): <strong>${findMax(a, b)}</strong><br>
        findMin(${a}, ${b}): <strong>${findMin(a, b)}</strong><br>
        calculateAverage(${a}, ${b}): <strong>${calculateAverage(a, b)}</strong><br>
        isEligibleToVote(${a}): <strong>${isEligibleToVote(a)}</strong>
      `;
    });
  });
}

if (typeof module !== 'undefined') {
  module.exports = { isEven, isOdd, isPositive, findMax, findMin, calculateAverage, isEligibleToVote };
  if (require.main === module) {
    console.log("--- CLI Test Output ---");
    console.log("isEven(10):", isEven(10));
    console.log("findMax(10, 25):", findMax(10, 25));
    console.log("calculateAverage(10, 25):", calculateAverage(10, 25));
  }
}
