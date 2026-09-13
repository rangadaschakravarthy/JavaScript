/**
 * Day 11 Mini-Project: Function Playground
 */

// Function Declaration
function addDeclaration(a, b) {
  return a + b;
}

// Function Expression
const multiplyExpression = function(a, b) {
  return a * b;
};

// Arrow Function Implicit Return
const squareArrow = x => x * x;

// Rest Parameter Function
const sumRest = (...numbers) => numbers.reduce((acc, n) => acc + n, 0);

function executePlayground(type, inputsStr) {
  const nums = inputsStr.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));
  const n1 = nums[0] ?? 0;
  const n2 = nums[1] ?? 0;

  switch (type) {
    case 'decl':
      return `Declaration: addDeclaration(${n1}, ${n2}) => ${addDeclaration(n1, n2)}`;
    case 'expr':
      return `Expression: multiplyExpression(${n1}, ${n2}) => ${multiplyExpression(n1, n2)}`;
    case 'arrow':
      return `Arrow Shorthand: squareArrow(${n1}) => ${squareArrow(n1)}`;
    case 'rest':
      return `Rest Parameters: sumRest(${nums.join(', ')}) => ${sumRest(...nums)}`;
    default:
      return 'Invalid type';
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const runBtn = document.getElementById('runBtn');
    const fnType = document.getElementById('fnType');
    const numsInput = document.getElementById('numsInput');
    const outputDiv = document.getElementById('output');

    runBtn.addEventListener('click', () => {
      outputDiv.innerText = executePlayground(fnType.value, numsInput.value);
    });
  });
}

if (typeof module !== 'undefined') {
  module.exports = { addDeclaration, multiplyExpression, squareArrow, sumRest, executePlayground };
  if (require.main === module) {
    console.log("--- CLI Playground Test ---");
    console.log(executePlayground('decl', '5, 10'));
    console.log(executePlayground('arrow', '7'));
    console.log(executePlayground('rest', '1, 2, 3, 4, 5'));
  }
}
