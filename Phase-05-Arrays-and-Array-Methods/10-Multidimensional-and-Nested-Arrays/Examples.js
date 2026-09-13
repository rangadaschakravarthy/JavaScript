// Day 10 Examples
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log("Center element [1][1]:", matrix[1][1]); // 5

function sumMatrix(m) {
  let total = 0;
  for (let r = 0; r < m.length; r++) {
    for (let c = 0; c < m[r].length; c++) {
      total += m[r][c];
    }
  }
  return total;
}
console.log("Matrix sum:", sumMatrix(matrix)); // 45
