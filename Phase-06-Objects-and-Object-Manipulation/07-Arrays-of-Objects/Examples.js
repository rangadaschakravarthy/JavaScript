// Day 07 Examples
const students = [
  { id: 1, name: "Alice", score: 95 },
  { id: 2, name: "Bob", score: 78 },
  { id: 3, name: "Charlie", score: 88 }
];

// Extracting names via map
const names = students.map(s => s.name);
console.log("Student names:", names); // ["Alice", "Bob", "Charlie"]

// Filtering high scorers (>= 80)
const topStudents = students.filter(s => s.score >= 80);
console.log("Top students:", topStudents);

// Finding student by ID
const student2 = students.find(s => s.id === 2);
console.log("Found student 2:", student2);
