// Day 14 Examples
const salaries = { Alex: 50000, Sam: 60000, John: 55000 };

// Summing values using Object.values() and reduce
const totalSalary = Object.values(salaries).reduce((sum, sal) => sum + sal, 0);
console.log("Total salary:", totalSalary); // 165000

// Inverting key-value pairs
function invertObject(obj) {
  const inverted = {};
  for (const [k, v] of Object.entries(obj)) {
    inverted[v] = k;
  }
  return inverted;
}
console.log("Inverted object:", invertObject({ a: "1", b: "2" })); // { '1': 'a', '2': 'b' }
