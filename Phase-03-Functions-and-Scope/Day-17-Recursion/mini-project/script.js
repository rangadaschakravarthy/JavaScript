/**
 * Day 17 Mini-Project: Recursive Number Toolkit
 */

function factorial(n) { if (n <= 1) return 1; return n * factorial(n - 1); }
function fibonacci(n) { if (n <= 0) return 0; if (n === 1) return 1; return fibonacci(n - 1) + fibonacci(n - 2); }
function power(base, exp) { if (exp === 0) return 1; return base * power(base, exp - 1); }
function sumDigits(n) { const c = Math.abs(n); if (c < 10) return c; return (c % 10) + sumDigits(Math.floor(c / 10)); }
function reverseString(str) { if (str.length <= 1) return str; return str[str.length - 1] + reverseString(str.slice(0, str.length - 1)); }

function executeRecursiveToolkit(algo, input) {
  const num = Number(input);
  switch (algo) {
    case 'fact':
      return `factorial(${num}) = ${factorial(num)}`;
    case 'fib':
      return `fibonacci(${num}) = ${fibonacci(num)}`;
    case 'pow':
      return `power(${num}, 3) = ${power(num, 3)}`;
    case 'digits':
      return `sumDigits(${num}) = ${sumDigits(num)}`;
    case 'reverse':
      return `reverseString("${input}") = "${reverseString(input)}"`;
    default:
      return "Unknown Algorithm";
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('runBtn');
    const algoSelect = document.getElementById('algoSelect');
    const valInput = document.getElementById('valInput');
    const outputDiv = document.getElementById('output');

    runBtn.addEventListener('click', () => {
      outputDiv.innerText = executeRecursiveToolkit(algoSelect.value, valInput.value);
    });
  });
}

if (typeof module !== 'undefined') {
  module.exports = { factorial, fibonacci, power, sumDigits, reverseString, executeRecursiveToolkit };
  if (require.main === module) {
    console.log("--- CLI Recursive Toolkit Test ---");
    console.log(executeRecursiveToolkit('fact', '5'));
    console.log(executeRecursiveToolkit('fib', '6'));
    console.log(executeRecursiveToolkit('reverse', 'recursion'));
  }
}
