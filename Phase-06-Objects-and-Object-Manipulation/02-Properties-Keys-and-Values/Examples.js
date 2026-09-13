// Day 02 Examples
const student = {
  name: "Sam",
  score: 95,
  isPassed: true,
  subjects: ["Math", "JS"],
  "1stPlace": true
};

console.log("=== Keys & Values ===");
console.log("student name key:", student.name);
console.log("student 1stPlace key:", student["1stPlace"]);

// Duplicate key overwrites earlier key:
const obj = { key: "first", key: "second" };
console.log("Duplicate key result:", obj.key); // "second"
