// Day 13 Examples
function isEmpty(str) {
  return typeof str === "string" && str.length === 0;
}

function isBlank(str) {
  return typeof str === "string" && str.trim().length === 0;
}

function isValidUsername(username) {
  if (typeof username !== "string") return false;
  const trimmed = username.trim();
  return trimmed.length >= 3 && trimmed.length <= 15 && !trimmed.includes(" ");
}

console.log("isEmpty(''):", isEmpty("")); // true
console.log("isBlank('   '):", isBlank("   ")); // true
console.log("isValidUsername('alex_dev'):", isValidUsername("alex_dev")); // true
