// Day 15 Examples
function toSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replaceAll(" ", "-");
}

function getInitials(fullName) {
  const parts = fullName.trim().split(" ");
  let initials = "";
  for (const part of parts) {
    if (part.length > 0) initials += part[0].toUpperCase();
  }
  return initials;
}

console.log("Slug:", toSlug("  JavaScript Fundamentals 2026  ")); // "javascript-fundamentals-2026"
console.log("Initials:", getInitials("John Ronald Reuel Tolkien")); // "JRR T"
